import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../Dashboard/Home'
import Header from '../Components/Header/Header'
import BookDetails from '../Components/Book-Details/BookDetails'
import Cart from '../Components/Cart/Cart'
import MyCart from '../Pages/Cart/MyCart'
import MyWishlist from '../Pages/Wishlist/Wishlist'
export const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path='/' element={<><Header/><Home/></>}/>
        <Route path='/about' element={<><Header/><BookDetails/></>}/>
        <Route path='/cart' element={<><Header/><MyCart/></>}/>
        <Route path='/wishlist' element={<><Header/><MyWishlist/></>}/>
    </Routes>
    </BrowserRouter>
  )
}
