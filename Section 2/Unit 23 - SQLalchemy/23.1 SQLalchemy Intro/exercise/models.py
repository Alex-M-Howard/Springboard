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
  image_url = db.Column(db.String(300), default='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

  def __repr__(self):
    """User description in console"""
    u = self
    return f"<User id={u.id} first_name={u.first_name} last_name={u.last_name} image_url={u.image_url}"
  
  def add_user(self):
    """Add user to DB"""
    db.session.add(self)
    db.session.commit()
    
  def edit_user(self):
    """Edit current user"""
    db.session.add(self)
    db.session.commit()
    
  def get_full_name(self):
    return  f"{self.first_name} {self.last_name}"
  
  @classmethod  
  def delete_user(cls, user_id):
    """Delete user from DB"""
    User.query.filter_by(id=user_id).delete()
    db.session.commit()