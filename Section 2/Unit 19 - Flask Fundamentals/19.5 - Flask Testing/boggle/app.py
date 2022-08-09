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
    
    return render_template("game.html", board=session["board"], score=session["score"])

@app.route("/check", methods=["POST"])
def check():
    """Get json response input. Check answer. Return if word, and score"""
    guess = request.get_json()["guess"]
    result = check_answer(guess)
    
    if result == "not-on-board" or result == "not-word": 
        return json.dumps({
            "result": "invalid",
            "score": session["score"],
            "words": session["words"]
        })
    elif result == "Already Guessed": 
        return json.dumps({
            "result": "Already Guessed",
            "score": session["score"],
            "words": session["words"]
        })
    else:
        add_score(guess)
        return json.dumps({
            "result": "valid", 
            "score": session["score"],
            "words": session["words"]
        })


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
    session["score"] = score
    
    return


@app.route("/reset", methods=["POST"])
def reset():
    """Reset Boggle Game"""
    print("RESETTING BOGGLE")
    initialize_game()
    
    return "RESET"


def initialize_game():
    """Initalize variables and create new board"""
    # Init Boggle board and score 
    board = BOGGLE.make_board()
    session["words"] = []
    session["board"] = board
    session["score"] = 0
    
    print("#####################")
    print(session["words"])
    print(session["board"])
    print(session["score"])
    print("#####################")    
    return