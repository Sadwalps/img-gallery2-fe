import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Pagenotfound from './Pagenotfound'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Pagenotfound/>}/>
       
      </Routes>
    </>
  )
}

export default App
