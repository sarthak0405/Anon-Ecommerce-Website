import React from 'react'
import { Link } from 'react-router-dom'

const Adminsidebar = () => {
    return (
        <section id="sidebar">
            <div className="brand">
                <i className="bx bxs-smile" />
                <span className="text">Admin Dashboard</span>
            </div>
            <ul className="side-menu top">
                <li >
                    <a href="/">
                        <i className="bx bxs-dashboard" />
                        <Link to='/adminpage'><span className="text">Dashboard</span></Link>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-store" />
                        <Link to='/products'><span className="text"> Products</span></Link>
                    </a>
                </li>
                <li>
                    <a href="customer.html">
                        <i className="bx bxs-doughnut-chart" />
                        <Link to='/users'><span className="text">Users</span></Link>
                    </a>
                </li>
                <li>
                    <a href="order.html">
                        <i className="bx bxs-shopping-bag" />
                        <Link to='/adminorder'><span className="text">Orders</span></Link>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-group" />
                        <span className="text">Delivery Person</span>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i className="bx bxs-dollar-circle" />
                        <span className="text">Income</span>
                    </a>
                </li>
            </ul>
            <ul className="side-menu">
                <li>
                    <a href="/">
                        <i className="bx bxs-cog" />
                        <span className="text">Settings</span>
                    </a>
                </li>
                <li>
                    <a href="C.html" className="logout">
                        <i className="bx bxs-log-out-circle" />
                        <span className="text">Logout</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

export default Adminsidebar