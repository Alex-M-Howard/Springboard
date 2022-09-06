from flask import Flask, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User
from sqlalchemy.exc import IntegrityError
from forms import AddUserForm

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
    return redirect('/register')

@app.route('/register', methods=["GET", "POST"])
def show_registration():
    """Show registration form"""
    form = AddUserForm()
 
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        
        new_user = User.register(username, password)
        new_user.email = form.email.data
        new_user.first_name = form.first_name.data
        new_user.last_name = form.last_name.data
        form, response = new_user.add_new_user(form)
        
        if response:
            session['user_id'] = new_user.id
            flash('Thanks for signing up!', "success")
            return redirect('/secrets')
        else:
            return render_template('register.html', form=form)
    else:
        return render_template('register.html', form=form)
            
        
@app.route('/login')
def show_login():
    pass

@app.route('/login', methods=["POST"])
def login_user():
    pass

@app.route('/secret')
def show_secrets():
    pass



