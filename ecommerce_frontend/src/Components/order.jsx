import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const { item } = location.state || {};
  const navigate = useNavigate();

  // Provide default values or fallback in case item is undefined
  const itemName = item?.name || 'Unknown Product';
  const itemPrice = item?.price || '0';
  const itemImg = item?.img || 'placeholder-image-url';

  return (
    <main>
      <div className="card">
        <div className="card__title">
          <div className="icon">
            <a href="#" onClick={() => window.history.back()}>
              <i className="fa fa-arrow-left" />
            </a>
          </div>
          <h3>New products</h3>
        </div>
        <div className="card__body">
          <div className="half">
            <div className="featured_text">
              <h1>{itemName}</h1>
              <p className="sub">Relaxed Short Full Sleeve</p>
              <p className="price">Rs {itemPrice}</p>
            </div>
            <div className="image">
              <img src={itemImg} alt={itemName} />
            </div>
          </div>
          <div className="half">
            <div className="description">
              <span className="stock">
                <i className="fa fa-pen" /> Product Description
              </span>
              <p>
                A relaxed short full sleeve shirt typically features a loose fit
                that provides comfort and ease of movement. It's designed to be less
                constrictive than a regular fit, offering a casual look.
              </p>
              <br />
              <span className="stock">
                <i className="fa fa-pen" /> Order Date
              </span>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            <span className="stock">
              <i className="fa fa-pen" /> Ordered Status
            </span>
            <div className="reviews">
              <ul className="stars">
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star" />
                </li>
                <li>
                  <i className="fa fa-star-o" />
                </li>
              </ul>
              <span style={{ fontWeight: 'bold' }}>
                Ordered Successful, Thanks For Ordering
              </span>
            </div>
          </div>
        </div>
        <div className="card__footer">
          <div className="recommend">
            <p>Recommended by</p>
            <h3>Anon</h3>
          </div>
          <div className="action">
            <button onClick={() => navigate('/pay-receipt', { state: { item } })}>Pay Now</button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Fjalla+One|Montserrat:300,400,700,800|Open+Sans:300');
        
        body {
          background-image: linear-gradient(
            to right bottom,
            #b91eda,
            #a02ae0,
            #8234e5,
            #5d3be8,
            #1241eb
          );
          height: 100%;
          margin: 0;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        main{
          max-width: 720px;
          margin: 5% auto;
        }

        .card{
          box-shadow: 0 6px 6px rgba(#000, 0.3);
          transition: 200ms;
          background: #fff;
        }

        .card__title{
          display: flex;
          align-items: center;
          padding: 30px 40px;
        }

        .card__title h3{
          flex: 0 1 200px;
          text-align: right;
          margin: 0;
          color: #252525;
          font-family: sans-serif;
          font-weight: 600;
          font-size: 20px;
          text-transform: uppercase;
        }

        .card__title .icon{
          flex: 1 0 10px;
          background: #115dd8;
          color: #fff;
          padding: 10px 10px;
          transition: 200ms;
        }

        .card__title .icon > a{
          color: #fff;
        }

        .card__title .icon:hover{
          background: #252525;
        }

        .card__body{
          padding: 0 40px;
          display: flex;
          flex-flow: row no-wrap;
          margin-bottom: 25px;
        }

        .card__body > .half{
          box-sizing: border-box;
          padding: 0 15px;
          flex: 1 0 50%;
        }

        .card__body .featured_text h1{
          margin: 0;
          padding: 0;
          font-weight: 800;
          font-family: "Montserrat", sans-serif;
          font-size: 64px;
          line-height: 50px;
          color: #181e28;
        }

        .card__body .featured_text p.sub{
          font-family: "Montserrat", sans-serif;
          font-size: 26px;
          text-transform: uppercase;
          color: #686e77;
          font-weight: 300;
          margin-bottom: 5px;
        }

        .card__body .featured_text p.price{
          font-family: "Fjalla One", sans-serif;
          color: #252525;
          font-size: 26px;
        }

        .card__body .image{
          padding-top: 15px;
          width: 100%;
        }

        .card__body .image img{
          display: block;
          max-width: 100%;
          height: auto;
        }

        .card__body .description{
          margin-bottom: 25px;
        }

        .card__body .description p{
          margin: 0;
          font-family: "Open Sans", sans-serif;
          font-weight: 300;
          line-height: 27px;
          font-size: 16px;
          color: #555;
        }

        .card__body span.stock{
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          color: #a1cc16;
        }

        .card__body .reviews .stars{
          display: inline-block;
          list-style: none;
          padding: 0;
        }

        .card__body .reviews .stars > li{
          display: inline-block;
        }

        .card__body .reviews .stars .fa{
          color: #f7c01b;
        }

        .card__body .reviews > span{
          font-family: "Open Sans", sans-serif;
          font-size: 14px;
          margin-left: 5px;
          color: #555;
        }

        .card__footer{
          padding: 30px 40px;
          display: flex;
          flex-flow: row no-wrap;
          align-items: center;
          position: relative;
        }

        .card__footer::before{
          content: "";
          position: absolute;
          display: block;
          top: 0;
          left: 40px;
          width: calc(100% - 40px);
          height: 3px;
          background: #115dd8;
          background: linear-gradient(to right, #115dd8 0%,#115dd8 20%,#ddd 20%,#ddd 100%);
        }

        .recommend{
          flex: 1 0 10px;
        }

        .recommend p{
          margin: 0;
          font-family: "Montserrat", sans-serif;
          text-transform: uppercase;
          font-weight: 600;
          font-size: 14px;
          color: #555;
        }

        .recommend h3{
          margin: 0;
          font-size: 20px;
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          text-transform: uppercase;
          color: #115dd8;
        }

        .action button{
          cursor: pointer;
          border: 1px solid #115dd8;
          padding: 14px 30px;
          border-radius: 200px;
          color: #fff;
          background: #115dd8;
          font-family: "Open Sans", sans-serif;
          font-size: 16px;
          transition: 200ms;
        }

        .action button:hover{
          background: #fff;
          color: #115dd8;
        }
      `}</style>
    </main>
  );
};

export default Order;
