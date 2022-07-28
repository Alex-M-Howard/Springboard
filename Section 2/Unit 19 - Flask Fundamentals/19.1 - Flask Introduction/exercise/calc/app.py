# Put your app in here.
from flask import Flask, request
from operations import add, sub, div, mult

app = Flask(__name__)


@app.route('/add')
def add_page():
    """This page shows results of addition operation!"""
    num1 = request.args["a"]
    num2 = request.args["b"]
    
    sum = add(int(num1), int(num2))
    return str(sum)

@app.route('/sub')
def sub_page():
    """This page shows results of subtraction operation!"""
    num1 = request.args["a"]
    num2 = request.args["b"]
    
    difference = sub(int(num1), int(num2))
    return str(difference)

@app.route('/mult')
def mult_page():
    """This page shows results of multiplication operation!"""
    num1 = request.args["a"]
    num2 = request.args["b"]
    
    product = mult(int(num1), int(num2))
    return str(product)

@app.route('/div')
def div_page():
    """This page shows results of division operation!"""
    num1 = request.args["a"]
    num2 = request.args["b"]
    
    quotient = div(int(num1), int(num2))
    return str(quotient)

@app.route('/math/<operation>')
def math_page(operation):
    """This page shows results of any operation!"""
    
    operations = {
        "add": add,
        "sub": sub,
        "mult": mult,
        "div": div
    }
    
    num1 = request.args["a"]
    num2 = request.args["b"]
    
    quotient = operations[operation](int(num1), int(num2))
    return str(quotient)




