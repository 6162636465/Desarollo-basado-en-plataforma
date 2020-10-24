from flask import Flask ,render_template
import time

add=Flask(__name__)

@add.route('/')
def index():
    return render_template('app.html')

if __name__=="__main__":
    add.run(port=3000,debug=True)
