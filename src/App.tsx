import Login from './container/Login/Login';
import { Routes, Route } from "react-router-dom";
import HomeComponent from './container/Home/index';
function App() {
 
  return (
    <>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<HomeComponent/>}/>
   </Routes>
    </>
  )
}

export default App
