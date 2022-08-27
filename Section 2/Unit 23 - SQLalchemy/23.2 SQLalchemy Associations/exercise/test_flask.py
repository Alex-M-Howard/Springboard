from unittest import TestCase

from app import app
from models import db, User

# Use test database and don't clutter tests with SQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly_test'
app.config['SQLALCHEMY_ECHO'] = False

# Make Flask errors be real errors, rather than HTML pages with error info
app.config['TESTING'] = True

# This is a bit of hack, but don't use Flask DebugToolbar
app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

db.drop_all()
db.create_all()


class BloglyViewsTestCase(TestCase):
    """Tests for views for Users."""

    def setUp(self):
        """Add sample user."""

        User.query.delete()

        new_user = User(first_name='Alex', last_name='Howard', image_url='www.google.com')
        db.session.add(new_user)
        db.session.commit()

        self.user_id = new_user.id

    def tearDown(self):
        """Clean up any fouled transaction."""

        db.session.rollback()

    def test_list_Users(self):
        with app.test_client() as client:
            resp = client.get("/users")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('Alex', html)
            self.assertIn('Howard', html)

    def test_show_User(self):
        with app.test_client() as client:
            resp = client.get(f"/users/{self.user_id}")
            html = resp.get_data(as_text=True)

            self.assertEqual(resp.status_code, 200)
            self.assertIn('<h1 class="text-center">Alex Howard</h1>', html)

    def test_add_User(self):
        with app.test_client() as client:
            form = {"first_name": "Lena", "last_name": "Ziegler", "image_url": 'www.google.com'}
            resp = client.post('/users/new', data=form, follow_redirects=True)
            html = resp.get_data(as_text=True)
            all_users = User.query.all()
            
            self.assertEqual(resp.status_code, 200)          
            self.assertIn("Lena Ziegler</a>", html)
