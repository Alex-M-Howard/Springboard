"""Follows model tests."""

# run these tests like:
#
#    python -m unittest test_message_model.py


import os
from unittest import TestCase

from models import db, User, Follows

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app

from app import app
db.create_all()


class FollowsModelTestCase(TestCase):
    """Test model for follows."""

    def setUp(self):
        """Create test client, add sample data."""
        db.session.rollback()
        User.query.delete()
        Follows.query.delete()

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
        
        self.client = app.test_client()
        

    def test_follows_model(self):
        """Does basic model work?"""

        user = User.query.filter_by(username='testuser').one()
        user2 = User.query.filter_by(username='testuser2').one()
        
        follow = Follows(
          user_following_id=user.id,
          user_being_followed_id=user2.id
        )
        
        db.session.add(follow)
        db.session.commit()
        
        # Likes should have user_id and message_id
        self.assertTrue(Follows.query.filter_by(user_following_id=user.id).one())
        self.assertTrue(Follows.query.filter_by(user_being_followed_id=user2.id).one())
  