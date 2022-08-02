from pickletools import read_unicodestring4
from flask import Flask, request, render_template, redirect, flash
from flask_debugtoolbar import DebugToolbarExtension
from surveys import satisfaction_survey

app = Flask(__name__)
app.config['SECRET_KEY'] = "ASDF(!@%#$LOHASF)!@#$11240895671"
debug = DebugToolbarExtension(app)

USER_RESPONSES = []
QUESTIONS = []

for each in satisfaction_survey.questions:
    QUESTIONS.append({
        "question": each.question,
        "choices": each.choices,
    }) 

@app.route('/')
def home_page():
    """Show start page with name of survey, instructions, and a start button."""
    instructions = satisfaction_survey.instructions
    title = satisfaction_survey.title
    
    return render_template("start.html", instructions=instructions, title=title)


@app.route('/survey')
def survey_page():
    """Show survey questions"""
    if len(QUESTIONS) > 0:
        question = QUESTIONS[0]["question"]
        choices = QUESTIONS[0]["choices"]
        title = satisfaction_survey.title
        
        return render_template("survey.html", title=title, question=question, choices=choices)
    else:
        return render_template("thanks.html")



@app.route('/answer', methods=["POST"])
def store_answer():
    """Store survey answers"""
    if request.method == "POST":
        USER_RESPONSES.append(request.form["answer"])
        QUESTIONS.pop(0)
        
    return redirect("/survey")
