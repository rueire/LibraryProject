import './App.css'
import './components/books.jsx'
import FetchBooks from './components/books.jsx'

function App() {

  return (
    <>
      <div className='menu'>
        <div className='user'>
          <div id='user_image'>image here</div>
          <div id='user_name'>user's name</div>
        </div>
        <div id='menu_buttons'>
          <button>your books</button>
          <button>your faves</button>
          <button>Settings</button>
        </div>
      </div>
      <div className='all_books_wrap'><FetchBooks/></div>
    </>
  )
}

export default App
