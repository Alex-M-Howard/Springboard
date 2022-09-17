"""Message model tests."""

# run these tests like:
#
#    python -m unittest test_message_model.py


import os
from unittest import TestCase

from models import db, Message, User

from sqlalchemy.exc import IntegrityError
from psycopg2 import errors

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app

from app import app
db.create_all()


class MessageModelTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        """Create test client, add sample data."""
        db.session.rollback()
        User.query.delete()
        Message.query.delete()

        self.user = User(
          username='testuser',
          password='password',
          email='test@test.com'
          )
        
        db.session.add(self.user)
        db.session.commit()
        
        self.client = app.test_client()
        

    def test_message_model(self):
        """Does basic model work?"""

        message = Message(
            text="Hello World",
            user_id=self.user.id
        )

        db.session.add(message)
        db.session.commit()

        # Message should have text, timestamp, user_id, user ,likes
        message = Message.query.get(message.id)
        
        self.assertEqual(message.text, "Hello World")
        self.assertEqual(message.user_id, self.user.id)
        self.assertTrue(message.timestamp)
        self.assertEqual(len(message.likes), 0)
        self.assertTrue(message.user)
  

    def test_message_repr(self):
        """Does message.__repr__() work?"""

        message = Message(
            text="Hello World",
            user_id=self.user.id
        )

        db.session.add(message)
        db.session.commit()

        # Message should have text, timestamp, user_id, user ,likes
        message = Message.query.get(message.id)
        
        self.assertEqual(message.__repr__(), f"<Message #{message.id}:\n {self.user.username} - {message.timestamp} - {len(message.likes)} likes\n {message.text}>")
        