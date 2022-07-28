from flask import Flask, request

app = Flask(__name__)


@app.route('/welcome')
def welcome_page():
    """This is the landing page!"""

    return "welcome"

@app.route('/welcome/home')
def home_page():
    """This brings you back to home!"""

    return "welcome home"

@app.route('/welcome/back')
def back_page():
    """This welcomes you back!"""

    return "welcome back"


