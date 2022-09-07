from flask import Flask, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User, Feedback
from forms import AddUserForm, UserLoginForm, FeedbackForm, DeleteForm
from werkzeug.exceptions import Unauthorized

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///auth"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SQLALCHEMY_ECHO"] = True
app.config["SECRET_KEY"] = "abc123"
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False


connect_db(app)
db.create_all()
toolbar = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    if 'user_id' in session:
        return redirect(f'/users/{session["user_id"]}')
    else:
        return redirect('/login')

@app.route('/register', methods=["GET", "POST"])
def show_registration():
    """Show registration form/Add User"""
    if 'user_id' in session:
        return redirect('/')
    form = AddUserForm()
 
    if form.validate_on_submit():
        new_user = User.register(form.username.data, form.password.data)
        new_user.email = form.email.data
        new_user.first_name = form.first_name.data
        new_user.last_name = form.last_name.data
        form, user_added = new_user.add_new_user(form)
        
        if user_added:
            session['user_id'] = new_user.id
            flash('Thanks for signing up!', "label success")
            return redirect(f'/users/{session["user_id"]}')
    
    return render_template('register.html', form=form)
                 
@app.route('/login', methods=["GET", "POST"])
def show_login():
    """Show Login/Login user"""
    if 'user_id' in session:
        return redirect('/')
    
    form = UserLoginForm()
    
    if form.validate_on_submit():
        user = User.authenticate(form.username.data, form.password.data)
        if user:
            session['user_id'] = user.id
            session['username'] = user.username
            flash('Successfully logged in!', "label success")
            return redirect(f'/users/{session["username"]}')
        else:
            flash('Username/Password Incorrect', "label alert")
    
    return render_template('login.html', form=form)

@app.route('/users/<username>')
def show_user_profile(username):
    if 'username' in session:
        if username != session['username']:
            return redirect(f"/users/{session['username']}")
        form = DeleteForm()
        user = User.query.get(session['user_id'])
        return render_template('user_page.html',form=form, user=user)
    else:
        flash('Must be logged in', 'label alert')
        return redirect('/login')

@app.route('/sign-out')
def sign_out():
    if 'user_id' in session:
        session.pop('user_id')
    return redirect('/')








@app.route("/users/<username>/delete", methods=["POST"])
def remove_user(username):
    """Remove user nad redirect to login."""

    if "username" not in session or username != session['username']:
        raise Unauthorized()

    user = User.query.get(session['user_id'])
    db.session.delete(user)
    db.session.commit()
    session.pop("username")
    session.pop("user_id")
    return redirect("/login")


@app.route("/users/<username>/feedback/new", methods=["GET", "POST"])
def new_feedback(username):
    """Show add-feedback form and process it."""

    if "username" not in session or username != session['username']:
        raise Unauthorized()

    form = FeedbackForm()

    if form.validate_on_submit():
        title = form.title.data
        content = form.content.data

        feedback = Feedback(
            title=title,
            content=content,
            username=username,
        )

        db.session.add(feedback)
        db.session.commit()

        return redirect(f"/users/{feedback.username}")

    else:
        return render_template("feedback/new.html", form=form)


@app.route("/feedback/<int:feedback_id>/update", methods=["GET", "POST"])
def update_feedback(feedback_id):
    """Show update-feedback form and process it."""

    feedback = Feedback.query.get(feedback_id)

    if "username" not in session or feedback.username != session['username']:
        raise Unauthorized()

    form = FeedbackForm(obj=feedback)

    if form.validate_on_submit():
        feedback.title = form.title.data
        feedback.content = form.content.data

        db.session.commit()

        return redirect(f"/users/{feedback.username}")

    return render_template("/feedback/edit.html", form=form, feedback=feedback)


@app.route("/feedback/<int:feedback_id>/delete", methods=["POST"])
def delete_feedback(feedback_id):
    """Delete feedback."""

    feedback = Feedback.query.get(feedback_id)
    if "username" not in session or feedback.username != session['username']:
        raise Unauthorized()

    form = DeleteForm()

    if form.validate_on_submit():
        db.session.delete(feedback)
        db.session.commit()

    return redirect(f"/users/{feedback.username}")

