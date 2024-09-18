import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import Hero from './hero'
// import Categories from './categories'
import dress from "../images/dress.svg"
import shoes from "../images/shoes.svg"
import jewel from "../images/jewelry.svg"
import persvg from "../images/perfume.svg"
import cosmetics from "../images/cosmetics.svg"
import glass from "../images/glasses.svg"
import bag from "../images/bag.svg"
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import t1 from "../images/testimonial-1.jpg"
import quotes from "../images/quotes.svg"
import ctabanner from "../images/cta-banner.jpg"
import blog1 from "../images/blog-1.jpg"
import blog2 from "../images/blog-2.jpg"
import blog3 from "../images/blog-3.jpg"
import blog4 from "../images/blog-4.jpg"
import shampoo from "../images/shampoo.jpg"
import jw1 from "../images/jewellery-1.jpg"
import jw2 from "../images/jewellery-2.jpg"
import jw3 from "../images/jewellery-3.jpg"
import w1 from "../images/watch-1.jpg"
import perfume from "../images/perfume.jpg"
import belt from "../images/belt.jpg"
import w3 from "../images/watch-3.jpg"
import logo from "../images/logo.svg"
import e1 from "../images/electronics-banner-1.jpg"
import m1 from "../images/mens-banner.jpg"
import instagram from "../images/logo-instagram.svg"
import { Link } from 'react-router-dom'
import Footer from './footer'
// import Hero from './hero'
import { useLocation } from 'react-router-dom'


