# Install to use
# pip install pymysql
# pip install python-dotenv
# pip install sqlalchemy

"""
Connection made!
remember to add pword in env before testing!

1) Figure out way to recognize database (mysql, mariadb, sqlite..)
and connect accordingly

2) How to create queries

3) Start Frontend
"""

from sqlalchemy import create_engine, text
from sqlalchemy.exc import SQLAlchemyError
#import pymysql

# for .env:
import os 
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
# Get database credentials
DB_HOST = os.getenv("DB_HOST")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")

try:
    engine = create_engine(
        f"mysql+mysqldb://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}",
        echo=False #True shows sql queries
        )
    with engine.connect() as conn:
        result = conn.execute(text('SELECT 1'))
        print('Connection to MariaDB successful')
        print(f'Test query result: {result.fetchone()}')
        # fetchone gets only 1 row, fetchall gets everything

except SQLAlchemyError as e:
    print(f"SQLAlchemy error connecting to MariaDB database: {e}")
except Exception as e:
    print(f'Error connecting to database: {e}')