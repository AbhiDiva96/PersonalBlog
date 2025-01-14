
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import home from './pages/home'
import { ArticlePage } from './components/singlePage'
function App() {

  return (
    <>
       {/* routing pages */}
       <Router>
          <Routes>
             <Route path = '/' element = {home()} />
             <Route path = '/article/:id' element = {ArticlePage()}/>
          </Routes>
       </Router>
    </>
  )
}

export default App
