"""User model tests."""

# run these tests like:
#
#    python -m unittest test_user_model.py


import os
from unittest import TestCase

from models import db, User, Message, Follows, Likes

from sqlalchemy.exc import IntegrityError

#from psycopg2.errors import UniqueViolation
from psycopg2.errorcodes import UNIQUE_VIOLATION
from psycopg2 import errors

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app

from app import app

# Create our tables (we do this here, so we only create the tables
# once for all tests --- in each test, we'll delete the data
# and create fresh new clean test data

db.create_all()


class UserModelTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        db.session.rollback()
        """Create test client, add sample data."""

        User.query.delete()
        Message.query.delete()
        Follows.query.delete()

        self.client = app.test_client()
        

    def test_user_model(self):
        """Does basic model work?"""

        u = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )

        db.session.add(u)
        db.session.commit()

        # User should have no messages, followers, follows, or likes
        self.assertEqual(len(u.messages), 0)
        self.assertEqual(len(u.followers), 0)
        self.assertEqual(len(u.following), 0)
        self.assertEqual(len(u.likes), 0)
        
    def test_user_repr(self):
        """Does user__repr__() work?"""
        
        user = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )

        db.session.add(user)
        db.session.commit()

        self.assertEqual(user.__repr__(), f"<User #{user.id}: {user.username}, {user.email}>")
        
        
    def test_user_is_followed_by(self):
        """Does user.is_followed_by() work?"""
        
        user = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )
        user2 = User(
            email="test2@test.com",
            username="testuser2",
            password="HASHED_PASSWORD"
        )
        user3 = User(
            email="test3@test.com",
            username="testuser3",
            password="HASHED_PASSWORD"
        )

        db.session.add_all([user, user2, user3])        
        
        user2.following.append(user)
        db.session.commit()
        
        
        self.assertTrue(user.is_followed_by(user2))
        self.assertFalse(user.is_followed_by(user3))
        
        
    def test_user_is_following(self):
        """Does user.is_following() work?"""
        
        user = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )
        user2 = User(
            email="test2@test.com",
            username="testuser2",
            password="HASHED_PASSWORD"
        )
        user3 = User(
            email="test3@test.com",
            username="testuser3",
            password="HASHED_PASSWORD"
        )

        db.session.add_all([user, user2, user3])        
        
        user.following.append(user2)
        db.session.commit()


        self.assertTrue(user.is_following(user2))
        self.assertFalse(user.is_following(user3))
        
        
    def test_signup(self):
        """Can a new user sign up?"""
        
        user = User(
            email="test@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )
        
        db.session.add(user)
        db.session.commit()
        
        user = User.query.filter_by(username='testuser').one()
        
        self.assertTrue(user)
        
        # What about a username/email that already exists?
        user2 = User(
            email="test2@test.com",
            username="testuser",
            password="HASHED_PASSWORD"
        )
        
        user3 = User(
            email="test@test.com",
            username="StarLord",
            password="hashed_pass"
        )

        db.session.add(user2)
        try:
            db.session.commit()
        except IntegrityError as e:
            self.assertIsInstance(e.orig, errors.UniqueViolation) # Username is same
        except Exception as e:
            print(e)
        
        
        db.session.rollback()
        db.session.add(user3)
        
        try:
            db.session.commit()
        except IntegrityError as e:
            self.assertIsInstance(e.orig, errors.UniqueViolation) # Email is same
        except Exception as e:
            print(e)
        
        
    def test_authenticate(self):
        """Does authentication work?"""
        pass
            