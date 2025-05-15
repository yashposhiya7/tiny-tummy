from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route("/", methods = ["GET", "POST"])
def index():
    testimonials = [
    {
        "name": "Emily – mother of a 6-month-old girl",
        "text": "Tiny Tummy changed our daily routine — for the better!"
    },
    {
        "name": "Raj – father of a premature baby boy",
        "text": "Love the sleep log. Now we actually know when our baby naps."
    },
    {
        "name": "Ana – single mom of a 1-year-old",
        "text": "Simple, beautiful, effective. My partner and I both use it."
    },
    {
        "name": "Mark – working dad of twins",
        "text": "The reminders have been life-saving for our busy schedules."
    },
    {
        "name": "Sofia – mother of a toddler with colic",
        "text": "Great for tracking growth and sleep together."
    },
    {
        "name": "Nina – first-time mom of a baby girl",
        "text": "I love how clean and calming the UI feels."
    },
    {
        "name": "Liam – stay-at-home dad to a newborn",
        "text": "As a dad, this app helped me stay involved."
    },
    {
        "name": "Olivia – mother of a 3-month-old boy",
        "text": "The voice command logging is GENIUS."
    },
    {
        "name": "James – co-parenting father of a 9-month-old",
        "text": "It keeps both me and my nanny in sync."
    },
    {
        "name": "Zara – mother of two under two",
        "text": "Most thoughtful baby tracker I’ve used."
    },
]


    return render_template("index.html",testimonials=testimonials)

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/signin")
def signin():
    return render_template("signin.html")

@app.route("/profile", methods=["GET","POST"])
def profile():
    if request.method == "POST":
        return render_template("dashboard.html")
    return render_template("profile.html") 

@app.route("/dashboard")
def dashboard():
    return render_template("dashboard.html")

if __name__ == '__main__':
    app.run(debug=True, port=5558)
