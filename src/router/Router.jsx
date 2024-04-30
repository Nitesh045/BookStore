import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() => import("../Dashboard/Home"));
const Header = lazy(() => import("../Components/Header/Header"));
const BookDetails = lazy(() =>
  import("../Components/Book-Details/BookDetails")
);

const MyCart = lazy(() => import("../Pages/Cart/MyCart"));
const MyWishlist = lazy(() => import("../Pages/Wishlist/Wishlist"));
const MyOrder = lazy(() => import("../Pages/MyOrder/MyOrder"));
const  Login  =lazy(()=>import("../Pages/Sign/Login")) ;
const SignCombined =lazy(()=>import("../Pages/Sign/CombinePage")) ;

const Success =lazy(()=>import("../Pages/Successful/Success")) ;
const CartOrderSummary =lazy(()=>import("../Components/Cart/CartOderSummary")) ;
const ProtectedRoute =lazy(()=>import("./ProtectedRoute")) ;
const AuthRoute =lazy(()=>import("./AuthRoute")) ;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <ProtectedRoute>
              <>
                <Header />
                <Home />
              </>
            </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/about/:id"
          element={
            <Suspense>
              <ProtectedRoute>
              <>
                <Header />
                <BookDetails />
              </>
            </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense>
              <ProtectedRoute>
              <>
                <Header />
                <MyCart />
              </>
            </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/wishlist"
          element={
           <Suspense>
             <ProtectedRoute>
              <>
                <Header />
                <MyWishlist />
              </>
            </ProtectedRoute>
           </Suspense>
          }
        />
        <Route
          path="/myorder"
          element={
            <Suspense>
              <ProtectedRoute>
              <>
                <Header />
                <MyOrder />
              </>
            </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <AuthRoute>
              <SignCombined />
            </AuthRoute>
          }
        />
        <Route
          path="/loginSingup"
          element={
            <Suspense>
              <AuthRoute>
              <SignCombined />
            </AuthRoute>
            </Suspense>
          }
        />
        <Route
          path="/singup"
          element={
            <Suspense>
              <AuthRoute>
              <SignCombined />
            </AuthRoute>
            </Suspense>
          }
        />
        <Route
          path="/success"
          element={
            <Suspense>
              <ProtectedRoute>
              <Success />
            </ProtectedRoute>
            </Suspense>
          }
        />
        <Route
          path="/cartordersummary"
          element={
           <Suspense>
             <ProtectedRoute>
              <>
                <Header />
                <CartOrderSummary />
              </>
            </ProtectedRoute>
           </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
