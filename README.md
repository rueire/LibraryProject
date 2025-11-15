# :books: LibraryProject
<strong>Not yet downloadable.</strong>

Plan to: </br>
🔖: Create Library database</br>
🔖: Backend that uses said database</br>
🔖 Frontend to create (local for now) app </br>

Work in progress -main thing is to add more books and authors and test queries work. <br>
## Tech used:<br>
FastAPI<br>
SQLAlchemy<br>
Pydantic<br>
MySQL (mysqlclient)<br>
Uvicorn<br>
python-dotenv<br>

Backend requirements can be found at backend/requirements.txt <br>
in backend/conn.py download requirements with: pip install -r requirements.txt <br>

database updated: <br>
<img width="1008" height="442" alt="image" src="https://github.com/user-attachments/assets/f5721d1e-d560-485c-bf27-853ec80d84bd" />

Backend started, connection to database made<br>
Filtering with language and author tested:<br>
http://localhost:8000/books?language_code=en <br>
<img width="357" height="442" alt="image" src="https://github.com/user-attachments/assets/1ab957b2-b904-41d4-bb03-0ef7104825de" />

Frontend started, now fetches some books<br>
<img width="1883" height="856" alt="image" src="https://github.com/user-attachments/assets/88ea2097-778a-478b-92b8-86c3bec225ac" />





