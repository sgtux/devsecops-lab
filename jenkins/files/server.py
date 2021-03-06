#!/usr/bin/python3
from flask import Flask, render_template_string

app = Flask(__name__)

@app.route('/')
def index():
  return render_template_string("<html><body><h1>Jenkins Server!</h1></body></html>")

if __name__ == "__main__":
  app.run(debug=False, host="0.0.0.0", port=80)