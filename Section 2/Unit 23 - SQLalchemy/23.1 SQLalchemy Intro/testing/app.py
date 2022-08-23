"""Demo app using SQLAlchemy."""

from flask import Flask, request, redirect, render_template, flash, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///playstore'


db = SQLAlchemy()
db.app = app
db.init_app(app)


app.config['SECRET_KEY'] = "SECRET!"




@app.route("/")
def home():
    """List pets and show add form."""

   
    return render_template("home.html")

