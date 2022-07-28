from flask import Flask

app = Flask(__name__)

@app.route('/hello')
def say_hello():
    """Return simple greeting!"""
    
    html = "<html><body><h1>Hello</h1></body></html>"
    return html


@app.route('/goodbye')
def say_goodbye():
    return "Goodbye!"

@app.route('/')
def landing_page():
    html="""
        <html>
            <body>
                <h1>You've landed on the homepage!</h1>
            </body>
        </html>
    """
    return html