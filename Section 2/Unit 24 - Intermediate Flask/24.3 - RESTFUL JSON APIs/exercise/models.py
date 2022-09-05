from flask_sqlalchemy import SQLAlchemy

GENERIC_IMAGE = 'https://tinyurl.com/demo-cupcake'
db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    
class Cupcake(db.Model):
    __tablename__ = 'cupcakes'
    
    id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    flavor = db.Column(db.Text, nullable=False)
    size = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Float, nullable=False)
    image = db.Column(db.Text, nullable=False, default=GENERIC_IMAGE)
    
    def serialize(self):
        """Serialize data for JSON return"""
        return {
                'id': self.id,
                'flavor': self.flavor,
                'size': self.size,
                'rating': self.rating,
                'image': self.image
            }
    
    def add_new_cupcake(self):
        db.session.add(self)
        db.session.commit()