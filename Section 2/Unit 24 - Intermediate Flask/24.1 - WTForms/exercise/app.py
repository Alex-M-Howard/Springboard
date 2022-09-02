from flask import Flask, request, session, flash, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, Pet
from seed import seed
from forms import AddPetForm

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


@app.route("/add", methods=["GET", "POST"])
def add_pet():
    """Show add pet form; Add pet to DB"""
    form = AddPetForm()
  
    if form.validate_on_submit():
      name = form.name.data
      species = form.species.data
      photo_url = form.photo_url.data if form.photo_url.data else None
      age = form.age.data
      notes = form.notes.data
      flash(f"{name} added!")
      Pet(name=name, species=species, photo_url=photo_url, age=age, notes=notes).add_pet()
      
      return redirect("/")
  
    else:
      return render_template("add_pet_form.html", form=form)
    


