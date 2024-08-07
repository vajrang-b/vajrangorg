from dotenv import load_dotenv
from flask import Flask, render_template
from flask_debugtoolbar import DebugToolbarExtension

import os

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)

# Set SECRET_KEY before initializing DebugToolbarExtension
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY')
app.config['DATABASE_URI'] = os.getenv('DATABASE_URI')

# Define routes here
@app.route('/')
def index():
  return render_template('index.html')

@app.route('/about')
def about():
  return render_template('about.html')

@app.route('/contact')
def contact():
  return render_template('contact.html')

# Initialize Debug Toolbar AFTER routes and SECRET_KEY is set
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
DebugToolbarExtension(app)  # Initialize the debug toolbar

@app.after_request
def add_header(response):
    response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
    response.headers['Pragma'] = 'no-cache'
    response.headers['Expires'] = '0'
    return response

if __name__ == '__main__':
  app.run(debug=True) 