"""Message model tests."""

# run these tests like:
#
#    python -m unittest test_message_model.py


import os
from unittest import TestCase

from models import db, Message, User, Likes

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app

from app import app
db.create_all()


class LikesModelTestCase(TestCase):
    """Test model for likes."""

    def setUp(self):
        """Create test client, add sample data."""
        db.session.rollback()
        User.query.delete()
        Message.query.delete()

        user = User(
          username='testuser',
          password='password',
          email='test@test.com'
          )
        
        user2 = User(
          username='testuser2',
          password='password',
          email='test2@test.com'
          )
  
        db.session.add_all([user, user2])
        db.session.commit()
        
        message = Message(
          text="Hello World",
          user_id=user.id
        )
        
        db.session.add(message)
        db.session.commit()
        
        
        self.client = app.test_client()
        

    def test_likes_model(self):
        """Does basic model work?"""

        user = User.query.filter_by(username='testuser2').one()
        message = Message.query.filter_by(text="Hello World").one()
        
        like = Likes(
          user_id=user.id,
          message_id=message.id
        )
        
        db.session.add(like)
        db.session.commit()
        
        # Likes should have user_id and message_id
        self.assertTrue(Likes.query.filter_by(message_id=message.id).one())
        self.assertTrue(Likes.query.filter_by(user_id=user.id).one())
  