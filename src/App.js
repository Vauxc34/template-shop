import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

import Register from './Components/Register';
import Login from './Components/Login';

import ShopSection from './Components/ShopSection';
import AboutSection from './Components/AboutSection';
import OurProfile from './Components/OurProfile';
import ContactSection from './Components/ContactSection';
import Product from './Components/Product';
import EverythingItems from './Components/EverythingItems';
import Checkout from './Components/Checkout';
import Cart from './Components/Cart';
import Succes from './Components/Succes';

/* site's */

/* Component's */

function App() {

  const [search, setSearch] = useState(null)
  const [isSearch, setIsSearch] = useState(false)

  const SearchComponent = () => {
    return (
      <>
      <div className='search-component'>
      <div className='card'>
      <input type="search" placeholder="A ty czego szukasz?" className='' />
      </div>
      </div>
      </>
    )
  }

  const HandleSearchSomething = () => {
    setIsSearch(true)
    if(isSearch == true) {
      setIsSearch(false)
      setSearch(SearchComponent)
    } else if (isSearch == false) {
      setSearch(null)
    }
    }

  const user = useSelector(state => state.user.currentUser)

  return (
   <>

    <Header HandleSearchSomething={HandleSearchSomething} />
      {search}
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/login' element={user ? <Navigate to='/'/> : <Login/>}/>
        <Route path='/register' element={user ? <Navigate to='/'/> : <Register/>}/>
        <Route path='/watches' element={<ShopSection/>}/>
        <Route path='/twoj-profil/:id' element={<OurProfile/>}/>
        <Route path='/about' element={<AboutSection/>}/>
        <Route path='/contact' element={<ContactSection/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/products/:category' element={<EverythingItems/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/succes' element={<Succes/>}/>
        <Route/>
      </Routes>
    
    <Footer/>

   </>
  );
}

export default App;
