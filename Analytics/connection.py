
import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.exc import SQLAlchemyError


#import pymysql

# for .env:
import os 
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()
DB_HOST= os.getenv("DB_HOST")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_NAME = os.getenv("DB_NAME")


def get_books_df():
    try:

        engine = create_engine(
            f"mysql+mysqldb://{DB_USER}:{DB_PASSWORD}@{DB_HOST}/{DB_NAME}",
            echo=False #True shows sql queries
            )
        

        query = """
        SELECT b.language, b.release_year, s.name as series_name
        FROM book b
        LEFT JOIN series s
        ON b.series_id = s.id
        WHERE 1=1;
        """

        df = pd.read_sql(query, engine)
        return df

    except SQLAlchemyError as e:
        print(f"SQLAlchemy error connecting to MariaDB database: {e}")
    except Exception as e:
        print(f'Error connecting to database: {e}')

get_books_df()