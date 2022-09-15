"""Users View tests."""

# run these tests like:
#
#    FLASK_ENV=production python -m unittest test_message_views.py


import os
from unittest import TestCase

from models import db, connect_db, Message, User, Likes, Follows

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


class UserViewTestCase(TestCase):
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
        
    def test_list_users(self):
        """Can we see a list of users? """

        # Since we need to change the session to mimic logging in,
        # we need to use the changing-session trick:

        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id

            # Now, that session setting is saved, so we can have
            # the rest of ours test

            response = c.get("/users")

            self.assertEqual(response.status_code, 200)
            self.assertIn('<p>@testuser2</p>', str(response.data, 'UTF-8'))
           

    def test_users_show(self):
        """Can we see user's profile?"""
        
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id
                
            response = c.get(f"/users/{self.testuser.id}")

            self.assertEqual(response.status_code, 200)
            self.assertIn('id="header-image"', str(response.data, 'UTF-8'))
            
        
             
    def test_show_following(self):
        """ Can we see who user is following? """
        
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id
            
            response = c.get(f"/users/{self.testuser.id}/following")
            
            self.assertEqual(response.status_code, 200)
            self.assertIn('No followed users', str(response.data, 'UTF-8'))
            
            
            
            # Add person to follow
            user = User.query.get(self.testuser.id)
            user.following.append(self.testuser2)
            
            db.session.commit()
            
            response = c.get(f"/users/{self.testuser.id}/following")
            
            self.assertEqual(response.status_code, 200)
            self.assertIn('testuser2', str(response.data, 'UTF-8'))
            
            
    # def test_users_followers(self):
    #     """ Can we see who is following user? """
    #     with self.client as c:
    #         with c.session_transaction() as sess:
    #             sess[CURR_USER_KEY] = self.testuser.id
            
    #         response = c.get(f"/users/{self.testuser.id}/followers")
            
    #         self.assertEqual(response.status_code, 200)
    #         self.assertIn('No followers yet', str(response.data, 'UTF-8'))   

        

        
    #     # with self.client as d:
    #     #     with d.session_transaction() as sess:
    #     #         sess[CURR_USER_KEY] = self.testuser2.id
                
                       
    #     print(self.testuser2)
            
            
    
            
    # def test_add_follow(self):
    #     """ Can we messages we've liked? """
        
    #     with self.client as c:
    #         with c.session_transaction() as sess:
    #             sess[CURR_USER_KEY] = self.testuser.id
            
    #         # Check for liked messages     
    #         message = Message.query.filter_by(text="HELLO TEST").one()
    #         response = c.post(f"/users/add_like/{message.id}", follow_redirects=True)
    #         user = User.query.get(self.testuser.id)
    #         response = c.get(f"/users/{self.testuser.id}/likes")
            
    #         self.assertIn('<p>HELLO TEST</p>', str(response.data, 'UTF-8'))
            
            
    #         # Unlike message and check again
    #         message = Message.query.filter_by(text="HELLO TEST").one()
    #         response = c.post(f"/users/add_like/{message.id}", follow_redirects=True)
    #         user = User.query.get(self.testuser.id)
    #         response = c.get(f"/users/{self.testuser.id}/likes")
            
    #         self.assertNotIn('<p>HELLO TEST</p>', str(response.data, 'UTF-8'))        
    
    # def test_stop_following(self):
    #   pass
    
    # def test_edit_profile(self):
    #   pass 
    
    # def delete_user(self):
    #   pass 
    