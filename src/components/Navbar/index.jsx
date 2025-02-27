"use client"; // 👈 Add this at the top

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, User, Search, Heart, X } from "lucide-react";
import { FaShippingFast } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount));
    }
  }, []);

  const handleUserClick = () => {
    setShowLogin(true);
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains(styles.popupOverlay)) {
      setShowLogin(false);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <Image
          src="/Kalles.webp"
          alt="Women"
          width={95}
          height={29}
          className={styles.logoImg}
        />
        <ul className={styles.menu}>
          <li>
            <Link href="#">Demo</Link>
          </li>
          <li>
            <Link href="#">
              Shop <span className={styles.newBadge}>New</span>
            </Link>
          </li>
          <li>
            <Link href="#">Product</Link>
          </li>
          <li>
            <Link href="#">
              Sale <span className={styles.saleBadge}>Sale</span>
            </Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            <Link href="#">Lookbook</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Buy Theme</Link>
          </li>
        </ul>
        <div className={styles.icons}>
          <div onClick={() => setShowSearch(true)}>
            <Search className={`${styles.icon} ${styles.iconHover}`} />
          </div>
          <div onClick={handleUserClick}>
            <User className={`${styles.icon} ${styles.iconHover}`} />
          </div>
          <div className={styles.heartContainer}>
            <Heart className={`${styles.icon} ${styles.iconHover}`} />
            <span className={styles.heartBadge}>0</span>
          </div>
          <div
            className={styles.cartContainer}
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart className={`${styles.icon} ${styles.iconHover}`} />
            <span className={styles.cartBadge}>{cartCount}</span>
          </div>
        </div>
      </div>

      {showLogin && (
        <div className={styles.popupOverlay} onClick={handleOutsideClick}>
          <div className={styles.popupRight}>
            <div className={styles.popupHeader}>
              <h2>LOGIN</h2>
              <X
                className={styles.closeIcon}
                onClick={() => setShowLogin(false)}
              />
            </div>
            <form className={styles.loginForm}>
              <label>Email *</label>
              <input type="email" required />
              <label>Password *</label>
              <input type="password" required />
              <Link href="#" className={styles.forgotPassword}>
                Forgot your password?
              </Link>
              <button type="submit" className={styles.signInButton}>
                Sign In
              </button>
              <Link href="#" className={styles.createAccount}>
                New customer? Create your account
              </Link>
            </form>
          </div>
        </div>
      )}

      {showSearch && (
        <div className={styles.overlay}>
          <div className={styles.container}>
            <h2>SEARCH OUR SITE</h2>

            <select className={styles.select}>
              <option>All Categories</option>
            </select>
            <div className={styles.searchBox}>
              <input
                type="text"
                placeholder="Search"
                className={styles.searchInput}
              />
              <Search size={18} className={styles.searchIcon} />
            </div>

            <p className={styles.quickSearch}>
              Quick search: <span>Women, Men, New</span>
            </p>
            <h3 className={styles.Heading}>Need some inspiration?</h3>
            <div className={styles.suggestions}>
              <div className={styles.item}>
                <img src="/img1.jpg" alt="Product 1" className={styles.image} />
                <div>
                  <p>Analogue Resin Strap</p>
                  <p>$30.00</p>
                </div>
              </div>
              <div className={styles.item}>
                <img src="/img2.jpg" alt="Product 2" className={styles.image} />
                <div>
                  <p>Ridley High Waist</p>
                  <p>$36.00</p>
                </div>
              </div>
            </div>
            <button className={styles.viewAll}>View All →</button>
          </div>
        </div>
      )}

      <div className={`${styles.cartPopup} ${cartOpen ? styles.open : ""}`}>
        <div className={styles.cartHeader}>
          <h3>SHOPPING CART</h3>
          <X className={styles.closeIcon} onClick={() => setCartOpen(false)} />
        </div>

        <div className={styles.card}>
          <div className={styles.cartContent}>
            <p>
              Free Shipping for all orders over <span>$100.00</span>
            </p>
          </div>
          <div className={styles.progressContainer}>
            <FaShippingFast className={styles.truckIcon} />
            <div className={styles.progressBar}></div>
          </div>
        </div>

        <div className={styles.emptyCartContainer}>
          <FaShoppingCart className={styles.cartIcon} />
          <p className={styles.emptyText}>Your cart is empty.</p>
          <button className={styles.returnButton}>RETURN TO SHOP</button>
        </div>
      </div>

      {/* Overlay (Click to Close) */}
      {cartOpen && (
        <div className={styles.overlay} onClick={() => setCartOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
