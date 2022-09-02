
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField, BooleanField
from wtforms.validators import InputRequired, Optional, URL, NumberRange
from models import allowed_pets

class AddPetForm(FlaskForm):
    """Form for adding new pets."""

    name = StringField("Pet Name", validators=[InputRequired()])
    species = SelectField("Species", validators=[InputRequired()], choices=allowed_pets)
    photo_url = StringField("Photo URL", validators=[URL(message='Make sure URL starts with http or https'), Optional()])
    age = IntegerField("Age", validators=[Optional(), NumberRange(min=0, max=30)])
    notes = StringField("Notes", validators=[Optional()])
    
    
class EditPetForm(FlaskForm):
    """Form for editing current pet."""
    photo_url = StringField("Photo URL", validators=[URL(message='Make sure URL starts with http or https'), Optional()])
    notes = StringField("Notes", validators=[Optional()])
    available = BooleanField("Available?", validators=[Optional()])
