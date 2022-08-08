from boggle import Boggle
import json
from flask import Flask, request, session, render_template, redirect, url_for
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config["SECRET_KEY"] = "secretKey"
#debug = DebugToolbarExtension(app)


@app.route("/")
def home_page():
    """Return start page"""
    return render_template("start.html")

@app.route("/session", methods=["POST"])
def start_session():
    """Initialize session data when clicking start button"""
    if request.method == "POST":
        # Init Boggle board and score
        boggle = Boggle()
        board = boggle.make_board()
        
        session["board"] = board
        session["score"] = 0
        
        print("###############################")
        print(session["board"])
        print("Score:", session["score"])
        print("###############################")
    return redirect("/boggle")

@app.route("/boggle")
def boggle():
    """Display Boggle Game and Score"""
    
    return render_template("game.html", board=session["board"], score=session["score"])

@app.route("/check", methods=["POST"])
def check():
    """Check answer from boggle input"""
    response = request.get_json()
    print(response["guess"])
    
    
    return 'guess'

def check_answer(guess):
    """Get session board and check if guess can be found inside"""