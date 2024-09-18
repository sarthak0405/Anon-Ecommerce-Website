import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [name, setname] = useState("");
    const [pass, setpass] = useState("");
    const [email, setemail] = useState("");
    const navigate = useNavigate();

    const handleSubmit1 = async (e) => {
        // e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/logindata/", {
                name: name,
                pass: pass
            });

            if (response.data === "exist") {
                console.log("Data exists");
                navigate("/home", { state: { name } });
            } else {
                console.log("Data does not exist");
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred");
        }

    };


    const handleSubmit = async (e) => {
        // e.preventDefault();
        setname("");
        setpass("");
        setemail("");
        //for submitting data from frontEnd to backEnd
        alert("submitted");
        navigate("/home", { state: { name } });
        try {
            await axios.post("http://localhost:8000/postdata", {
                name: name,
                pass: pass,
                email: email,
            });
            //name as a data would be sent on this port
            console.log("Data submitted successfully");

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <br />
            <br />
            <br />
            <div className="login-wrap">
                <div className="login-html">
                    <input
                        id="tab-1"
                        type="radio"
                        name="tab"
                        className="sign-in"
                        defaultChecked="active"
                    />
                    <label htmlFor="tab-1" className="tab">
                        Sign In
                    </label>
                    <input id="tab-2" type="radio" name="tab" className="sign-up" />
                    <label htmlFor="tab-2" className="tab">
                        Sign Up
                    </label>
                    <div className="login-form">
                        <div className="sign-in-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">
                                    Username
                                </label>
                                <input id="user" type="text" value={name} onChange={(e) => setname(e.target.value)} className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Password
                                </label>
                                <input
                                    id="pass"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                    value={pass} onChange={(e) => setpass(e.target.value)}
                                />
                            </div>
                            <div className="group">
                                <input
                                    id="check"
                                    type="checkbox"
                                    className="check"
                                    defaultChecked=""
                                />
                                <label htmlFor="check">
                                    <span className="icon" /> Keep me Signed in
                                </label>
                            </div>
                            <div className="group">
                                <input type="submit" className="button" onClick={() => handleSubmit1({ name })} defaultValue="Sign In" />
                            </div>
                            <div className="hr" />
                            <div className="foot-lnk">
                                <a href="#forgot">Forgot Password?</a>
                            </div>
                        </div>
                        <div className="sign-up-htm">
                            <div className="group">
                                <label htmlFor="user" className="label">
                                    Username
                                </label>
                                <input id="user" type="text" value={name} onChange={(e) => setname(e.target.value)} className="input" />
                            </div>
                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Password
                                </label>
                                <input
                                    id="pass"
                                    type="password"
                                    className="input"
                                    data-type="password"
                                    value={pass} onChange={(e) => setpass(e.target.value)}
                                />
                            </div>

                            <div className="group">
                                <label htmlFor="pass" className="label">
                                    Email Address
                                </label>
                                <input id="pass" type="text" value={email} onChange={(e) => setemail(e.target.value)} className="input" />
                            </div>
                            <div className="group">
                                <input type="submit" className="button" onClick={() => handleSubmit({ name })} defaultValue="Sign Up" />
                            </div>
                            <div className="hr" />
                            <div className="foot-lnk">
                                <label htmlFor="tab-1">Already Member?</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login