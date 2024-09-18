import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Adminsidebar from './adminsidebar';

const Allproduct = () => {
    // State variables for men, women, electronics, kids, perfume data
    const [men, getMen] = useState([]);
    const [women, getWomen] = useState([]);
    const [electronics, getElectronics] = useState([]);
    const [kids, getKids] = useState([]);
    const [perfume, getPerfume] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedMen, setSelectedMen] = useState(null);
    const [selectedWomen, setSelectedWomen] = useState(null);
    const [selectedElectronics, setSelectedElectronics] = useState(null);
    const [selectedKids, setSelectedKids] = useState(null);
    const [selectedPerfume, setSelectedPerfume] = useState(null);
    const [formValues, setFormValues] = useState({ name: "", price: "", Category: "", img: "" });

    // Function to handle update click for men
    const handleMenUpdateClick = (man) => {
        setSelectedMen(man);
        setSelectedWomen(null);
        setSelectedElectronics(null);
        setSelectedKids(null);
        setSelectedPerfume(null);
        setFormValues({ name: man.name, price: man.price, Category: man.Category, img: man.img });
        setShowForm(true);
    };

    // Function to handle update click for women
    const handleWomenUpdateClick = (woman) => {
        setSelectedWomen(woman);
        setSelectedMen(null);
        setSelectedElectronics(null);
        setSelectedKids(null);
        setSelectedPerfume(null);
        setFormValues({ name: woman.name, price: woman.price, Category: woman.Category, img: woman.img });
        setShowForm(true);
    };

    // Function to handle update click for electronics
    const handleElectronicsUpdateClick = (electronic) => {
        setSelectedElectronics(electronic);
        setSelectedMen(null);
        setSelectedWomen(null);
        setSelectedKids(null);
        setSelectedPerfume(null);
        setFormValues({ name: electronic.name, price: electronic.price, Category: electronic.Category, img: electronic.img });
        setShowForm(true);
    };

    // Function to handle update click for kids
    const handleKidsUpdateClick = (kid) => {
        setSelectedKids(kid);
        setSelectedMen(null);
        setSelectedWomen(null);
        setSelectedElectronics(null);
        setSelectedPerfume(null);
        setFormValues({ name: kid.name, price: kid.price, Category: kid.Category, img: kid.img });
        setShowForm(true);
    };

    // Function to handle update click for perfume
    const handlePerfumeUpdateClick = (perfume) => {
        setSelectedPerfume(perfume);
        setSelectedMen(null);
        setSelectedWomen(null);
        setSelectedElectronics(null);
        setSelectedKids(null);
        setFormValues({ name: perfume.name, price: perfume.price, Category: perfume.Category, img: perfume.img });
        setShowForm(true);
    };

    // Function to handle form change
    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedMen) {
                await axios.put(
                    `http://localhost:8000/updatemen/${selectedMen.name}`,
                    formValues
                );
                // Update the local state with the updated men data
                getMenData();
            } else if (selectedWomen) {
                await axios.put(
                    `http://localhost:8000/updatewomen/${selectedWomen.name}`,
                    formValues
                );
                // Update the local state with the updated women data
                getWomenData();
            } else if (selectedElectronics) {
                await axios.put(
                    `http://localhost:8000/updateelectronics/${selectedElectronics.name}`,
                    formValues
                );
                // Update the local state with the updated electronics data
                getElectronicsData();
            } else if (selectedKids) {
                await axios.put(
                    `http://localhost:8000/updatekids/${selectedKids.name}`,
                    formValues
                );
                // Update the local state with the updated kids data
                getKidsData();
            } else if (selectedPerfume) {
                await axios.put(
                    `http://localhost:8000/updateperfume/${selectedPerfume.name}`,
                    formValues
                );
                // Update the local state with the updated perfume data
                getPerfumeData();
            }
            setShowForm(false);
        } catch (err) {
            console.log(err);
        }
    };

    // Function to delete men
    const deleteMen = async (name) => {
        try {
            console.log(`deleting ${name}`);
            await axios.delete(`http://localhost:8000/deletemen/${name}`);
            // Refresh men data after deletion
            getMenData();
        } catch (err) {
            console.log(err);
        }
    };

    // Function to delete women
    const deleteWomen = async (name) => {
        try {
            console.log(`deleting ${name}`);
            await axios.delete(`http://localhost:8000/deletewomen/${name}`);
            // Refresh women data after deletion
            getWomenData();
        } catch (err) {
            console.log(err);
        }
    };

    // Function to delete electronics
    const deleteElectronics = async (name) => {
        try {
            console.log(`deleting ${name}`);
            await axios.delete(`http://localhost:8000/deleteelectronics/${name}`);
            // Refresh electronics data after deletion
            getElectronicsData();
        } catch (err) {
            console.log(err);
        }
    };

    // Function to delete kids
    const deleteKids = async (name) => {
        try {
            console.log(`deleting ${name}`);
            await axios.delete(`http://localhost:8000/deletekids/${name}`);
            // Refresh kids data after deletion
            getKidsData();
        } catch (err) {
            console.log(err);
        }
    };

    // Function to delete perfume
    const deletePerfume = async (name) => {
        try {
            console.log(`deleting ${name}`);
            await axios.delete(`http://localhost:8000/deleteperfume/${name}`);
            // Refresh perfume data after deletion
            getPerfumeData();
        } catch (err) {
            console.log(err);
        }
    };

    // Function to fetch men data from the backend
    const getMenData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getmen");
            getMen(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Function to fetch women data from the backend
    const getWomenData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getwomen");
            getWomen(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Function to fetch electronics data from the backend
    const getElectronicsData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getelectronics");
            getElectronics(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Function to fetch kids data from the backend
    const getKidsData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getkid");
            getKids(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // Function to fetch perfume data from the backend
    const getPerfumeData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/getperfume");
            getPerfume(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    // useEffect to fetch men, women, electronics, kids, and perfume data on component mount
    useEffect(() => {
        getMenData();
        getWomenData();
        getElectronicsData();
        getKidsData();
        getPerfumeData();
    }, []);

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
                        <img src="img/people.png" alt="profile" />
                    </a>
                </nav>
                {/* NAVBAR */}
                {/* MAIN */}
                <main>
                    <div className="head-title">
                        <div className="left">
                            <h1>All Products</h1>
                            <ul className="breadcrumb">
                                <li>
                                    <a href="/">Dashboard</a>
                                </li>
                                <li>
                                    <i className="bx bx-chevron-right" />
                                </li>
                                <li>
                                    <a className="active" href="/">
                                        Products
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <a href="/" className="btn-download">
                            <i className="bx bxs-cloud-download" />
                            {/* <span className="text">Download PDF</span> */}
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
                                        <th>Name Of Product</th>
                                        <th>Price</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                        <th>Delete</th>
                                        <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Rendering men data */}
                                    {men.map((man) => (
                                        <tr key={man.name}>
                                            <td>
                                                <img src={man.img} alt="prodimg" />
                                                <p>{man.name}</p>
                                            </td>
                                            <td>{man.price}</td>
                                            <td>{man.Category}</td>
                                            <td>
                                                <span className="status completed">Uploaded</span>
                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => deleteMen(man.name)}>Delete</Button>
                                            </td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleMenUpdateClick(man)}>Update</Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Rendering women data */}
                                    {women.map((woman) => (
                                        <tr key={woman.name}>
                                            <td>
                                                <img src={woman.img} alt="prodimg" />
                                                <p>{woman.name}</p>
                                            </td>
                                            <td>{woman.price}</td>
                                            <td>{woman.Category}</td>
                                            <td>
                                                <span className="status completed">Uploaded</span>
                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => deleteWomen(woman.name)}>Delete</Button>
                                            </td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleWomenUpdateClick(woman)}>Update</Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Rendering electronics data */}
                                    {electronics.map((electronic) => (
                                        <tr key={electronic.name}>
                                            <td>
                                                <img src={electronic.img} alt="prodimg" />
                                                <p>{electronic.name}</p>
                                            </td>
                                            <td>{electronic.price}</td>
                                            <td>{electronic.Category}</td>
                                            <td>
                                                <span className="status completed">Uploaded</span>
                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => deleteElectronics(electronic.name)}>Delete</Button>
                                            </td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleElectronicsUpdateClick(electronic)}>Update</Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Rendering kids data */}
                                    {kids.map((kid) => (
                                        <tr key={kid.name}>
                                            <td>
                                                <img src={kid.img} alt="prodimg" />
                                                <p>{kid.name}</p>
                                            </td>
                                            <td>{kid.price}</td>
                                            <td>{kid.Category}</td>
                                            <td>
                                                <span className="status completed">Uploaded</span>
                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => deleteKids(kid.name)}>Delete</Button>
                                            </td>
                                            <td>
                                                <Button variant="primary" onClick={() => handleKidsUpdateClick(kid)}>Update</Button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* Rendering perfume data */}
                                    {perfume.map((perf) => (
                                        <tr key={perf.name}>
                                            <td>
                                                <img src={perf.img} alt="prodimg" />
                                                <p>{perf.name}</p>
                                            </td>
                                            <td>{perf.price}</td>
                                            <td>{perf.Category}</td>
                                            <td>
                                                <span className="status completed">Uploaded</span>
                                            </td>
                                            <td>
                                                <Button variant="danger" onClick={() => deletePerfume(perf.name)}>Delete</Button>
                                            </td>
                                            <td>
                                                <Button variant="primary" onClick={() => handlePerfumeUpdateClick(perf)}>Update</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* Form for updating product */}
                        {showForm && (
                            <div style={{ marginTop: "20px" }}>
                                <form onSubmit={handleFormSubmit}>
                                    <div style={{ marginBottom: "10px" }}>
                                        <label htmlFor="name">Name: </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <label htmlFor="price">Price: </label>
                                        <input
                                            type="text"
                                            id="price"
                                            name="price"
                                            value={formValues.price}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <label htmlFor="Category">Category: </label>
                                        <input
                                            type="text"
                                            id="Category"
                                            name="Category"
                                            value={formValues.Category}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <div style={{ marginBottom: "10px" }}>
                                        <label htmlFor="img">Image URL: </label>
                                        <input
                                            type="text"
                                            id="img"
                                            name="img"
                                            value={formValues.img}
                                            onChange={handleFormChange}
                                            required
                                        />
                                    </div>
                                    <Button type="submit" variant="primary" style={{ width: "200px" }}>
                                        Update
                                    </Button>
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        onClick={() => setShowForm(false)}
                                        style={{ marginLeft: "10px", width: "200px" }}
                                    >
                                        Cancel
                                    </Button>
                                </form>
                            </div>
                        )}
                    </div>
                </main>
                {/* MAIN */}
            </section>
            {/* CONTENT */}
        </>
    );
};

export default Allproduct;
