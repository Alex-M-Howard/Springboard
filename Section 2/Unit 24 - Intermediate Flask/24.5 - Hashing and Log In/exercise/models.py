from sqlalchemy.exc import IntegrityError, DataError
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
bcrypt = Bcrypt()


def connect_db(app):
    """Connect to database."""

    db.app = app
    db.init_app(app)


class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(20), nullable=False,  unique=True)
    password = db.Column(db.Text, nullable=False)
    email = db.Column(db.String(50), nullable=False)
    first_name = db.Column(db.String(30), nullable=False)
    last_name = db.Column(db.String(30), nullable=False)

    @classmethod
    def register(cls, username, pwd):
        """Register user w/hashed password & return user."""

        hashed = bcrypt.generate_password_hash(pwd)
        # turn bytestring into normal (unicode utf8) string
        hashed_utf8 = hashed.decode("utf8")

        # return instance of user w/username and hashed pwd
        return cls(username=username, password=hashed_utf8)

    @classmethod
    def authenticate(cls, username, pwd):
        """Validate that user exists & password is correct.

        Return user if valid; else return False.
        """

        user = User.query.filter_by(username=username).first()

        if user and bcrypt.check_password_hash(user.password, pwd):
            # return user instance
            return user
        else:
            return False

    def add_new_user(self, form):
        db.session.add(self)
        status = True
        try:
            db.session.commit()
        except IntegrityError:
            form.username.errors.append('Username already taken')
            status = False
        except DataError:
            if len(form.username.data) > 20: form.username.errors.append('Max Character Limit of 20')
            if len(form.email.data) > 50: form.email.errors.append('Max Character Limit of 50')
            if len(form.first_name.data) > 30: form.first_name.errors.append('Max Character Limit of 30')
            if len(form.last_name.data) > 30: form.last_name.errors.append('Max Character Limit of 30')
            status = False
        finally:
            return form, status