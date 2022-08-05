from boggle import Boggle
from flask import Flask, request, session, render_template, redirect


app = Flask(__name__)
app.config["SECRET_KEY"] = "secretKey"

boggle_game = Boggle()


@app.route("/")
def home_page():
    
    return render_template("start.html")