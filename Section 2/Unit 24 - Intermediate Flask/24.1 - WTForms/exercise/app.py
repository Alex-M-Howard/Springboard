from flask import Flask, request, session, flash, render_template, redirect
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, Pet
from seed import seed
from forms import AddPetForm, EditPetForm

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
    pets = Pet.query.order_by('name').all()
        
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
      flash(f"{name} added!", 'success')
      Pet(name=name, species=species, photo_url=photo_url, age=age, notes=notes).add_pet()
      
      return redirect("/")
  
    else:
      return render_template("add_pet_form.html", form=form)
    

@app.route("/<int:pet_id>", methods=["GET", "POST"])
def pet_profile(pet_id):
    """Display pet info, edit pet info"""
    pet = Pet.query.get(pet_id)
    form = EditPetForm()


    if form.validate_on_submit():
        pet.photo_url = form.photo_url.data if form.photo_url.data else pet.photo_url
        pet.notes = form.notes.data if form.notes.data else pet.notes
        pet.available = form.available.data if form.available.data else pet.available    
        pet.edit_pet()
        flash(f"{pet.name} successfully changed!", 'success')
        return redirect(f"/{pet_id}")
    else:
        form.notes.data = pet.notes
        form.available.data = pet.available
        return render_template("pet_profile.html", pet=pet, form=form)
