import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* style's */

import './Components/styles/style.css'
import './Components/styles/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

/* style's */

/* Component's */

import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from './Components/Footer';

/* site's */

import ShopSection from './Components/ShopSection';
import AboutSection from './Components/AboutSection';
import ContactSection from './Components/ContactSection';
import Product from './Components/Product';
import EverythingItems from './Components/EverythingItems';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';

/* site's */

/* Component's */

function App() {
  return (
   <>

    <Header/>
    
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/watches' element={<ShopSection/>}/>
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/contact' element={<ContactSection/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/products' element={<EverythingItems/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route/>
      </Routes>
    
    <Footer/>

   </>
  );
}

export default App;