const Prod1 = () => {

    const [data, setData] = useState([]);
    const [women, setwomen] = useState([]);
    const [count, setCount] = useState(0);

    const location = useLocation();
    const name = location.state?.name;

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getmen");
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getwomen();
    }, []);

    const getwomen = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getwomen");
            setwomen(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const counter = async (e, name, img, Category, price) => {
        // e.preventDefault();
        setCount(count + 1);

        alert("submitted");

        try {
            await axios.post("http://localhost:8000/postcart", {
                name: name,
                img: img,
                Category: Category,
                price: price
            });
            console.log("Data submitted successfully");
        } catch (error) {
            console.log(error);
        }
    };




    return (
        <>
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
                            <b style={{ cursor: "pointer" }}>{name}</b>

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
                                <span class="count">{count}</span>
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

            {/* <Hero /> */}



            <main>




                {/* Product  */}
                <div className="product-container">

                    <div className="container">


                        {/* sidebar  */}

                        <div className="sidebar  has-scrollbar" data-mobile-menu>

                            <div className="sidebar-category">

                                <div className="sidebar-top">
                                    <h2 className="sidebar-title">Category</h2>

                                    <button className="sidebar-close-btn" data-mobile-menu-close-btn>
                                        <ion-icon name="close-outline"></ion-icon>
                                    </button>
                                </div>

                                <ul className="sidebar-menu-category-list">

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                            <div className="menu-title-flex">
                                                <img src={dress} alt="clothes" width="20" height="20" className="menu-title-img" />

                                                <p className="menu-title">Clothes</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Shirt</p>
                                                    <data value="300" className="stock" title="Available Stock">300</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">shorts & jeans</p>
                                                    <data value="60" className="stock" title="Available Stock">60</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">jacket</p>
                                                    <data value="50" className="stock" title="Available Stock">50</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">dress & frock</p>
                                                    <data value="87" className="stock" title="Available Stock">87</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                            <div className="menu-title-flex">
                                                <img src={shoes} alt="footwear" className="menu-title-img" width="20" height="20" />

                                                <p className="menu-title">Footwear</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Sports</p>
                                                    <data value="45" className="stock" title="Available Stock">45</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Formal</p>
                                                    <data value="75" className="stock" title="Available Stock">75</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Casual</p>
                                                    <data value="35" className="stock" title="Available Stock">35</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Safety Shoes</p>
                                                    <data value="26" className="stock" title="Available Stock">26</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                            <div className="menu-title-flex">
                                                <img src={jewel} alt="clothes" className="menu-title-img" width="20" height="20" />

                                                <p className="menu-title">Jewelry</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Earrings</p>
                                                    <data value="46" className="stock" title="Available Stock">46</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Couple Rings</p>
                                                    <data value="73" className="stock" title="Available Stock">73</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Necklace</p>
                                                    <data value="61" className="stock" title="Available Stock">61</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                            <div className="menu-title-flex">
                                                <img src={persvg} alt="perfume" className="menu-title-img" width="20" height="20" />

                                                <p className="menu-title">Perfume</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Clothes Perfume</p>
                                                    <data value="12" className="stock" title="Available Stock">12 pcs</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Deodorant</p>
                                                    <data value="60" className="stock" title="Available Stock">60 pcs</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">jacket</p>
                                                    <data value="50" className="stock" title="Available Stock">50 pcs</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">dress & frock</p>
                                                    <data value="87" className="stock" title="Available Stock">87 pcs</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                            <div className="menu-title-flex">
                                                <img src={cosmetics} alt="cosmetics" className="menu-title-img" width="20" height="20" />

                                                <p className="menu-title">Cosmetics</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Shampoo</p>
                                                    <data value="68" className="stock" title="Available Stock">68</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Sunscreen</p>
                                                    <data value="46" className="stock" title="Available Stock">46</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Body Wash</p>
                                                    <data value="79" className="stock" title="Available Stock">79</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Makeup Kit</p>
                                                    <data value="23" className="stock" title="Available Stock">23</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                            <div className="menu-title-flex">
                                                <img src={glass} alt="glasses" className="menu-title-img" width="20" height="20" />

                                                <p className="menu-title">Glasses</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Sunglasses</p>
                                                    <data value="50" className="stock" title="Available Stock">50</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Lenses</p>
                                                    <data value="48" className="stock" title="Available Stock">48</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                    <li className="sidebar-menu-category">

                                        <button className="sidebar-accordion-menu" data-accordion-btn>

                                            <div className="menu-title-flex">
                                                <img src={bag} alt="bags" className="menu-title-img" width="20" height="20" />

                                                <p className="menu-title">Bags</p>
                                            </div>

                                            <div>
                                                <ion-icon name="add-outline" className="add-icon"></ion-icon>
                                                <ion-icon name="remove-outline" className="remove-icon"></ion-icon>
                                            </div>

                                        </button>

                                        <ul className="sidebar-submenu-category-list" data-accordion>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Shopping Bag</p>
                                                    <data value="62" className="stock" title="Available Stock">62</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Gym Backpack</p>
                                                    <data value="35" className="stock" title="Available Stock">35</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Purse</p>
                                                    <data value="80" className="stock" title="Available Stock">80</data>
                                                </a>
                                            </li>

                                            <li className="sidebar-submenu-category">
                                                <a href="/" className="sidebar-submenu-title">
                                                    <p className="product-name">Wallet</p>
                                                    <data value="75" className="stock" title="Available Stock">75</data>
                                                </a>
                                            </li>

                                        </ul>

                                    </li>

                                </ul>

                            </div>

                            <div className="product-showcase">

                                <h3 className="showcase-heading">best sellers</h3>

                                <div className="showcase-wrapper">

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <a href="/" className="showcase-img-box">
                                                <img src={img1} alt="baby fabric shoes" width="75" height="75" className="showcase-img" />
                                            </a>

                                            <div className="showcase-content">

                                                <a href="/">
                                                    <h4 className="showcase-title">baby fabric shoes</h4>
                                                </a>

                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                </div>

                                                <div className="price-box">
                                                    <del>$5.00</del>
                                                    <p className="price">$4.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <a href="/" className="showcase-img-box">
                                                <img src={img2} alt="men's hoodies t-shirt" className="showcase-img" width="75" height="75" />
                                            </a>

                                            <div className="showcase-content">

                                                <a href="/">
                                                    <h4 className="showcase-title">men's hoodies t-shirt</h4>
                                                </a>
                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-half-outline"></ion-icon>
                                                </div>

                                                <div className="price-box">
                                                    <del>$17.00</del>
                                                    <p className="price">$7.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <a href="/" className="showcase-img-box">
                                                <img src={img3} alt="girls t-shirt" className="showcase-img" width="75" height="75" />
                                            </a>

                                            <div className="showcase-content">

                                                <a href="/">
                                                    <h4 className="showcase-title">girls t-shirt</h4>
                                                </a>
                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-half-outline"></ion-icon>
                                                </div>

                                                <div className="price-box">
                                                    <del>$5.00</del>
                                                    <p className="price">$3.00</p>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase">

                                            <a href="/" className="showcase-img-box">
                                                <img src={img4} alt="woolen hat for men" className="showcase-img" width="75"
                                                    height="75" />
                                            </a>

                                            <div className="showcase-content">

                                                <a href="/">
                                                    <h4 className="showcase-title">woolen hat for men</h4>
                                                </a>
                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                </div>

                                                <div className="price-box">
                                                    <del>$15.00</del>
                                                    <p className="price">$12.00</p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>



                        {/* Product Minimal  */}
                        <div classNameName="product-box">

                            <div className="product-minimal">

                                <div className="product-showcase">

                                    <h2 className="title">Mens</h2>







                                    {
                                        data.map((men) => {
                                            return (
                                                <>
                                                    <div className="showcase-wrapper has-scrollbar">

                                                        <div className="showcase-container">
                                                            <div className="showcase">
                                                                <a href="/" className="showcase-img-box">
                                                                    <img src={men.img} alt="relaxed short full sleeve t-shirt" width="70"
                                                                        className="showcase-img" />
                                                                </a>
                                                                <div className="showcase-content">

                                                                    <a href="/">
                                                                        <h4 className="showcase-title">{men.name}</h4>
                                                                    </a>

                                                                    <a href="/" className="showcase-category">{men.Category}</a>

                                                                    <div className="price-box">
                                                                        <p className="price">{men.price}$</p>
                                                                        <del>$12.00</del>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </>
                                            )
                                        })
                                    }

                                </div>

                                <div className="product-showcase">

                                    <h2 className="title">Womens</h2>

                                    <div className="showcase-wrapper  has-scrollbar">

                                        <div className="showcase-container">

                                            {
                                                women.map((wmen) => {
                                                    return (
                                                        <>
                                                            <div className="showcase-wrapper has-scrollbar">

                                                                <div className="showcase-container">
                                                                    <div className="showcase">
                                                                        <a href="/" className="showcase-img-box">
                                                                            <img src={wmen.img} alt="relaxed short full sleeve t-shirt" width="70"
                                                                                className="showcase-img" />
                                                                        </a>
                                                                        <div className="showcase-content">

                                                                            <a href="/">
                                                                                <h4 className="showcase-title">{wmen.name}</h4>
                                                                            </a>

                                                                            <a href="/" className="showcase-category">{wmen.Category}</a>

                                                                            <div className="price-box">
                                                                                <p className="price">{wmen.price}$</p>
                                                                                <del>$12.00</del>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </>
                                                    )
                                                })
                                            }

                                        </div>

                                    </div>

                                </div>

                                <div className="product-showcase">

                                    <h2 className="title">Top Rated</h2>

                                    <div className="showcase-wrapper  has-scrollbar">

                                        <div className="showcase-container">

                                            <div className="showcase">

                                                <a href="/" className="showcase-img-box">
                                                    <img src={w3} alt="pocket watch leather pouch" className="showcase-img" width="70" />
                                                </a>

                                                <div className="showcase-content">

                                                    <a href="/">
                                                        <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                                                    </a>

                                                    <a href="/" className="showcase-category">Watches</a>

                                                    <div className="price-box">
                                                        <p className="price">$50.00</p>
                                                        <del>$34.00</del>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="showcase">

                                                <a href="/" className="showcase-img-box">
                                                    <img src={jw3} alt="silver deer heart necklace" className="showcase-img"
                                                        width="70" />
                                                </a>

                                                <div className="showcase-content">

                                                    <a href="/">
                                                        <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                                                    </a>

                                                    <a href="/" className="showcase-category">Jewellery</a>

                                                    <div className="price-box">
                                                        <p className="price">$84.00</p>
                                                        <del>$30.00</del>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="showcase">

                                                <a href="/" className="showcase-img-box">
                                                    <img src={perfume} alt="titan 100 ml womens perfume" className="showcase-img" width="70" />
                                                </a>

                                                <div className="showcase-content">

                                                    <a href="/">
                                                        <h4 className="showcase-title">Titan 100 Ml Womens Perfume</h4>
                                                    </a>

                                                    <a href="/" className="showcase-category">Perfume</a>

                                                    <div className="price-box">
                                                        <p className="price">$42.00</p>
                                                        <del>$10.00</del>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="showcase">

                                                <a href="/" className="showcase-img-box">
                                                    <img src={belt} alt="men's leather reversible belt" className="showcase-img" width="70" />
                                                </a>

                                                <div className="showcase-content">

                                                    <a href="/">
                                                        <h4 className="showcase-title">Men's Leather Reversible Belt</h4>
                                                    </a>

                                                    <a href="/" className="showcase-category">Belt</a>

                                                    <div className="price-box">
                                                        <p className="price">$24.00</p>
                                                        <del>$10.00</del>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                        <div className="showcase-container">

                                            <div className="showcase">

                                                <a href="/" className="showcase-img-box">
                                                    <img src={jw2} alt="platinum zircon classNameic ring" className="showcase-img"
                                                        width="70" />
                                                </a>

                                                <div className="showcase-content">

                                                    <a href="/">
                                                        <h4 className="showcase-title">platinum Zircon classNameic Ring</h4>
                                                    </a>

                                                    <a href="/" className="showcase-category">jewellery</a>

                                                    <div className="price-box">
                                                        <p className="price">$62.00</p>
                                                        <del>$65.00</del>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="showcase">

                                                <a href="/" className="showcase-img-box">
                                                    <img src={w1} alt="smart watche vital plus" className="showcase-img" width="70" />
                                                </a>

                                                <div className="showcase-content">

                                                    <a href="/">
                                                        <h4 className="showcase-title">Smart watche Vital Plus</h4>
                                                    </a>

                                                    <a href="/" className="showcase-category">Watches</a>

                                                    <div className="price-box">
                                                        <p className="price">$56.00</p>
                                                        <del>$78.00</del>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="showcase">

                                                <a href="/" className="showcase-img-box">
                                                    <img src={shampoo} alt="shampoo conditioner packs" className="showcase-img" width="70" />
                                                </a>

                                                <div className="showcase-content">

                                                    <a href="/">
                                                        <h4 className="showcase-title">shampoo conditioner packs</h4>
                                                    </a>

                                                    <a href="/" className="showcase-category">cosmetics</a>

                                                    <div className="price-box">
                                                        <p className="price">$20.00</p>
                                                        <del>$30.00</del>
                                                    </div>

                                                </div>

                                            </div>

                                            <div className="showcase">

                                                <a href="/" className="showcase-img-box">
                                                    <img src={jw1} alt="rose gold peacock earrings" className="showcase-img"
                                                        width="70" />
                                                </a>

                                                <div className="showcase-content">

                                                    <a href="/">
                                                        <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                                                    </a>

                                                    <a href="/" className="showcase-category">jewellery</a>

                                                    <div className="price-box">
                                                        <p className="price">$20.00</p>
                                                        <del>$30.00</del>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>







                            {/* - ----------------------------------------------------------PRODUCT FEATURED */}


                            <div className="product-featured">

                                <h2 className="title">Deal of the day</h2>

                                <div className="showcase-wrapper has-scrollbar">

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <div className="showcase-banner">
                                                <img src={shampoo} alt="shampoo, conditioner & facewash packs" className="showcase-img" />
                                            </div>

                                            <div className="showcase-content">

                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                </div>

                                                <a href="/">
                                                    <h3 className="showcase-title">shampoo, conditioner & facewash packs</h3>
                                                </a>

                                                <p className="showcase-desc">
                                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                    dolor dolor sit amet consectetur Lorem ipsum dolor
                                                </p>

                                                <div className="price-box">
                                                    <p className="price">$150.00</p>

                                                    <del>$200.00</del>
                                                </div>

                                                <button className="add-cart-btn">add to cart</button>

                                                <div className="showcase-status">
                                                    <div className="wrapper">
                                                        <p>
                                                            already sold: <b>20</b>
                                                        </p>

                                                        <p>
                                                            available: <b>40</b>
                                                        </p>
                                                    </div>

                                                    <div className="showcase-status-bar"></div>
                                                </div>

                                                <div className="countdown-box">

                                                    <p className="countdown-desc">
                                                        Hurry Up! Offer ends in:
                                                    </p>

                                                    <div className="countdown">

                                                        <div className="countdown-content">

                                                            <p className="display-number">360</p>

                                                            <p className="display-text">Days</p>

                                                        </div>

                                                        <div className="countdown-content">
                                                            <p className="display-number">24</p>
                                                            <p className="display-text">Hours</p>
                                                        </div>

                                                        <div className="countdown-content">
                                                            <p className="display-number">59</p>
                                                            <p className="display-text">Min</p>
                                                        </div>

                                                        <div className="countdown-content">
                                                            <p className="display-number">00</p>
                                                            <p className="display-text">Sec</p>
                                                        </div>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="showcase-container">

                                        <div className="showcase">

                                            <div className="showcase-banner">
                                                <img src={jw1} alt="Rose Gold diamonds Earring" className="showcase-img" />
                                            </div>

                                            <div className="showcase-content">

                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                </div>

                                                <h3 className="showcase-title">
                                                    <a href="/" className="showcase-title">Rose Gold diamonds Earring</a>
                                                </h3>

                                                <p className="showcase-desc">
                                                    Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                                    dolor dolor sit amet consectetur Lorem ipsum dolor
                                                </p>

                                                <div className="price-box">
                                                    <p className="price">$1990.00</p>
                                                    <del>$2000.00</del>
                                                </div>

                                                <button className="add-cart-btn">add to cart</button>

                                                <div className="showcase-status">
                                                    <div className="wrapper">
                                                        <p> already sold: <b>15</b> </p>

                                                        <p> available: <b>40</b> </p>
                                                    </div>

                                                    <div className="showcase-status-bar"></div>
                                                </div>

                                                <div className="countdown-box">

                                                    <p className="countdown-desc">Hurry Up! Offer ends in:</p>

                                                    <div className="countdown">
                                                        <div className="countdown-content">
                                                            <p className="display-number">360</p>
                                                            <p className="display-text">Days</p>
                                                        </div>

                                                        <div className="countdown-content">
                                                            <p className="display-number">24</p>
                                                            <p className="display-text">Hours</p>
                                                        </div>

                                                        <div className="countdown-content">
                                                            <p className="display-number">59</p>
                                                            <p className="display-text">Min</p>
                                                        </div>

                                                        <div className="countdown-content">
                                                            <p className="display-number">00</p>
                                                            <p className="display-text">Sec</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>






                            {/* - PRODUCT GRID */}


                            <div className="product-main">

                                <h2 className="title">New Products</h2>

                                <div className="product-grid">
                                    {data.map((a, index) => (
                                        <div className="showcase" key={index}>
                                            <div className="showcase-banner">
                                                <img src={a.img} alt={a.img} width="300" className="product-img default" />
                                                <p className="showcase-badge">15%</p>
                                                <div className="showcase-actions">
                                                    <button className="btn-action">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>
                                                    <button className="btn-action">
                                                        <ion-icon name="eye-outline"></ion-icon>
                                                    </button>
                                                    <button className="btn-action">
                                                        <ion-icon name="repeat-outline"></ion-icon>
                                                    </button>
                                                    <button
                                                        className="btn-action"
                                                        onClick={(e) => counter(e, a.name, a.img, a.Category, a.price)}
                                                    >
                                                        <ion-icon name="cart-outline"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="showcase-content">
                                                <a href="/" className="showcase-category">{a.Category}</a>
                                                <a href="/">
                                                    <h3 className="showcase-title">{a.name}</h3>
                                                </a>
                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                </div>
                                                <div className="price-box">
                                                    <p className="price">{a.price}$</p>
                                                    <del>$75.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>





                                {/* //Womens */}

                                <div className="product-grid">
                                    {women.map((a, index) => (
                                        <div className="showcase" key={index}>
                                            <div className="showcase-banner">
                                                <img src={a.img} alt={a.img} width="300" className="product-img default" />
                                                <p className="showcase-badge">15%</p>
                                                <div className="showcase-actions">
                                                    <button className="btn-action">
                                                        <ion-icon name="heart-outline"></ion-icon>
                                                    </button>
                                                    <button className="btn-action">
                                                        <ion-icon name="eye-outline"></ion-icon>
                                                    </button>
                                                    <button className="btn-action">
                                                        <ion-icon name="repeat-outline"></ion-icon>
                                                    </button>
                                                    <button
                                                        className="btn-action"
                                                        onClick={(e) => counter(e, a.name, a.img, a.Category, a.price)}
                                                    >
                                                        <ion-icon name="cart-outline"></ion-icon>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="showcase-content">
                                                <a href="/" className="showcase-category">{a.Category}</a>
                                                <a href="/">
                                                    <h3 className="showcase-title">{a.name}</h3>
                                                </a>
                                                <div className="showcase-rating">
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                    <ion-icon name="star-outline"></ion-icon>
                                                </div>
                                                <div className="price-box">
                                                    <p className="price">{a.price}$</p>
                                                    <del>$75.00</del>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>

                        </div>

                    </div>
                </div>








                {/* - TESTIMONIALS, CTA & SERVICE */}


                <div>

                    <div className="container">

                        <div className="testimonials-box">


                            {/* - TESTIMONIALS */}


                            <div className="testimonial">

                                <h2 className="title">testimonial</h2>

                                <div className="testimonial-card">

                                    <img src={t1} alt="alan doe" className="testimonial-banner" width="80" height="80" />

                                    <p className="testimonial-name">Alan Doe</p>

                                    <p className="testimonial-title">CEO & Founder Invision</p>

                                    <img src={quotes} alt="quotation" className="quotation-img" width="26" />

                                    <p className="testimonial-desc">
                                        Lorem ipsum dolor sit amet consectetur Lorem ipsum
                                        dolor dolor sit amet.
                                    </p>

                                </div>

                            </div>



                            {/* CTA  */}

                            <div className="cta-container">

                                <img src={ctabanner} alt="summer collection" className="cta-banner" />

                                <a href="/" className="cta-content">

                                    <p className="discount">25% Discount</p>

                                    <h2 className="cta-title">Summer collection</h2>

                                    <p className="cta-text">Starting @ $10</p>

                                    <button className="cta-btn">Shop now</button>

                                </a>

                            </div>



                            {/* Service  */}

                            <div className="service">

                                <h2 className="title">Our Services</h2>

                                <div className="service-container">

                                    <a href="/" className="service-item">

                                        <div className="service-icon">
                                            <ion-icon name="boat-outline"></ion-icon>
                                        </div>

                                        <div className="service-content">

                                            <h3 className="service-title">Worldwide Delivery</h3>
                                            <p className="service-desc">For Order Over $100</p>

                                        </div>

                                    </a>

                                    <a href="/" className="service-item">

                                        <div className="service-icon">
                                            <ion-icon name="rocket-outline"></ion-icon>
                                        </div>

                                        <div className="service-content">

                                            <h3 className="service-title">Next Day delivery</h3>
                                            <p className="service-desc">UK Orders Only</p>

                                        </div>

                                    </a>

                                    <a href="/" className="service-item">

                                        <div className="service-icon">
                                            <ion-icon name="call-outline"></ion-icon>
                                        </div>

                                        <div className="service-content">

                                            <h3 className="service-title">Best Online Support</h3>
                                            <p className="service-desc">Hours: 8AM - 11PM</p>

                                        </div>

                                    </a>

                                    <a href="/" className="service-item">

                                        <div className="service-icon">
                                            <ion-icon name="arrow-undo-outline"></ion-icon>
                                        </div>

                                        <div className="service-content">

                                            <h3 className="service-title">Return Policy</h3>
                                            <p className="service-desc">Easy & Free Return</p>

                                        </div>

                                    </a>

                                    <a href="/" className="service-item">

                                        <div className="service-icon">
                                            <ion-icon name="ticket-outline"></ion-icon>
                                        </div>

                                        <div className="service-content">

                                            <h3 className="service-title">30% money back</h3>
                                            <p className="service-desc">For Order Over $100</p>

                                        </div>

                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>





                {/* BLOG  */}

                <div className="blog">

                    <div className="container">

                        <div className="blog-container has-scrollbar">

                            <div className="blog-card">

                                <a href="/">
                                    <img src={blog1} alt="Clothes Retail KPIs 2021 Guide for Clothes Executives" width="300"
                                        className="blog-banner" />
                                </a>

                                <div className="blog-content">

                                    <a href="/" className="blog-category">Fashion</a>

                                    <a href="/">
                                        <h3 className="blog-title">Clothes Retail KPIs 2021 Guide for Clothes Executives.</h3>
                                    </a>

                                    <p className="blog-meta">
                                        By <cite>Mr Admin</cite> / <time datetime="2022-04-06">Apr 06, 2022</time>
                                    </p>

                                </div>

                            </div>

                            <div className="blog-card">

                                <a href="/">
                                    <img src={blog4} alt="Curbside fashion Trends: How to Win the Pickup Battle."
                                        className="blog-banner" width="300" />
                                </a>

                                <div className="blog-content">

                                    <a href="/" className="blog-category">Clothes</a>

                                    <h3>
                                        <a href="/" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                                    </h3>

                                    <p className="blog-meta">
                                        By <cite>Mr Robin</cite> / <time datetime="2022-01-18">Jan 18, 2022</time>
                                    </p>

                                </div>

                            </div>

                            <div className="blog-card">

                                <a href="/">
                                    <img src={blog3} alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                                        className="blog-banner" width="300" />
                                </a>

                                <div className="blog-content">

                                    <a href="/" className="blog-category">Shoes</a>

                                    <h3>
                                        <a href="/" className="blog-title">EBT vendors: Claim Your Share of SNAP Online Revenue.</a>
                                    </h3>

                                    <p className="blog-meta">
                                        By <cite>Mr Selsa</cite> / <time datetime="2022-02-10">Feb 10, 2022</time>
                                    </p>

                                </div>

                            </div>

                            <div className="blog-card">

                                <a href="/">
                                    <img src={blog2} alt="Curbside fashion Trends: How to Win the Pickup Battle."
                                        className="blog-banner" width="300" />
                                </a>

                                <div className="blog-content">

                                    <a href="/" className="blog-category">Electronics</a>

                                    <h3>
                                        <a href="/" className="blog-title">Curbside fashion Trends: How to Win the Pickup Battle.</a>
                                    </h3>

                                    <p className="blog-meta">
                                        By <cite>Mr Pawar</cite> / <time datetime="2022-03-15">Mar 15, 2022</time>
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />



        </>
    )
}

export default Prod1