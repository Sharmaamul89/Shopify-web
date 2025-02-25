"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Initialize cartCount

  useEffect(() => {
    // Retrieve cartCount from localStorage on component mount
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount));
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleUserClick = () => {
    setShowLogin(true);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains(styles.popupOverlay)) {
      setShowLogin(false);
    }
  };

  // Example function to increment the cart count (you'll need to adapt this to your actual add-to-cart logic)
  const handleAddToCart = () => {
    const newCartCount = cartCount + 1;
    setCartCount(newCartCount);
    localStorage.setItem("cartCount", newCartCount.toString()); // Store in localStorage
  };

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>kalles</div>
        <ul className={styles.menu}>
          <li><Link href="#">Demo</Link></li>
          <li><Link href="#">Shop <span className={styles.newBadge}>New</span></Link></li>
          <li><Link href="#">Product</Link></li>
          <li><Link href="#">Sale <span className={styles.saleBadge}>Sale</span></Link></li>
          <li><Link href="#">Pages</Link></li>
          <li><Link href="#">Lookbook</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Buy Theme</Link></li>
        </ul>
        <div className={styles.icons}>
          <Search className={`${styles.icon} ${styles.iconHover}`} />
          <div onClick={handleUserClick}>
            <User className={`${styles.icon} ${styles.iconHover}`} />
          </div>
          <div className={styles.heartContainer}> 
            <Heart className={`${styles.icon} ${styles.iconHover}`} />
            <span className={styles.heartBadge}>0</span> 
          </div>
          <div className={styles.cartContainer}>
            <ShoppingCart className={`${styles.icon} ${styles.iconHover}`} />
            <span className={styles.cartBadge}>{cartCount}</span> 
          </div>
          {/* Example button to increment cart count */}
         
        </div>
      </div>

      {showLogin && (
        <div className={styles.popupOverlay} onClick={handleOutsideClick}>
          <div className={styles.popupRight}>
            <div className={styles.popupHeader}>
              <h2>LOGIN</h2>
              <X className={styles.closeIcon} onClick={() => setShowLogin(false)} />
            </div>
            <form className={styles.loginForm}>
              <label>Email *</label>
              <input type="email" required />
              <label>Password *</label>
              <input type="password" required />
              <Link href="#" className={styles.forgotPassword}>Forgot your password?</Link>
              <button type="submit" className={styles.signInButton}>Sign In</button>
              <Link href="#" className={styles.createAccount}>New customer? Create your account</Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
