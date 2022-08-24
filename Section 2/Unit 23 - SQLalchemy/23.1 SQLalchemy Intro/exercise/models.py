from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
  db.app = app
  db.init_app(app)
  
class User(db.Model):

  __tablename__ = 'users' 
  
  id = db.Column(db.Integer,
                 primary_key=True,
                 autoincrement=True)

  first_name = db.Column(db.String(25), nullable=False)
  last_name = db.Column(db.String(25), nullable=False)
  image_url = db.Column(db.String(255), default='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

  def __repr__(self):
    """User description in console"""
    u = self
    return f"<User id={u.id} first_name={u.first_name} last_name={u.last_name} image_url={u.image_url}"

  def get_all_users(self):
    """Get list of users"""
    return User.query.all()
  
  @classmethod  
  def get_user(id):
    """return user"""
    return User.query.get(id)
  
  @classmethod
  def add_user(first_name, last_name, image_url):
    """Add user to database"""
  
    new_user = User(first_name=first_name, last_name=last_name, image_url=image_url)
    db.session.add(new_user)
    db.session.commit()