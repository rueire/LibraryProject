import './CSS/App.css'
import './CSS/menu.css'
import './CSS/searchbar.css'
import { BrowserRouter } from 'react-router'
import { AppRoutes } from './components/router.jsx'
import Menu from './components/menu.jsx'
import Searchbar from './components/search.jsx'

function App() {

  return (

    <BrowserRouter>
      <Menu />
      <div className='info-area'>
        <Searchbar />
        <div className='page-content'>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
