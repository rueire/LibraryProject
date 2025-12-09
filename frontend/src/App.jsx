import './App.css'
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
        <AppRoutes />
      </div>
    </BrowserRouter>
  )
}

export default App
