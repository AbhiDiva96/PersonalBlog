
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import home from './pages/home'
function App() {

  return (
    <>
       {/* routing pages */}
       <Router>
          <Routes>
             <Route path = '/' element = {home()} />

          </Routes>
       </Router>
    </>
  )
}

export default App
