import React, { useEffect, useState } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Table, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const [cart, getCart] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getDetails();
    }, []);

    const getDetails = async () => {
        try {
            const response = await axios.get('http://localhost:8000/getcart');
            getCart(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleBuy = async (item) => {
        try {
            // Post the item to the buy collection
            await axios.post('http://localhost:8000/buy', item);
            // Delete the item from the cart
            await axios.delete(`http://localhost:8000/cart/${item.name}`);
            // Redirect to the orders page with the item in state
            navigate('/order', { state: { item } });
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <Navbar />
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Buy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((a) => (
                            <tr key={a.name}>
                                <td>
                                    <img
                                        src={a.img}
                                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                                        alt=""
                                    />
                                </td>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td>
                                    <Button variant="primary" onClick={() => handleBuy(a)}>
                                        Buy
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <Footer />
        </>
    );
};

export default Cart;