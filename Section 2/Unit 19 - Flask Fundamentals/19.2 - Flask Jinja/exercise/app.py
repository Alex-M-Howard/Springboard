from time import clock_getres
from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension
from stories import story



app = Flask(__name__)
app.config['SECRET_KEY'] = "secretKey"
debug = DebugToolbarExtension(app)


@app.route('/')
def home_page():
    """Landing page - Add choice of words here"""
    
    return render_template('index.html', prompts=story.prompts)


@app.route('/story')
def show_story():
    """Show answers added into madlib"""
    answers = story.generate(request.args)
    
    return render_template("story.html", answers=answers)