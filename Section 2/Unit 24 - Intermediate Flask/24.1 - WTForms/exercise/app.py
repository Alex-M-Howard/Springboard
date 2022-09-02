from flask import Flask, request, session, flash, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, Pet
from seed import seed

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_adoption'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = False
app.config['SECRET_KEY'] = '!)@#$9asdf1234S14hjlk!51'
app.config['DEBUG_TB_ENABLED'] = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)
connect_db(app)
#db.create_all()
seed(db)

@app.route('/')
def home():
    """Home page - Lists Pets"""
    pets = Pet.query.all()
        
    return render_template('index.html', pets=pets)





