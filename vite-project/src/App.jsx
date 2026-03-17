import {Route, Routes} from 'react-router-dom'
import Home from './components/home'
import Navbar from './components/navbar';
import Footer from './components/footer';
import ProductInfo from './components/product_info';


function App(){

  return(

    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product_info' element={<ProductInfo/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;