import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Projects from './Projects/Projects'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
