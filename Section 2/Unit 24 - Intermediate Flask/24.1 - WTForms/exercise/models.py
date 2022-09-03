from flask_sqlalchemy import SQLAlchemy

GENERIC_IMAGE = "https://mylostpetalert.com/wp-content/themes/mlpa-child/images/nophoto.gif"
allowed_pets = ['CAT', 'DOG', 'PORCUPINE']
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
    photo_url = db.Column(db.Text, nullable=True)
    age = db.Column(db.Integer, nullable=True)
    notes = db.Column(db.Text, nullable=True)
    available = db.Column(db.Boolean, nullable=False, default=True)
    
    def add_pet(self):
        """Add & Commit Pet to DB"""
        db.session.add(self)
        db.session.commit()
    
    def edit_pet(self):
        """Edit & Commit Pet to DB"""
        db.session.add(self)
        db.session.commit()
        
    def image_url(self):
        """Return image for pet or else generic"""
        return self.photo_url or GENERIC_IMAGE