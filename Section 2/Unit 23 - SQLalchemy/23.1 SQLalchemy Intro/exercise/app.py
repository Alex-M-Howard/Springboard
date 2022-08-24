"""Blogly application."""

from flask import Flask, redirect, request, flash, render_template, session
from models import connect_db, db, User

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = "SECRET!"

connect_db(app)
db.create_all()


@app.route("/")
def home():
  """Landing page. Redirect for now"""
 
  return redirect("/users")

@app.route("/users")
def show_users():
  """Show list of users"""
  users = User.query.all()
  return render_template("users.html", users=users)

@app.route("/users/<int:id>")
def show_user(id):
  """Show user info"""
  user = User.query.get(id)
  return render_template(f"user.html", user=user)
    
@app.route("/users/new", methods=["POST", "GET"])
def add_form():
  """Show userform or add user to db"""
  if request.method == "GET" : return render_template("new.html")
  else:
    r = request
    fname = r.form["first_name"]
    lname = r.form["last_name"]
    img  = r.form["image_url"] if r.form["image_url"] else None

    new_user = User(first_name=fname, last_name=lname, image_url=img)
    new_user.add_user()
    
    return redirect("/")
  
@app.route("/users/<int:id>/edit", methods=["POST", "GET"])
def edit_user(id):
  """Show edit page"""
  if request.method == "GET" : 
    user = User.query.get(id)
    return render_template("edit.html", user=user)
  else:
    r = request    
    user = User.query.get(id)
    user.first_name = r.form["first_name"] if r.form["first_name"] else user.first_name
    user.last_name = r.form["last_name"] if r.form["last_name"] else user.last_name
    user.img = r.form["image_url"] if r.form["image_url"] else None

    User.edit_user(user)
    return redirect('/users')

@app.route("/users/<int:id>/delete", methods=["POST"])
def delete_user(id):
  """Delete user"""
  try:
    User.delete_user(id)
    flash("User successfully deleted!", 'success')
  except Exception as e: 
    print(e)

  return redirect("/users")