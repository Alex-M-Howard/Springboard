from flask import Flask, request

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

@app.route('/search')
def search():
    term = request.args["term"]
    return f"<h1>Search Results For: {term}</h1>"


@app.route("/add-comment")
def add_comment_form():
    return """
    <h1>Add Comment</h1>
    <form method="POST">
        <input type='text' placeholder='comment' name='comment'/>
        <button>Submit</button>
    </form>
"""

@app.route("/add-comment", methods=["POST"])
def save_comment():
    comment = request.form["comment"]
    
    return f"""
    <h1>Saved your comment: {comment}</h1>
"""

@app.route('/r/<subreddit>')
def show_subreddit(subreddit):
    return "This is a subreddit"

POSTS = {
    1: "I like chicken tenders",
    2: "I hate mayo!",
    3: "Double rainbow all the way",
}

@app.route('/posts/<int:id>')
def find_id(id):
    post = POSTS[id]
    return post