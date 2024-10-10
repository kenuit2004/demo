import React from 'react'
import Navbar from './Navigation/Navbar'
import Todolist from './Components/Todolist'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Work from './Components/Work'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Router>
        <div>
      <Navbar/>
      <Todolist />
     </div>
     <div style={({ padding: '60px' })}>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Work" element={<Work/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        </div>
        </Router>
    </div>
  )
}
export default App;
