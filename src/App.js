import logo from './logo.svg';
import './App.css';
import { Login } from './Pages/Sign/Login';
import Signup from './Pages/Sign/SingUp';
import BookCard from './Components/Book-Component/BookCard';
import BookDetails from './Components/Book-Details/BookDetails';
import Home from './Dashboard/Home';
import Cart from './Components/Cart/Cart';
import CartCustomerDetails from './Components/Cart/CartCustomerDetails';
import CartOrderSummary from './Components/Cart/CartOderSummary';
import MyWishlist from './Pages/Wishlist/Wishlist';
import Success from './Pages/Successful/Success';
import MyOrder from './Pages/MyOrder/MyOrder';
import MyCart from './Pages/Cart/MyCart';
import Header from './Components/Header/Header';
import { Router } from './router/Router';
import { Provider } from 'react-redux';
import store from './Components/Redux/Store';



function App() {
  return (
    <Provider store={store}>
      <Router  />
    </Provider>
  );
}

export default App;
