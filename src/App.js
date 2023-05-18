
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import NoPage from './Componets/NoPage';
import Home from './Componets/Home';
import Cart from './Componets/Cart';
import Navigator from './Componets/Navigator';
import Wishlist from './Componets/Wishlsit';
import Order from './Componets/Order';
import ViewProduct from './Componets/ViewProduct';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Navigator/>
      <Routes >
      <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/wishlist' element={<Wishlist />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/details/:id' element={<ViewProduct />} />
          <Route exact path='/ordersucess' element={<Order/>} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
    
</div>
  );
}

export default App;
