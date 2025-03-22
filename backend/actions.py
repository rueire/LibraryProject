#import database

#Python's Flask to be used?
"""
from flask import Flask

app = Flask(__name__)

@app.route('/')
function here

"""


def add_book():
    query = "CREATE TABLE IF NOT EXISTS book(id INTEGER PRIMARY KEY, "
    "title VARCHART NOT NULL, isbn VARCHART NOT NULL, genre VARCHART, rating VARCHART"


def add_author():
    query = "CREATE TABLE IF NOT EXISTS author(id INTEGER PRIMARY KEY, "
    "writer VARCHART NOT NULL"


def add_comic():
    query = "CREATE TABLE IF NOT EXISTS book(id INTEGER PRIMARY KEY, "
    "title VARCHART NOT NULL, isbn VARCHART NOT NULL, genre VARCHART, rating VARCHART"