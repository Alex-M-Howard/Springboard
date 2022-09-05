import json
from flask import Flask, request, session, flash, render_template, redirect, jsonify
from flask_debugtoolbar import DebugToolbarExtension
from models import connect_db, db, Cupcake
#from forms import AddCupCakeForm
from seed import seed


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///cupcakes'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True
app.config['SECRET_KEY'] = '!)@#$9asdf1234S14hjlk!51'
app.config['DEBUG_TB_ENABLED'] = True
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

toolbar = DebugToolbarExtension(app)
connect_db(app)
db.create_all()

#seed(db)


@app.route('/api/cupcakes')
def list_all_cupcakes():
    """-> JSON {'cupcakes': [{id, flavor, size, rating, image}]}"""
    cupcakes = Cupcake.query.all()
    serialized = [cupcake.serialize() for cupcake in cupcakes]
        
    return jsonify(cupcakes=serialized)
        
@app.route('/api/cupcakes', methods=['POST'])
def create_cupcake():
    """Add new cupcake -> JSON {cupcake: {id, flavor, size, rating, image}}"""
    flavor = request.json["flavor"]
    size = request.json["size"]
    rating = request.json["rating"]
    image = request.json["image"]

    new_cupcake = Cupcake(flavor=flavor, size=size, rating=rating, image=image)    
    new_cupcake.add_new_cupcake()
    
    return (jsonify(cupcake=new_cupcake.serialize()), 201)

@app.route('/api/cupcakes/<int:cupcake_id>')
def show_single_cupcake(cupcake_id):
    """-> JSON {cupcake: {id, flavor, size, rating, image}}"""
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    
    return jsonify(cupcake=cupcake.serialize())
    
@app.route('/api/cupcakes/<int:cupcake_id>', methods=['PATCH'])
def update_cupcake(cupcake_id):
    """ -> JSON {cupcake: {id, flavor, size, rating, image}"""
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    cupcake.flavor = request.json.get('flavor', cupcake.flavor)
    cupcake.size = request.json.get('size', cupcake.size)
    cupcake.rating = request.json.get('rating', cupcake.rating)
    cupcake.image = request.json.get('image', cupcake.image)
    
    cupcake.update()
    return jsonify(cupcake=cupcake.serialize())

@app.route('/api/cupcakes/<int:cupcake_id>', methods=['DELETE'])
def delete_cupcake(cupcake_id):
    """ -> JSON {message: "Deleted"}"""
    cupcake = Cupcake.query.get_or_404(cupcake_id)
    cupcake.delete()
    
    return jsonify({"message": "Deleted"})