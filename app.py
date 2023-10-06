from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

# Create a function to establish a database connection
def create_db_connection():
    return mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="lodesmain@21",
        database="mlops1",
    )

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":

        try:
            db = create_db_connection()

            cursor = db.cursor()

            cursor.execute("SELECT * FROM user")

            results = cursor.fetchall()

            cursor.close()
            db.close()

            return render_template("index.html", results=results)

        except mysql.connector.Error as err:
            return f"Error: {err}"

if __name__ == '__main__':
    app.run(host='0.0.0.0')
