from flask import Flask, redirect, request, render_template, flash, session
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql:///playstore'

db = SQLAlchemy()
db.app = app
db.init_app(app)

app.config["SECRET_KEY"] = 'asdfpoiqwerlkasdf'

@app.route("/")
def home_page():
    """Landing page"""
    return render_template('home.html')