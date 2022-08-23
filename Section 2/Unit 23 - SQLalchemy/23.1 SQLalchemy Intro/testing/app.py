"""Demo app using SQLAlchemy."""
from flask import Flask, request, redirect, render_template, flash, session
from models import db, connect_db, Pet

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///pet_shop_db'
app.config['SECRET_KEY'] = "SECRET!"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

@app.route("/")
def home():
    """List pets and show add form."""
    print('were home')
    all_pets = Pet.query.all()
    
    return render_template("home.html", pets=all_pets)

@app.route("/<int:pet_id>")
def display_pet(pet_id):
    """Display pet info"""
    pet = Pet.query.get(pet_id)
    return render_template("details.html", pet=pet)