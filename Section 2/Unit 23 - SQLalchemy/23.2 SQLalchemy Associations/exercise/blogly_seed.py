"""Seed file to create sample data for db"""

from models import User, Post
#from app import app

# Create all tables

def seed(db):
  db.drop_all()
  db.create_all()

  # Add users to db
  u1 = User(first_name='Alex', last_name='Howard', image_url=None)
  u2 = User(first_name='Patrick',last_name='Stewart', image_url='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmagarticles.magzter.com%2Farticles%2F7185%2F295691%2F5b6d793871ca7%2FPatrick-Stewart-Actor-Star-Trek-Hollywood.jpg&f=1&nofb=1' )
  u3 = User(first_name='Thor',last_name='Odinson', image_url='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.4PyRcZeDWie4DqO2iR62TwHaJ9%26pid%3DApi&f=1' )
  u4 = User(first_name='Jane', last_name='Doe', image_url=None)
  u5 = User(first_name='John', last_name='Doe', image_url=None)
  
  db.session.add_all([u1, u2, u3, u4, u5])
  db.session.commit()
  
  
  # Add posts to db
  p1 = Post(title='My First Post', content='This is a really great blog', user_id=u1.id)
  p2 = Post(title='My First Post', content='This is a really great blog', user_id=u2.id)
  p3 = Post(title='My First Post', content='This is a really great blog', user_id=u3.id)
  p4 = Post(title='My First Post', content='This is a really great blog', user_id=u4.id)
  p5 = Post(title='My First Post', content='This is a really great blog', user_id=u5.id)
  p6 = Post(title='My Second Post', content='I see dead people? I know right.', user_id=u1.id)
  
  db.session.add_all([p1, p2, p3, p4, p5, p6])
  db.session.commit()
  