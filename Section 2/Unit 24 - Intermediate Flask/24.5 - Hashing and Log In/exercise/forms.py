from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField
from wtforms.validators import InputRequired, Email


class AddUserForm(FlaskForm):
    """Add new user form"""
    username = StringField("Username", validators=[InputRequired(message='You must enter a username')])
    password = PasswordField("Password", validators=[InputRequired(message='You must enter a password')])
    email = StringField("Email", validators=[InputRequired(), Email(granular_message=True)])
    first_name = StringField("First Name", validators=[InputRequired(message='Please enter your first name')])
    last_name = StringField("Last Name", validators=[InputRequired(message='Please enter your last name')])