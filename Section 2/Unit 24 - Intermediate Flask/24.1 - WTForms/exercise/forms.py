from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import InputRequired, Optional

class AddPetForm(FlaskForm):
    """Form for adding new pets."""

    name = StringField("Pet Name", validators=[InputRequired()])
    spieces = StringField("Species" validators=[InputRequired()])
    photo_url = StringField("Species" validators=[Optional()])
    age = IntegerField("Species" validators=[InputOptional()])
    notes = StringField("Species" validators=[InputOptional()])
    
    
@app.route("/add", methods=["GET", "POST"])
def add_pet():
    """Show add pet form; Add pet to DB"""
    form = AddPetForm()
  
    if form.validate_on_submit():
      name = form.name.data
      species = form.species.data
      photo_url = form.photo_url.data
      age = form.age.data
      notes = form.notes.data
      flask(f"{name} added!")
      return redirect("/")
  
    else:
      return render_template("add_pet_form.html", form=form)
    
    
