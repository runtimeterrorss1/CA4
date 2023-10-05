from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)

# Create a function to establish a database connection
def create_db_connection():
    return mysql.connector.connect(
        host="127.0.0.1",
        user="root",
        password="lodesmain@21",
        database="mlops1"
    )

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        # Handle the form submission as previously mentioned

        try:
            # Create a database connection
            db = create_db_connection()

            # Create a cursor object to interact with the database
            cursor = db.cursor()

            # Execute a SELECT query
            cursor.execute("SELECT * FROM user")

            # Fetch the results
            results = cursor.fetchall()

            # Close the cursor and database connection
            cursor.close()
            db.close()

            # Pass the results to the template and render it
            return render_template("index.html", results=results)

        except mysql.connector.Error as err:
            # Handle any MySQL errors here
            return f"Error: {err}"

if __name__ == '__main__':
    app.run(host='0.0.0.0')
