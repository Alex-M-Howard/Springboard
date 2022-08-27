"""Blogly application."""

from flask import Flask, redirect, request, flash, render_template, session
from models import connect_db, db, User, Post
from blogly_seed import seed

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///blogly'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = "SECRET!"

connect_db(app)
seed(db)
#db.create_all()


@app.route("/")
def home():
  """Landing page. Redirect for now"""
 
  return redirect("/users")

@app.route("/users")
def show_users():
  """Show list of users"""
  users = User.query.order_by('last_name', 'first_name').all()
  return render_template("users.html", users=users)

@app.route("/users/<int:id>")
def show_user(id):
  """Show user info"""
  user = User.query.get_or_404(id)
  return render_template(f"user.html", user=user)
    
@app.route("/users/new", methods=["POST", "GET"])
def add_form():
  """Show userform or add user to db"""
  if request.method == "GET" : return render_template("new.html")
  else:
    r = request.form

    fname = r["first_name"]
    lname = r["last_name"]
    img  = r["image_url"] if r["image_url"] else None

    new_user = User(first_name=fname, last_name=lname, image_url=img)
    new_user.add_user()
    
    return redirect("/")
  
@app.route("/users/<int:id>/edit", methods=["POST", "GET"])
def edit_user(id):
  """Show edit page"""
  if request.method == "GET" : 
    user = User.query.get_or_404(id)
    return render_template("edit.html", user=user)
  else:
    r = request.form   
    user = User.query.get_or_404(id)
    user.first_name = r["first_name"] if r["first_name"] else user.first_name
    user.last_name = r["last_name"] if r["last_name"] else user.last_name
    user.image_url = r["image_url"] if r["image_url"] else None
    
    user.edit_user()
    return redirect('/users')

@app.route("/users/<int:id>/delete", methods=["POST"])
def delete_user(id):
  """Delete user"""
  
  User.delete_user(id)
  flash("User successfully deleted!", 'success')

  return redirect("/users")

@app.route("/users/<int:id>/posts/new", methods=["GET", "POST"])
def add_new_post(id):
  if request.method == "GET": 
    user = User.query.get_or_404(id)
    return render_template("new_post.html", user=user)
  else:
    r = request.form
    title = r["title"]
    content = r["content"]

    new_post = Post(title=title, content=content, user_id=id)
    new_post.add_post()
    
    return redirect(f"/users/{id}")