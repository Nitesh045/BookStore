import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Dashboard/Home";
import Header from "../Components/Header/Header";
import BookDetails from "../Components/Book-Details/BookDetails";
import Cart from "../Components/Cart/Cart";
import MyCart from "../Pages/Cart/MyCart";
import MyWishlist from "../Pages/Wishlist/Wishlist";
import MyOrder from "../Pages/MyOrder/MyOrder";
import { Login } from "../Pages/Sign/Login";
import SignCombined from "../Pages/Sign/CombinePage";
import Signup from "../Pages/Sign/SingUp";
import Success from "../Pages/Successful/Success";
import CartOrderSummary from "../Components/Cart/CartOderSummary";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <BookDetails />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Header />
              <MyCart />
            </>
          }
        />
        <Route
          path="/wishlist"
          element={
            <>
              <Header />
              <MyWishlist />
            </>
          }
        />
        <Route
          path="/myorder"
          element={
            <>
              <Header />
              <MyOrder />
            </>
          }
        />
        <Route path="/login" element={<SignCombined />} />
        <Route path="/loginSingup" element={<SignCombined />} />
        <Route path="/singup" element={<SignCombined />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cartordersummary" element={<><Header/><CartOrderSummary/></>}/>
      </Routes>
    </BrowserRouter>
  );
};
