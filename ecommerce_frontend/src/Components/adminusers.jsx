import { useState, useEffect } from 'react'
import axios from 'axios'
import React from 'react'
import Adminsidebar from './adminsidebar'
import { Button } from 'react-bootstrap'

const Adminusers = () => {
    const [user, getuser] = useState([])
    useEffect(() => { getdetails(); })

    const getdetails = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getdata ")
            getuser(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteuser = async (name) => {
        try {
            console.log(`deleting ${name}`);
            await axios.delete(`http://localhost:8000/deletedata/${name}`);
            getdetails();
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            {/* SIDEBAR */}
            <Adminsidebar />
            {/* SIDEBAR */}
            {/* CONTENT */}
            <section id="content">
                {/* NAVBAR */}
                <nav>
                    <i className="bx bx-useru" />
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
                            <h1>Users</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="/">Dashboard</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                </li>
                                <li>
                                    <a className="active" href="/">
                                        Users
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="/" className="btn-download">
                            <i className="bx bxs-cloud-download" />

                        </a>
                    </div>

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
                                        <th>Name</th>
                                        {/* <th>Description</th> */}
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        user.map((a) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>
                                                            {/* <img src={a.img} alt="prodimg" /> */}
                                                            <p>{a.name}</p>
                                                        </td>
                                                        {/* <td>{a.description}</td> */}
                                                        <td>{a.email}</td>
                                                        <td>{a.pass}</td>
                                                        <td><Button variant="danger" onClick={() => deleteuser(a.name)}>Delete</Button></td>

                                                    </tr>
                                                </>
                                            )
                                        })
                                    }




                                </tbody>
                            </table>
                        </div>

                    </div>
                </main>

            </section>
        </>
    )
}

export default Adminusers