// Menspage.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import { useCart } from './cartContext';

const Womenspage = () => {
    const [activeProduct, setActiveProduct] = useState(null);
    const [men, setMen] = useState([]);
    const { addToCart } = useCart();

    const getMenData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getwomen");
            setMen(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // const handleAddToCart = () => {

    //     // Add other cart-related logic here
    // };

    const counter = async (e, name, img, Category, price) => {
        e.preventDefault();
        addToCart();

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


    useEffect(() => {
        getMenData();
    }, []);

    const handleProductClick = (product) => {
        setActiveProduct(product);
    };

    const handleClosePreview = () => {
        setActiveProduct(null);
    };

    return (
        <>
            <Navbar />
            <div className="container1">
                <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600&display=swap');

          * {
            font-family: 'Nunito', sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            outline: none;
            border: none;
            text-decoration: none;
            transition: all .2s linear;
            text-transform: capitalize;
          }

          html {
            font-size: 12px;
            overflow-x: hidden;
          }

          body {
            background: #eee;
          }

          .container1 {
            max-width: 1200px;
            margin: 0 auto;
            padding: 3rem 2rem;
          }

          .container1 .title {
            font-size: 3.5rem;
            color: #444;
            margin-bottom: 3rem;
            text-transform: uppercase;
            text-align: center;
          }

          .container1 .products-container1 {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 2rem;
          }

          .container1 .products-container1 .product {
            text-align: center;
            padding: 3rem 2rem;
            background: #fff;
            box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
            outline: .1rem solid #ccc;
            outline-offset: -1.5rem;
            cursor: pointer;
          }

          .container1 .products-container1 .product:hover {
            outline: .2rem solid #222;
            outline-offset: 0;
          }

          .container1 .products-container1 .product img {
            height: 25rem;
          }

          .container1 .products-container1 .product:hover img {
            transform: scale(.9);
          }

          .container1 .products-container1 .product h3 {
            padding: .5rem 0;
            font-size: 2rem;
            color: #444;
          }

          .container1 .products-container1 .product:hover h3 {
            color: #27ae60;
          }

          .container1 .products-container1 .product .price {
            font-size: 2rem;
            color: #444;
          }

          .products-preview {
            position: fixed;
            top: 0;
            left: 0;
            min-height: 100vh;
            width: 100%;
            background: rgba(0, 0, 0, .8);
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .products-preview .preview {
            position: relative;
            padding: 2rem;
            text-align: center;
            background: #fff;
            margin: 2rem;
            width: 40rem;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .products-preview .preview.active {
            display: block;
          }

          .products-preview .preview img {
            height: 30rem;
          }

          .products-preview .preview .fa-times {
            position: absolute;
            top: 1rem;
            right: 1.5rem;
            cursor: pointer;
            color: #444;
            font-size: 4rem;
          }

          .products-preview .preview .fa-times:hover {
            transform: rotate(90deg);
          }

          .products-preview .preview h3 {
            color: #444;
            padding: .5rem 0;
            font-size: 2.5rem;
          }

          .products-preview .preview .stars {
            padding: 1rem 0;
            font-size: 1.7rem;
          }

          .products-preview .preview .stars i {
            color: #27ae60;
          }

          .products-preview .preview .stars span {
            color: #999;
          }

          .products-preview .preview p {
            line-height: 1.5;
            padding: 1rem 0;
            font-size: 1.6rem;
            color: #777;
          }

          .products-preview .preview .price {
            padding: 1rem 0;
            font-size: 2.5rem;
            color: #27ae60;
          }

          .products-preview .preview .buttons {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
            margin-top: 1rem;
          }

          .products-preview .preview .buttons a {
            flex: 1 1 16rem;
            padding: 1rem;
            font-size: 1.8rem;
            color: #444;
            border: .1rem solid #444;
          }

          .products-preview .preview .buttons a.cart {
            background: #444;
            color: #fff;
          }

          .products-preview .preview .buttons a.cart:hover {
            background: #111;
          }

          .products-preview .preview .buttons a.buy:hover {
            background: #444;
            color: #fff;
          }

          @media (max-width: 991px) {
            html {
              font-size: 55%;
            }
          }

          @media (max-width: 768px) {
            .products-preview .preview img {
              height: 25rem;
            }
          }

          @media (max-width: 450px) {
            html {
              font-size: 50%;
            }
          }
        `}</style>

                <h3 className="title">Men's Wear</h3>
                <div className="products-container1">
                    {men.map((product) => (
                        <div
                            key={product.id}
                            className="product"
                            data-name={product.id}
                            onClick={() => handleProductClick(product)}
                        >
                            <img src={product.img} alt={product.name} />
                            <h3>{product.name}</h3>
                            <div className="price">{product.price}₹</div>
                        </div>
                    ))}
                </div>

                {activeProduct && (
                    <div className="products-preview">
                        <div className="preview active" data-target={activeProduct.id}>
                            <i className="fas fa-times" onClick={handleClosePreview}></i>
                            <img src={activeProduct.img} alt={activeProduct.name} />
                            <h3>{activeProduct.name}</h3>
                            <div className="stars">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star-half-alt"></i>
                                <span>(250)</span>
                            </div>
                            <p>{activeProduct.description}</p>
                            <div className="price">{activeProduct.price}₹ </div>
                            <div className="buttons">
                                <a href="#" onClick={handleClosePreview} className="buy">Close</a>
                                <a href="#" className="cart" onClick={(e) => counter(e, activeProduct.name, activeProduct.img, activeProduct.Category, activeProduct.price)}>add to cart</a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Womenspage;
