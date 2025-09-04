# Install to use
# pip install pymysql
# pip install python-dotenv
# pip install sqlalchemy
# pip fastapi uvicorn

"""
Connection made!
remember to add pword in env before testing!

1) Figure out way to recognize database (mysql, mariadb, sqlite..)
and connect accordingly

2) How to create queries

3) Start Frontend
"""
from fastapi import FastAPI, Query
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

app = FastAPI()

try:
    engine = create_engine(
        f"mysql+mysqldb://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}",
        echo=False #True shows sql queries
        )
    
    @app.get('/books')
    def get_books(
        #testing for search function
        # query = not JSON. str is expeced, None is default
        # Add more! now only for testing purposes 
        language:str | None = Query(None),
        author:str | None = Query(None)
    ):
        query = """
        SELECT b.title, b.ISBN, b.language, a.name AS author_name 
        FROM book b 
        JOIN author a 
        ON b.author_id = a.id WHERE 1=1
        """

        params = {} # for frontend

        if language:
            query += "AND LOWER(b.language) = LOWER(:language)"
            params["language"] = language
        if author:
            # named parameter binding (:author) for sqlalchemy text
            query += "AND LOWER(a.name) = LOWER(:author)"
            params["author"] = author

        with engine.connect() as conn:
            result = conn.execute(text(query), params)
            books = [dict(row._mapping) for row in result]

        return {"books": books}
        

except SQLAlchemyError as e:
    print(f"SQLAlchemy error connecting to MariaDB database: {e}")
except Exception as e:
    print(f'Error connecting to database: {e}')