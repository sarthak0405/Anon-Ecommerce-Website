import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Adminsidebar from './adminsidebar'

const Allorders = () => {


    const [order, getorder] = useState([])
    useEffect(() => { getOrder(); })

    const getOrder = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getbuy ")
            getorder(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            {/* SIDEBAR */}
            <Adminsidebar />
            {/* SIDEBAR */}
            {/* CONTENT */}
            <section id="content">
                {/* NAVBAR */}
                <nav>
                    <i className="bx bx-menu" />
                    <a href="/" className="nav-link">
                        Categories
                    </a>
                    <form action="/">
                        <div className="form-input">
                            <input type="search" placeholder="Search..." />
                            <button type="submit" className="search-btn">
                                <i className="bx bx-search" />
                            </button>
                        </div>
                    </form>
                    <input type="checkbox" id="switch-mode" hidden="" />
                    <label htmlFor="switch-mode" className="switch-mode" />
                    <a href="/" className="notification">
                        <i className="bx bxs-bell" />
                        <span className="num">8</span>
                    </a>
                    <a href="/" className="profile">
                        <img src="img/people.png" />
                    </a>
                </nav>
                {/* NAVBAR */}
                {/* MAIN */}
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>Orders</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="/">Dashboard</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                </li>
                                <li>
                                    <a className="active" href="/">
                                        Order
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="/" className="btn-download">
                            <i className="bx bxs-cloud-download" />
                            {/* <span className="text">Download PDF</span> */}
                        </a>
                    </div>
                    {/* <ul className="box-info">
                        <li>
                            <i className="bx bxs-store" />
                            <span className="text">
                                <h3>1020</h3>
                                <p>Stores</p>
                            </span>
                        </li>
                        <li>
                            <i className="bx bxs-group" />
                            <span className="text">
                                <h3>1020</h3>
                                <p>Stores</p>
                            </span>
                        </li>
                        {/* <li>
                            <a href="order.html">
                                <i className="bx bxs-shopping-bag" />
                                <span className="text">
                                    <h3>$2543</h3>
                                    <p>Orders</p>
                                </span>
                            </a>
                        </li> */}
                    {/* <li>
                            <i className="bx bxs-shopping-bag" />
                            <span className="text">
                                <h3>1020</h3>
                                <p>Stores</p>
                            </span>
                        </li> */}
                    {/* s */}
                    {/* </ul> */}
                    <div className="table-data">
                        <div className="order">
                            <div className="head">
                                <h3>Recent Orders</h3>
                                <i className="bx bx-search" />
                                <i className="bx bx-filter" />
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name Of Product</th>
                                        {/* <th>Description</th> */}
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        order.map((a) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            <img src={a.img} alt="prodimg" />
                                                            <p>{a.name}</p>
                                                        </td>
                                                        {/* <td>{a.description}</td> */}
                                                        <td>{a.price}</td>
                                                        <td>{a.Category}</td>
                                                        <td>
                                                            <span className="status completed">Success</span>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                        })
                                    }

                                    {/* <tr>
                                        <td>
                                            <img src="img/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status pending">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="img/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status process">Process</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="img/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status pending">Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="img/people.png" />
                                            <p>John Doe</p>
                                        </td>
                                        <td>01-10-2021</td>
                                        <td>
                                            <span className="status completed">Completed</span>
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                        {/* <div className="todo">
                            <div className="head">
                                <h3>Todos</h3>
                                <i className="bx bx-plus" />
                                <i className="bx bx-filter" />
                            </div>
                            <ul className="todo-list">
                                <li className="completed">
                                    <p>Todo List</p>
                                    <i className="bx bx-dots-vertical-rounded" />
                                </li>
                                <li className="completed">
                                    <p>Todo List</p>
                                    <i className="bx bx-dots-vertical-rounded" />
                                </li>
                                <li className="not-completed">
                                    <p>Todo List</p>
                                    <i className="bx bx-dots-vertical-rounded" />
                                </li>
                                <li className="completed">
                                    <p>Todo List</p>
                                    <i className="bx bx-dots-vertical-rounded" />
                                </li>
                                <li className="not-completed">
                                    <p>Todo List</p>
                                    <i className="bx bx-dots-vertical-rounded" />
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </main>
                {/* MAIN */}
            </section>
            {/* CONTENT */}
        </>
    )
}

export default Allorders