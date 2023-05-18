// import { Link } from 'react-router-dom';
// import React from 'react'


// import '../Styles/Navigator.css'
// import { useSelector } from 'react-redux';



// const Navigator = () => {

// const cartproduct=useSelector(state=>state.cart.cartproducts)
// const wishlistproduct=useSelector(state=>state.save.wishlist);
//   return (
//     <nav className="navbar">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link to="/home" className="nav-link">
//             Home
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/wishlist" className="nav-link">
//            Wishlist
//            <a href="/wishlist" className="cart position-relative d-inline-flex" aria-label="View your shopping cart">
//           <span className="cart-basket d-flex align-items-center justify-content-center">
//             {wishlistproduct.length}
//           </span>
//         </a>
//           </Link>
//         </li>
//         <li className="nav-item">
//           <Link to="/cart" className="nav-link">
//             Cart
//                 <a href='/cart' className="cart position-relative d-inline-flex" aria-label="View your shopping cart">
//           <span className="cart-basket d-flex align-items-center justify-content-center">
//             {cartproduct.length}
//           </span>
//         </a>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };


// export default Navigator;
import { Link } from 'react-router-dom';
import React from 'react';
import '../Styles/Navigator.css';
import { useSelector } from 'react-redux';

const Navigator = () => {
  const cartproduct = useSelector((state) => state.cart.cartproducts);
  const wishlistproduct = useSelector((state) => state.save.wishlist);

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/wishlist" className="nav-link">
            Wishlist
            {wishlistproduct.length > 0 && (
              <span className="badge">{wishlistproduct.length}</span>
            )}
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            Cart
            {cartproduct.length > 0 && (
              <span className="badge">{cartproduct.length}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigator;
