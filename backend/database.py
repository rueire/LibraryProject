# pip install pymysql
# pip install python-dotenv
# Not yet installed!

import sqlite3
# for .env:
import os 
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
# Get database credentials from environment variables
DB_HOST = os.getenv("DB_HOST")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")

try:
    #connection = sqlite3.connect('library_db')
    connection = pymysql.connect(
        host=DB_HOST,
        user=DB_USER,
        password=DB_PASSWORD,
        database=DB_NAME
    ) 
    print('Connection to library successful')
    
except sqlite3.Error as e:
    print('Error connecting to library database')

