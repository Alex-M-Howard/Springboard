from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    
#Models here
class Pet(db.Model):
    "Single pet"
    
    __tablename__ = 'pets'
    
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    species = db.Column(db.Text, nullable=False)
    photo_url = db.Column(db.Text, nullable=True, default='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9ddb0896352685.5eac4787a818f.jpg')
    age = db.Column(db.Integer, nullable=True)
    notes = db.Column(db.Text, nullable=True)
    available = db.Column(db.Boolean, nullable=False, default=True)
    
    def add_pet(self):
        """Commit Pet to DB"""
        db.session.add(self)
        db.session.commit()