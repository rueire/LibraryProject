import './CSS/App.css'
import './CSS/menu.css'
import './CSS/searchbar.css'
import { BrowserRouter } from 'react-router'
import { AppRoutes } from './components/AppRoutes.jsx'
import Menu from './components/Menu.jsx'
import Searchbar from './components/Searchbar.jsx'

function App() {

  return (

    <BrowserRouter>
      <div className='info-area'>
      <Menu />
      <div className='search-area'>
        <Searchbar />
      </div>
          <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
