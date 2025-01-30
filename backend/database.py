# pip install pymysql
# Not yet installed! will help with connection to mariabd

import sqlite3

try:
    connection = sqlite3.connect('library_db')
    print('Connection to library successful')
except sqlite3.Error as e:
    print('Error connecting to library database')

