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
        Follows.query.delete()

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
        
        with self.client as c:
            with c.session_transaction() as sess:
                sess[CURR_USER_KEY] = self.testuser.id
        
    def test_list_users(self):
        """Can we see a list of users? """
        
        response = self.client.get("/users")

        self.assertEqual(response.status_code, 200)
        self.assertIn('<p>@testuser2</p>', str(response.data, 'UTF-8'))


    def test_users_show(self):
        """Can we see user's profile?"""    
                    
        response = self.client.get(f"/users/{self.testuser.id}")

        self.assertEqual(response.status_code, 200)
        self.assertIn('id="header-image"', str(response.data, 'UTF-8'))
    
                   
    def test_show_following(self):
        """ Can we see who user is following? """        
        
        response = self.client.get(f"/users/{self.testuser.id}/following")
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('No followed users', str(response.data, 'UTF-8'))
        
        
        # Add person to follow
        user = User.query.get(self.testuser.id)
        user.following.append(self.testuser2)
        
        db.session.commit()
        
        response = self.client.get(f"/users/{self.testuser.id}/following")
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('testuser2', str(response.data, 'UTF-8'))
    
                
    def test_users_followers(self):
        """ Can we see who is following user? """

        response = self.client.get(f"/users/{self.testuser.id}/followers")
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('No followers yet', str(response.data, 'UTF-8'))   

        # Create follower for user 1
        user = User.query.get(self.testuser.id)
        user.followers.append(self.testuser2)
        db.session.commit()

        response = self.client.get(f"/users/{self.testuser.id}/followers")
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('testuser2', str(response.data, 'UTF-8'))   
    
                        
    def test_add_follow(self):
        """ Can we add a follower? """

        user_to_follow = User.query.filter_by(username='testuser2').one()
        response = self.client.post(f"/users/follow/{user_to_follow.id}", follow_redirects=True)
        
        self.assertEqual(response.status_code, 200)        
        self.assertIn('testuser2', str(response.data, 'UTF-8'))
        
        
        # Log user out and test again                
        self.client.get("/logout", follow_redirects=True)
        
        user_to_follow = User.query.filter_by(username='testuser2').one()
        response = self.client.post(f"/users/follow/{user_to_follow.id}", follow_redirects=True)
        
        self.assertEqual(response.status_code, 200)        
        self.assertIn('Access unauthorized', str(response.data, 'UTF-8'))
        
                
    def test_stop_following(self):
        """ Can we stop following a user? """

        user_to_follow = User.query.filter_by(username='testuser2').one()
        response = self.client.post(f"/users/follow/{user_to_follow.id}", follow_redirects=True)
        user_to_follow = User.query.filter_by(username='testuser2').one()
        response = self.client.post(f"/users/stop-following/{user_to_follow.id}", follow_redirects=True)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('No followed users', str(response.data, 'UTF-8'))
        
        
        # Log user out and test again
        self.client.get("/logout", follow_redirects=True)

        user_to_follow = User.query.filter_by(username='testuser2').one()
        response = self.client.post(f"/users/follow/{user_to_follow.id}", follow_redirects=True)
        user_to_follow = User.query.filter_by(username='testuser2').one()
        response = self.client.post(f"/users/stop-following/{user_to_follow.id}", follow_redirects=True)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('Access unauthorized', str(response.data, 'UTF-8'))
   
    
    def test_edit_profile(self):
        """ Can we edit our profile? """
        
        form = {
            "username": 'testuser',
            "email": 'newemail@gmail.com',
            "password": "testuser",
            "image_url": "www.dogphoto.com",
            "header_image_url": "www.dogphoto.com",
            "bio": "This says it all"            
        }
        
        response = self.client.post("/users/profile", follow_redirects=True, data=form)
        user = User.query.get(self.testuser.id)
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(user.email, 'newemail@gmail.com')
        self.assertEqual(user.image_url, 'www.dogphoto.com')
        self.assertEqual(user.header_image_url, 'www.dogphoto.com')
        self.assertEqual(user.bio, 'This says it all')
        
        # Log out and test again
        self.client.get("/logout", follow_redirects=True)
        
        form = {
            "username": 'testuser',
            "email": 'oldemail@gmail.com',
            "password": "testuser",
            "image_url": "www.catphoto.com",
            "header_image_url": "www.catphoto.com",
            "bio": "This says nothing"            
        }
        
        response = self.client.post("/users/profile", follow_redirects=True, data=form)
        user = User.query.get(self.testuser.id)
        
        self.assertEqual(response.status_code, 200)
        self.assertIn('Access unauthorized', str(response.data, 'UTF-8'))
        self.assertEqual(user.email, 'newemail@gmail.com')
        self.assertEqual(user.image_url, 'www.dogphoto.com')
        self.assertEqual(user.header_image_url, 'www.dogphoto.com')
        self.assertEqual(user.bio, 'This says it all')
        
        
    def test_delete_user(self):
        """ Can we delete the user """
      
        response = self.client.post("/users/delete", follow_redirects=True)
        user = User.query.filter_by(username="testuser").all()
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(user), 0)
        
        
    def test_delete_user_unauthorized(self):
        """ Are we unauthorized from deleting a user when logged out?"""
        self.client.get("/logout", follow_redirects=True)
        
        response = self.client.post("/users/delete", follow_redirects=True)
        user = User.query.filter_by(username="testuser").all()
        
        self.assertEqual(response.status_code, 200)
        self.assertEqual(len(user), 1)
        self.assertIn('Access unauthorized', str(response.data, 'UTF-8'))