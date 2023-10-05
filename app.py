from flask import Flask, render_template
import mysql.connector
app = Flask(__name__)
db = mysql.connector.connect(
    host="root",
    user="user",
    password="lodesmain@21",
    database="your_database"
)

@app.route("/")
def index():
    cursor = db.cursor()
    cursor.execute("SELECT * FROM your_table")
    data = cursor.fetchall()
    return render_template("index.html", data=data)