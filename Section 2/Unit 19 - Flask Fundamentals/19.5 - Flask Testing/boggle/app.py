from boggle import Boggle
import json
from flask import Flask, request, session, render_template, redirect, url_for
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config["SECRET_KEY"] = "secretKey"
#debug = DebugToolbarExtension(app)
BOGGLE = Boggle()

@app.route("/")
def home_page():
    """Return start page"""
    return render_template("start.html")

@app.route("/session", methods=["POST"])
def start_session():
    """Initialize session data when clicking start button"""
    initialize_game()

    return redirect("/boggle")

@app.route("/boggle")
def boggle():
    """Display Boggle Game and Score"""
    
    return render_template("game.html", board=session["board"], score=session["score"], words=session["words"], highScore=session["highScore"])

@app.route("/check", methods=["POST"])
def check():
    """Get json response input. Check answer. Return if word, and score"""
    guess = request.get_json()["guess"]
    result = check_answer(guess)
    
    data = {
        "result": "",
        "score": session["score"],
        "words": session["words"]
    }
    
    if result == "not-on-board" or result == "not-word":
        data["result"] = "invalid"
    elif result == "Already Guessed":
        data["result"] = "Already Guessed"
    else:
        data["result"] = "valid"
        session["score"] = add_score(guess)
        data["score"] = session["score"]

    return json.dumps(data)

def check_answer(word):
    """Get session board and check if guess can be found inside. Add to session word list"""
    if word in session["words"]:
        return "Already Guessed"
    
    response = BOGGLE.check_valid_word(board=session["board"], word=word)    
    if response == 'ok': session["words"].append(word)

    return response

def add_score(word):
    """Add to total score based on length of word"""
    score = session["score"]
    score += len(word)
    
    return score


@app.route("/reset", methods=["POST"])
def reset():
    """Reset Boggle Game - Return new board"""
    if session["score"] > session["highScore"]:
        session["highScore"] = session["score"]

    highScore = session["highScore"];
    initialize_game()
    session["highScore"] = highScore
    return json.dumps(session["board"])


def initialize_game():
    """Initalize variables and create new board"""
    board = BOGGLE.make_board()
    session["words"] = []
    session["board"] = board
    session["score"] = 0
    session["highScore"] = 0
    
    return

