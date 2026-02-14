import {Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar';
import Footer from './components/footer';


function App(){

  return(

    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;