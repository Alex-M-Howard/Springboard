"""Demo app using SQLAlchemy."""

from flask import Flask, request, redirect, render_template
from SQLAlchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///sqla_intro'

connect_db(app)

from flask_debugtoolbar import DebugToolbarExtension
app.config['SECRET_KEY'] = "SECRET!"
debug = DebugToolbarExtension(app)


@app.route("/")
def home():
    """List pets and show add form."""

   
    return render_template("home.html")

