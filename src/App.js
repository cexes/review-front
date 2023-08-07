import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import LoginPageClient from './pages/LoginClientPage'
import HomePage from './pages/HomePage'
function App() {
  return (
    <div >
      <Router>
         <Routes> 
           <Route path ='/' element={<LoginPageClient/>}></Route>
           <Route path ="home" element ={<HomePage/> }></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default App;
