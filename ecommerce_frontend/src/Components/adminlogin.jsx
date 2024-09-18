import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Adminlogin = () => {
    const [name, setname] = useState("");
    const [password, setpass] = useState("");
    const navigate = useNavigate();

    const handleSubmit1 = async (e) => {
        try {
            const response = await axios.post(`http://localhost:8000/adminlogin/`, {
                name: name,
                password: password,
            });

            if (response.data === "exist") {
                alert("Login Success");
                navigate('/adminpage');
                // navigate("/Welcome", { state: { name } });
            } else {
                console.log("Data does not exist");
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred");
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-2" />
                    <div className="col-lg-6 col-md-8 login-box">
                        <div className="col-lg-12 login-key">
                            <i className="fa fa-key" aria-hidden="true" />
                        </div>
                        <div className="col-lg-12 login-title">ADMIN PANEL</div>
                        <div className="col-lg-12 login-form">
                            <div className="col-lg-12 login-form">
                                {/* <form> */}
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME</label>
                                    <input type="text" className="form-control" value={name} onChange={(e) => setname(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" value={password} className="form-control" onChange={(e) => setpass(e.target.value)} i="" />
                                </div>
                                <div className="col-lg-12 loginbttm">
                                    <div className="col-lg-6 login-btm login-text">
                                        {/* Error Message */}
                                    </div>
                                    <div className="col-lg-6 login-btm login-button">
                                        <button type="submit" className="btn btn-outline-primary" onClick={handleSubmit1}>
                                            LOGIN
                                        </button>
                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Adminlogin