import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Navbar from './components/Navbar';
import { cartContext } from './cartContext'
import { useEffect, useState } from 'react';

function App() {

  //get the data from local storage
  const cartLocalstorage = JSON.parse(window.localStorage.getItem("cart")) || {};

  //declare the state for context object
  const [cart, setCart] = useState(cartLocalstorage)

  //set the data in local storage
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className="App">
      <BrowserRouter>
        <cartContext.Provider value={{ cart, setCart }}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </cartContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
