import React from 'react'
import j1 from "../images/jewellery-1.jpg"
import logo from "../images/logo.svg"
import e1 from "../images/electronics-banner-1.jpg"
import m1 from "../images/mens-banner.jpg"
import w1 from "../images/womens-banner.jpg"
import instagram from "../images/logo-instagram.svg"
import { Link } from 'react-router-dom'
import { useCart } from './cartContext';




const Navbar = () => {
    const { cartCount } = useCart();
    return (

        <>
            <div class="overlay" data-overlay></div>

            {/* MODAL  */}
            {/* <div class="modal" data-modal>

                <div class="modal-close-overlay" data-modal-overlay></div>

                <div class="modal-content">

                    <button class="modal-close-btn" data-modal-close>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div class="newsletter-img">
                        <img src="images\newsletter (1).png" alt="subscribe newsletter" width="400" height="400" />
                    </div>

                    <div class="newsletter">

                        <form action="#">

                            <div class="newsletter-header">

                                <h3 class="newsletter-title">Subscribe Newsletter.</h3>

                                <p class="newsletter-desc">
                                    Subscribe the <b>Anon</b> to get latest products and discount update.
                                </p>

                            </div>

                            <input type="email" name="email" class="email-field" placeholder="Email Address" required />

                            <button type="submit" class="btn-newsletter">Subscribe</button>

                        </form>

                    </div>

                </div>

            </div> */}





            {/* NOTIFICATION TOAST  */}
            <div class="notification-toast" data-toast>

                <button class="toast-close-btn" data-toast-close>
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <div class="toast-banner">
                    <img src={j1} alt="Rose Gold Earrings" width="80" height="70" />
                </div>

                <div class="toast-detail">

                    <p class="toast-message">
                        Someone in new just bought
                    </p>

                    <p class="toast-title">
                        Rose Gold Earrings
                    </p>

                    <p class="toast-meta">
                        <time datetime="PT2M">2 Minutes</time> ago
                    </p>

                </div>

            </div>

            <header>

                <div class="header-top">

                    <div class="container">

                        <ul class="header-social-container">

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-twitter"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-instagram"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                        <div class="header-alert-news">
                            <p>
                                <b>Free Shipping</b>
                                This Week Order Over - $55
                            </p>
                        </div>

                        <div class="header-top-actions">

                            {/* <Link to="/login"><b style={{ cursor: "pointer" }}>Login / Signup</b></Link> */}

                            <select name="language">

                                <option value="en-US">English</option>
                                <option value="es-ES">Espa&ntilde;ol</option>
                                <option value="fr">Fran&ccedil;ais</option>

                            </select>

                        </div>

                    </div>

                </div>

                <div class="header-main">

                    <div class="container">

                        {/* <a href="/" class="header-logo"> */}
                        <Link to="/admin"><img src={logo} alt="Anon's logo" width="120" height="36" /></Link>
                        {/* </a> */}

                        <div class="header-search-container">

                            <input type="search" name="search" class="search-field" placeholder="Enter your product name..." />

                            <button class="search-btn">
                                <ion-icon name="search-outline"></ion-icon>
                            </button>

                        </div>

                        <div class="header-user-actions">

                            <button class="action-btn">
                                <ion-icon name="person-outline"></ion-icon>
                            </button>

                            <button class="action-btn">
                                <Link to='/'><ion-icon name="exit-outline"></ion-icon></Link>
                            </button>

                            <button class="action-btn">
                                <Link to='/cart'><ion-icon name="cart-outline"></ion-icon></Link>
                                <span class="count">{cartCount}</span>
                            </button>

                        </div>

                    </div>

                </div>

                <nav class="desktop-navigation-menu">

                    <div class="container">

                        <ul class="desktop-menu-category-list">

                            <li class="menu-category">
                                <Link to='/home' class="menu-title">Home</Link>
                            </li>

                            <li class="menu-category">
                                <Link to='/kids' class="menu-title">Kids</Link>


                            </li>

                            <li class="menu-category">
                                <Link to='/mens' className="menu-title">Men's</Link>

                            </li>

                            <li class="menu-category">
                                <Link to='/womens' class="menu-title">WOMENS</Link>
                            </li>

                            <li class="menu-category">
                                <Link to='/electronics' class="menu-title">Electronics</Link>

                            </li>

                            <li class="menu-category">
                                <Link to='/perfume' class="menu-title">Perfume</Link>

                            </li>


                        </ul>

                    </div>

                </nav>

                <div class="mobile-bottom-navigation">

                    <button class="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="cart-outline"></ion-icon>

                        <span class="count">0</span>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="home-outline"></ion-icon>
                    </button>

                    <button class="action-btn">
                        <ion-icon name="heart-outline"></ion-icon>

                        <span class="count">0</span>
                    </button>

                    <button class="action-btn" data-mobile-menu-open-btn>
                        <ion-icon name="grid-outline"></ion-icon>
                    </button>

                </div>

                <nav class="mobile-navigation-menu  has-scrollbar" data-mobile-menu>

                    <div class="menu-top">
                        <h2 class="menu-title">Menu</h2>

                        <button class="menu-close-btn" data-mobile-menu-close-btn>
                            <ion-icon name="close-outline"></ion-icon>
                        </button>
                    </div>

                    <ul class="mobile-menu-category-list">

                        <li class="menu-category">
                            <a href="/" class="menu-title">Home</a>
                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Men's</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Shirt</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Shorts & Jeans</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Safety Shoes</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Wallet</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Women's</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Dress & Frock</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Earrings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Necklace</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Makeup Kit</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Jewelry</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Earrings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Couple Rings</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Necklace</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Bracelets</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">

                            <button class="accordion-menu" data-accordion-btn>
                                <p class="menu-title">Perfume</p>

                                <div>
                                    <ion-icon name="add-outline" class="add-icon"></ion-icon>
                                    <ion-icon name="remove-outline" class="remove-icon"></ion-icon>
                                </div>
                            </button>

                            <ul class="submenu-category-list" data-accordion>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Clothes Perfume</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Deodorant</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Flower Fragrance</a>
                                </li>

                                <li class="submenu-category">
                                    <a href="/" class="submenu-title">Air Freshener</a>
                                </li>

                            </ul>

                        </li>

                        <li class="menu-category">
                            <a href="/" class="menu-title">Blog</a>
                        </li>

                        <li class="menu-category">
                            <a href="/" class="menu-title">Hot Offers</a>
                        </li>

                    </ul>

                    <div class="menu-bottom">

                        <ul class="menu-category-list">

                            <li class="menu-category">

                                <button class="accordion-menu" data-accordion-btn>
                                    <p class="menu-title">Language</p>

                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class="submenu-category-list" data-accordion>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">English</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">Espa&ntilde;ol</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">Fren&ccedil;h</a>
                                    </li>

                                </ul>

                            </li>

                            <li class="menu-category">
                                <button class="accordion-menu" data-accordion-btn>
                                    <p class="menu-title">Currency</p>
                                    <ion-icon name="caret-back-outline" class="caret-back"></ion-icon>
                                </button>

                                <ul class="submenu-category-list" data-accordion>
                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">USD &dollar;</a>
                                    </li>

                                    <li class="submenu-category">
                                        <a href="/" class="submenu-title">EUR &euro;</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>

                        <ul class="menu-social-container">

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-twitter" />
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <img src={instagram} alt="" />
                                </a>
                            </li>

                            <li>
                                <a href="/" class="social-link">
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </a>
                            </li>

                        </ul>

                    </div>

                </nav>

            </header>




        </>
    )
}

export default Navbar