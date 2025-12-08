import './App.css'
import { BrowserRouter } from 'react-router'
import { AppRoutes } from './components/router.jsx'
import Menu from './components/menu.jsx'

function App() {

  return (

    <BrowserRouter>
      <Menu />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
