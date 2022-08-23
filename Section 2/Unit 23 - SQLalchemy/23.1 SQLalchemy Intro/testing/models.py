from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def connect_db(app):
    db.app = app
    db.init_app(app)
    
    
# Models go below
class Pet(db.Model):
    """pet"""
    
    __tablename__ = 'pets'
    
    id = db.Column(db.Integer,
                   primary_key=True,
                   autoincrement=True)
    
    name = db.Column(db.String(50),
                     nullable=False,
                     unique=True)

    species = db.Column(db.String(50), nullable=True)
    hunger = db.Column(db.Integer, nullable=False, default=50)
    
    
    def __repr__(self):
        p = self
        return f"<Pet id={p.id} name={p.name} species={p.species} hunger={p.hunger}>"
    
    def greet(self):
        return f"Hi, I am {self.name} the {self.species}."
    
    def feed(self, amt=20):
        self.hunger -= amt
        self.hunger = max(self.hunger, 0)
    
    @classmethod
    def get_by_species(cls, species):
        return cls.query.filter_by(species = species).all()
        