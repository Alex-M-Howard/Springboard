"""Blogly application."""

from flask import Flask, redirect, request, flash, render_template, session
from models import add_user, get_all_users, get_user, connect_db, db

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY']="password1234Q!(#asdf12348"

connect_db(app)
db.create_all()

@app.route("/")
def home():
  """Landing page showing all users"""
 
  users = get_all_users()
  return render_template("users.html", users=users)

@app.route("/user<int:id>")
def show_user(id):
  """Show user info"""
  user = get_user(id)
  return render_template(f"user.html", user=user)
    
  
@app.route("/add-user", methods=["POST", "GET"])
def add_form():
  """Show userform or add user to db"""
  if request.method == "GET" : return render_template("add.html")
  else:
    r = request
    add_user(first_name=r.form["first_name"], last_name=r.form["last_name"], image_url=r.form["image_url"])
    return redirect("/")