from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):
    def setUp(self):
        """Stuff to do before every test."""

        self.client = app.test_client()
        app.config['TESTING'] = True
        app.config['DEBUG_TB_HOSTS'] = ['dont-show-debug-toolbar']

    def test_homepage(self):
        """Make sure information is in the session and HTML is displayed"""

        with self.client:
            response = self.client.get('/')
            html = response.get_data(as_text=True)
            self.assertIn("<button>Start Game</button>", html)
            
    def test_redirect(self):
        """Make sure that session redirects to /boggle and session variables exist"""
        with self.client:
            response = self.client.post('/session')
            
            self.assertEqual(response.status_code, 302)
            self.assertEqual(response.location, "http://localhost/boggle")
            self.assertIn("score", session)
            self.assertIn("words", session)
            self.assertIn("board", session)
            
    def test_redirect_follow(self):
        """Make sure that session redirects to /boggle page and loads"""
        with self.client:
            response = self.client.post('/session', follow_redirects=True)
            html = response.get_data(as_text=True)
            
            self.assertIn('<div id="time">', html)
            self.assertEqual(response.status_code, 200)   
            
            
    def test_valid_word(self):   
        """Make sure words are valid"""
        
        with self.client:
            with self.client.session_transaction() as session:
                board = [["B", "A", "T", "M", "A"],
                                    ["B", "A", "T", "M", "A"],
                                    ["B", "A", "T", "M", "A"],
                                    ["B", "A", "T", "M", "A"],
                                    ["B", "A", "T", "M", "A"],
                                    ]
                boggle = Boggle()
                result = boggle.check_valid_word(board, "bat")
                self.assertIs(result, "ok")
                result = boggle.check_valid_word(board, "MAN")
                self.assertIs(result, "not-on-board")
                result = boggle.check_valid_word(board, "STYEKADFOIU")
                self.assertIs(result, "not-word")
            
    def test_invalid_word(self):
        pass
    def non_english_word(self):
        pass