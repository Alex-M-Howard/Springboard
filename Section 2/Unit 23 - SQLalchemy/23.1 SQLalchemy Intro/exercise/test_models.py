from unittest import TestCase

from app import app
from models import db, User

# Use test database and don't clutter tests with SQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_test'
app.config['SQLALCHEMY_ECHO'] = False
app.config['TESTING'] = True

db.drop_all()
db.create_all()


class UserModelTestCase(TestCase):
    """Tests for model for Users."""
    def setUp(self):
        """Clean up any existing users."""

        User.query.delete()

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_get_full_name(self):
      """Retrieve user's full name"""
      new_user = User(first_name='Alex', last_name='Howard', image_url='www.google.com')
      
      self.assertEqual('Alex Howard', new_user.get_full_name())

    def test_add_user(self):
      """Add user to database"""
      new_user = User(first_name='Alex', last_name='Howard', image_url='www.google.com')
      new_user.add_user()
      all_users =User.query.all()
      
      self.assertGreater(len(all_users), 0)

    def test_edit_user(self):
      """Add user to database and edit their info"""
      new_user = User(first_name='Alex', last_name='Howard', image_url='www.google.com')
      new_user.add_user()

      user = User.query.get(new_user.id)
      user.first_name = 'Mo'
      user.edit_user()
      
      all_users = User.query.all()
      self.assertEqual(len(all_users), 1)
      self.assertEqual(all_users[0].first_name, 'Mo')
      
    def test_delete_user(self):
      """Delete user from database"""
      new_user = User(first_name='Alex', last_name='Howard', image_url='www.google.com')
      new_user.add_user()
      
      User.delete_user(new_user.id)
      all_users = User.query.all()      
      self.assertEqual(len(all_users), 0)