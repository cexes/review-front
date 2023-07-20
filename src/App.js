import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import LoginPageClient from './pages/LoginClientPage'
function App() {
  return (
    <div >
      <Router>
         <Routes> 
           <Route path ='/' element={<LoginPageClient/>}></Route>

           </Routes>
      </Router>
    </div>
  )
}

export default App;
