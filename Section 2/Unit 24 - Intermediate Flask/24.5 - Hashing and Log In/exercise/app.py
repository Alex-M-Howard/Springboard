from flask import Flask, render_template, redirect, session, flash
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, User
from forms import AddUserForm, UserLoginForm

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
        return redirect('/secret')
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
            return redirect('/secret')
    
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
            flash('Successfully logged in!', "label success")
            return redirect('/secret')
        else:
            flash('Username/Password Incorrect', "label alert")
    
    return render_template('login.html', form=form)


@app.route('/secret')
def show_secrets():
    if 'user_id' in session:
        user = User.query.get(session['user_id'])
        return render_template('secret.html', user=user)
    else:
        flash('Must be logged in', 'label alert')
        return redirect('/login')

@app.route('/sign-out')
def sign_out():
    if 'user_id' in session:
        session.pop('user_id')
    return redirect('/')
