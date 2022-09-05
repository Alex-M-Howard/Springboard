# from flask_wtf import FlaskForm
# from wtforms import StringField, IntegerField
# from wtform.validators import InputRequired, Optional, URL, NumberRange

# class AddCupcakeForm(FlaskForm):
#     flavor = StringField("Flavor", validators=[InputRequired()])
#     size = StringField("Size", validators=[InputRequired()])
#     rating = IntegerField("Rating", validators=[InputRequired(), NumberRange(min=1, max=10)])
#     image = StringField("Image URL", validators=[URL(message='Make sure URL starts with http or https'), Optional()])