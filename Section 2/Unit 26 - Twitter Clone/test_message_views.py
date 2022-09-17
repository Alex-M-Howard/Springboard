"""Message View tests."""

# run these tests like:
#
#    FLASK_ENV=production python -m unittest test_message_views.py


import os
from unittest import TestCase

from models import db, connect_db, Message, User, Likes

# BEFORE we import our app, let's set an environmental variable
# to use a different database for tests (we need to do this
# before we import our app, since that will have already
# connected to the database

os.environ['DATABASE_URL'] = "postgresql:///warbler-test"


# Now we can import app
    
from app import app, CURR_USER_KEY

# Create our tables (we do this here, so we only create the tables
# once for all tests --- in each test, we'll delete the data
# and create fresh new clean test data

db.create_all()

# Don't have WTForms use CSRF at all, since it's a pain to test

app.config['WTF_CSRF_ENABLED'] = False


class MessageViewTestCase(TestCase):
    """Test views for messages."""

    def setUp(self):
        """Create test client, add sample data."""

        User.query.delete()
        Message.query.delete()

        self.client = app.test_client()

        self.testuser = User.signup(username="testuser",
                                    email="test@test.com",
                                    password="testuser",
                                    image_url=None)

        self.testuser2 = User.signup(username="testuser2",
                                    email="test2@test.com",
                                    password="testuser2",
                                    image_url=None)
        
        

        db.session.commit()

        # Since we need to change the session to mimic logging in,
        # we need to use the changing-session trick:

        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id

            # Now, that session setting is saved, so we can have
            # the rest of ours test

        
    def test_add_message(self):
        """Can use add a message?"""

        resp = self.client.post("/messages/new", data={"text": "Hello"})
        msg = Message.query.filter_by(text="Hello").one()
      
        self.assertEqual(resp.status_code, 302)
        self.assertEqual(msg.text, "Hello")
        
        
        """Are we denied if logged out?"""
        self.client.get("/logout", follow_redirects=True)
        
        resp = self.client.post("/messages/new", data={"text": "Testing Testing!"}, follow_redirects=True)
        msg = Message.query.filter_by(text="Testing Testing!").all()
        
        self.assertEqual(resp.status_code, 200)
        self.assertEqual(len(msg), 0)
        self.assertIn('Access unauthorized', str(resp.data, 'UTF-8'))
        
        
    def test_show_message(self):
        """ Can we show a user's message? """
        
        message = Message(text="Show Me", user_id=self.testuser.id)
        db.session.add(message)
        db.session.commit()
        
        response = self.client.get(f"/messages/{message.id}")
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('<p class="single-message">Show Me</p>', str(response.data, 'UTF-8'))
    
             
    def test_destroy_message(self):
        """ Can we delete a user's message? """
    
        message = Message(text="Show Me", user_id=self.testuser.id)
        db.session.add(message)
        db.session.commit()
        
        response = self.client.post(f"/messages/{message.id}/delete")
        message = Message.query.get(message.id)
        
        self.assertEqual(response.status_code, 302)
        self.assertEqual(message, None)


        """Are we denied if logged out?"""
        self.client.get("/logout", follow_redirects=True)
        
        message = Message(text="Show Me", user_id=self.testuser.id)
        db.session.add(message)
        db.session.commit()
        
        response = self.client.post(f"/messages/{message.id}/delete", follow_redirects=True)
        message = Message.query.get(message.id)
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(message.text, "Show Me")
        self.assertIn('Access unauthorized', str(response.data, 'UTF-8'))
            

    def test_like_unlike_message(self):
        """ Can we like or unlike a user's message? """
        
        # Add a test message
        user = User.query.filter_by(username='testuser2').one()
        message = Message(text="HELLO TEST", user_id=user.id)
        db.session.add(message)
        db.session.commit()
        
        
        # Check for liked messages     
        response = self.client.post(f"/users/add_like/{message.id}", follow_redirects=True)
        user = User.query.get(self.testuser.id)
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(user.likes), 1)
        
        
        # Unlike message and check again
        message = Message.query.filter_by(text="HELLO TEST").one()
        response = self.client.post(f"/users/add_like/{message.id}", follow_redirects=True)
        user = User.query.get(self.testuser.id)
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(user.likes), 0)           
        
        
        
        
        # Are we denied if logged out?
        self.client.get("/logout", follow_redirects=True)
        
        # Add a test message
        user = User.query.filter_by(username='testuser2').one()
        message = Message(text="UNAUTHORIZED TEST", user_id=user.id)
        message2 = Message(text="UNAUTHORIZED UNLIKE", user_id=user.id)

        user_test_user = User.query.filter_by(username='testuser').one()
        user_test_user.likes.append(message2)

        db.session.add(message)
        db.session.commit()
        
        
        # Unauthorized like messages     
        response = self.client.post(f"/users/add_like/{message.id}", follow_redirects=True)
        user = User.query.get(self.testuser.id)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('Access unauthorized', str(response.data, 'UTF-8'))
        self.assertEqual(len(user.likes), 1)
        
        
        # Unauthorized Unlike message and check again
        message = Message.query.filter_by(text="UNAUTHORIZED UNLIKE").one()
        response = self.client.post(f"/users/add_like/{message.id}", follow_redirects=True)
        user = User.query.get(self.testuser.id)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('Access unauthorized', str(response.data, 'UTF-8'))
        self.assertEqual(len(user.likes), 1)           
        
        
    def test_show_liked_messages(self):
        """ Can we messages we've liked? """
        
        # Add a test message
        user = User.query.filter_by(username='testuser2').one()
        message = Message(text="HELLO TEST", user_id=user.id)
        db.session.add(message)
        db.session.commit()
    
        # Check for liked messages     
        message = Message.query.filter_by(text="HELLO TEST").one()
        response = self.client.post(f"/users/add_like/{message.id}", follow_redirects=True)
        user = User.query.get(self.testuser.id)
        response = self.client.get(f"/users/{self.testuser.id}/likes")
        
        self.assertIn('<p>HELLO TEST</p>', str(response.data, 'UTF-8'))
        
        
        # Unlike message and check again
        message = Message.query.filter_by(text="HELLO TEST").one()
        response = self.client.post(f"/users/add_like/{message.id}", follow_redirects=True)
        user = User.query.get(self.testuser.id)
        response = self.client.get(f"/users/{self.testuser.id}/likes")
        
        self.assertNotIn('<p>HELLO TEST</p>', str(response.data, 'UTF-8'))        
