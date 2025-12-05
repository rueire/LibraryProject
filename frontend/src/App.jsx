import './App.css'
import './components/Books.jsx'
import { BrowserRouter } from 'react-router'
import { AppRoutes } from './components/router.jsx'
import Menu from './components/Menu.jsx'

function App() {

  return (

    <BrowserRouter>
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
