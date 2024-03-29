from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

def connect_db(app):
  db.app = app
  db.init_app(app)
  
class User(db.Model):
  """Users of the blog"""

  __tablename__ = 'users' 
  
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  first_name = db.Column(db.String(25), nullable=False)
  last_name = db.Column(db.String(25), nullable=False)
  image_url = db.Column(db.String(300), default='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
  posts = db.relationship('Post', cascade="all, delete", passive_deletes=True)
  
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
    cls.query.filter_by(id=user_id).delete()
    db.session.commit()
    
  def get_all_posts(self):
    """Get all posts from the user"""
    return self.posts
    

class Post(db.Model):
  """Posts that users can create for blog"""
  
  __tablename__ = 'posts'
  
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  title = db.Column(db.String(100), nullable=False)
  content = db.Column(db.String(5000), nullable=False)
  created_at = db.Column(db.DateTime, default=db.func.now())
  user_id = db.Column(db.Integer, db.ForeignKey('users.id', ondelete="CASCADE"))
  
  user = db.relationship('User', back_populates="posts")
  tags = db.relationship("Tag", secondary='post_tags', backref='posts')
  
  def add_post(self):
    """Add post to DB"""
    db.session.add(self)
    db.session.commit()
    
  def edit_post(self):
    """Edit current post"""
    db.session.add(self)
    db.session.commit()

  @classmethod  
  def delete_post(cls, post_id):
    """Delete user from DB"""
    cls.query.filter_by(id=post_id).delete()
    db.session.commit()    
  
  
class Tag(db.Model):
  """Tag that will sort posts""" 
  
  __tablename__ = 'tags' 
  
  id = db.Column(db.Integer, primary_key=True, autoincrement=True)
  name = db.Column(db.Text, nullable=False)
  
  
  
  def add_tag(self):
    """Add tag to DB"""
    db.session.add(self)
    db.session.commit()
    
  def edit_tag(self):
    """Edit current tag"""
    db.session.add(self)
    db.session.commit()

  @classmethod  
  def delete_tag(cls, tag_id):
    """Delete tag from DB"""
    cls.query.filter_by(id=tag_id).delete()
    db.session.commit()
    

class PostTags(db.Model):
  """Posts and their tags and Tags and their Posts"""
  
  __tablename__ = 'post_tags'
  
  post_id = db.Column(db.Integer, db.ForeignKey("posts.id", ondelete="CASCADE"),primary_key=True)
  tag_id = db.Column(db.Integer, db.ForeignKey("tags.id", ondelete="CASCADE"), primary_key=True)
  
  def add(self):
    """Add post-tag combo to DB"""
    db.session.add(self)
    db.session.commit()