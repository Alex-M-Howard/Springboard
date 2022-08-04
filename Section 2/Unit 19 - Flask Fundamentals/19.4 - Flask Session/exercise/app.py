from flask import Flask, session, request, render_template, redirect, flash
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
    """If user hasn't already started survey, show start page"""
    instructions = satisfaction_survey.instructions
    title = satisfaction_survey.title
    choices = session.get("responses", "")
    
    if len(QUESTIONS) > 0:
        return redirect("/survey")
    elif not choices or len(QUESTIONS) > 1:
        return render_template("start.html", instructions=instructions, title=title)
    else:
        return render_template("thanks.html")
    
    
@app.route('/session',methods=["POST"])
def start_session():
    """Initialize session data when clicking start button"""
    if request.method == "POST":
        session["responses"] = []
        print(session["responses"])
    return redirect("/survey")


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
    """Store survey responses"""
    if request.method == "POST":
        choices = session["responses"]
        choices.append(request.form["answer"])
        session["responses"] = choices
        #USER_RESPONSES.append(request.form["answer"])
        QUESTIONS.pop(0)
        print(session["responses"])
    return redirect("/survey")
