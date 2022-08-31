"""Blogly application."""

from flask import Flask, redirect, request, flash, render_template, session
from models import connect_db, db, User, Post, Tag, PostTags
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
    tags = Tag.query.all()
    return render_template("new_post.html", user=user, tags=tags)
  else:
    r = request.form
    title = r["title"]
    content = r["content"]    
    tags = r.getlist('tag')

    

    new_post = Post(title=title, content=content, user_id=id)
    new_post.add_post()
    
    if tags:
      for each in tags:
        new_post_tag = PostTags(post_id=new_post.id, tag_id=each)
        new_post_tag.add()
    
    return redirect(f"/users/{id}")
  
@app.route("/posts/<int:post_id>")
def show_post(post_id):
  """Show clicked on post"""
  post = Post.query.get_or_404(post_id)
  return render_template(f"post.html", post=post)

@app.route("/posts/<int:post_id>/edit", methods=["POST", "GET"])
def edit_post(post_id):
  """Show edit post page"""
  if request.method == "GET":
    post = Post.query.get_or_404(post_id)
    tags = Tag.query.all()
    post_tags = PostTags.query.filter_by(post_id=post.id).all()
    tag_ids = [post_tag.tag_id for post_tag in post_tags]
    
    return render_template("edit_post.html", post=post, tags=tags, tag_ids=tag_ids)
  else:
    r = request.form
    post = Post.query.get_or_404(post_id)
    post.title = r["title"] if r["title"] else post.title
    post.content = r["content"] if r["content"] else post.content
    tags = r.getlist("tag")
    post.tags = Tag.query.filter(Tag.id.in_(tags)).all()
        
    post.edit_post()
            
    return redirect(f"/posts/{post_id}")
     
@app.route("/posts/<int:post_id>/delete", methods=["POST"])
def delete_post(post_id):
  """Delete post from database"""
  post = Post.query.get_or_404(post_id)
  Post.delete_post(post_id)
  flash("Post successfully deleted!", 'success')
  
  return redirect(f"/users/{post.user_id}")

@app.route("/tags")
def list_tags():
  """List all tags with links to tag detail page"""
  tags = Tag.query.order_by('name').all()
  return render_template('tag_list.html', tags=tags)

@app.route("/tags/<int:tag_id>")
def show_tag_detail(tag_id):
  """Show tag detail, have links to edit form and to delete"""
  tag = Tag.query.get(tag_id)
  return render_template('tag.html', tag=tag)

@app.route("/tags/new", methods=["POST", "GET"])
def new_tag():
  """Get new_tag form, else post tag data to database"""
  if request.method=="GET": return render_template('new_tag.html')
  else:
    r = request.form
    tag = Tag(name=r["name"])
    tag.add_tag()
    
    flash(f"{tag.name} tag added")
    return redirect("/tags")
  
@app.route("/tags/<int:tag_id>/edit", methods=["POST", "GET"])
def edit_tag(tag_id):
  """Get edit tag page, else post tag edits"""
  if request.method=="GET": 
    tag = Tag.query.get_or_404(tag_id)
    return render_template('edit_tag.html', tag=tag)
  else:
    r = request.form
    tag = Tag.query.get_or_404(tag_id)
    tag.name = r["name"]
    
    tag.edit_tag()
    return redirect(f"/tags/{tag_id}")
  
@app.route("/tags/<int:tag_id>/delete", methods=["POST"])
def delete_tag(tag_id):
  """Delete selected tag"""
  tag = Tag.query.get_or_404(tag_id)
  Tag.delete_tag(tag_id)
  flash("Tag successfully deleted")
  
  return redirect("/tags")
    


