import { useState, useEffect } from 'react'
import axios from 'axios';
import {jwtDecode} from "jwt-decode";
import '../App.css'


const Navbar = () => {

    const [showHealth, setHealth] = useState(false);
    const [showVitamin, setVitamin] = useState(false);
    const [login, setLogin] = useState(false);
    const [signup, setSignup] = useState(false);
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signupMsg, setSignupMsg] = useState(false);
    const [loginMsg, setLoginMsg] = useState(false);
    const [cart, setCart] = useState(false);
    const [profile, setProfile] = useState(false);
    const [authBtn, setAuthBtn] = useState(true);
    const [profileContainer, setProfileContainer] = useState(false);



    useEffect(() => {
        if (signup || login || signupMsg || loginMsg) {
            document.body.style.overflow = "hidden";
        }
        else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        }
    }, [signup, login, signupMsg, loginMsg])

    const loginHandler = () => {
        setLogin(true);
        setSignup(false);
    }

    const signupHandler = () => {
        setSignup(true);
        setLogin(false);
    }

    const modalCloseHandler = () => {
        setSignup(false);
        setLogin(false);
        setSignupMsg(false);
        setName("");
        setMobile("");
        setEmail("");
        setPassword("");
        setLoginMsg(false);
    }

    const registerHandle = () => {
        const register = {
            name,
            mobile,
            email,
            password
        };

        axios.post("https://tata-1mg-4rty.onrender.com/user/registerUser", register)
            .then((res) => {
                if (!res.ok) {
                    console.log(res.data.msg);
                    alert(res.data.msg);
                }
                else {
                    console.log(res.data.msg.message);
                }
                setSignup(false);
                setSignupMsg(true);
            })
            .catch((err) => {
                alert(`required: ${err.config.data}`)
            })
        setName("");
        setMobile("");
        setEmail("");
        setPassword("");
    }

    const signinHandle = () => {
        const signin = {
            email,
            password
        };

        axios.post("https://tata-1mg-4rty.onrender.com/auth/login", signin)
            .then((res) => {
                const { msg, token } = res.data;
                localStorage.setItem("token", token)
                console.log(msg);
                setLogin(false);
                setLoginMsg(true);
                setCart(true);
                setProfile(true);
                setAuthBtn(false);
            })
            .catch((err) => {
                console.log(err)
                alert(err.message);
            })
    }

    const profileEnterHandle = () => {
        setProfileContainer(true);
    }

    const profileLeaveHandle = () => {
        setProfileContainer(false);
    }

    const profileContentEnterHandle = () => {
        setProfileContainer(true);
    }

    const profileContentLeaveHandle = () => {
        setProfileContainer(false);
    }

    useEffect(() => {
        const getToken = localStorage.getItem("token");
        try {
            if (getToken) {
                const verify = jwtDecode(getToken);
                const validity = Date.now() / 1000;

                if (verify.exp > validity) {
                    setLogin(false)
                    setCart(true);
                    setProfile(true);
                    setAuthBtn(false);
                }
                else {
                    localStorage.removeItem("token");
                    setCart(false);
                    setLogin(false);
                    setProfile(false);
                    setAuthBtn(true);
                }
            }
        } catch (err) {
            console.log("token expired", err)
        }
    }, [])

    

    const healthHandleEnter = () => {
        setHealth(true);
    }

    const healthHandleLeave = () => {
        setHealth(false);
    }

    const vitaminHandleEnter = () => {
        setVitamin(true);
    }

    const vitaminHandleLeave = () => {
        setVitamin(false);
    }

    return (
        <>
            <div className='container'>
                <nav className='navbar'>
                    <div className='logo-section'>
                        <img className='mgLogo' src="images/tata_1mg_logo.svg" alt="tata_1mg_logo" />
                        <h3>MEDICINES</h3>
                        <h3>LAB TESTS</h3>
                        <h3>CONSULT DOCTORS</h3>
                        <h3>CANCER CARE</h3>
                        <h3>AYURVEDA</h3>
                        <h3>PARNERSHIPS</h3>
                        <h3>CARE PLAN</h3>
                    </div>
                    <div className='login-section'>
                        {
                            authBtn &&
                            <div className='auth-container'>
                                <button onClick={loginHandler}>Login</button>
                                <p>|</p>
                                <button onClick={signupHandler}>Sign Up</button>
                            </div>
                        }
                        {
                            login &&
                            <div className='overlay'>
                                <div className='login-container'>
                                    <div className='signup-img-container'>
                                        <img src="images/Your-Go-To-Health-App.png" alt="health-app-icon" />
                                        <h1>Make Healthcare Simpler</h1>
                                        <p>Get medicine information, order medicines, book lab test and consult doctors online from the comfort of your home</p>
                                    </div>
                                    <div>
                                        <button className='modal-close' onClick={modalCloseHandler}>X</button>
                                        <h1>Login</h1>
                                        <div className='input-section'>
                                            <div><input type="text" placeholder='Enter your email' required value={email} onChange={(e) => { setEmail(e.target.value) }} /></div>
                                            <div><input type="text" placeholder='Enter your password' required value={password} onChange={(e) => { setPassword(e.target.value) }} /></div>
                                            <div><button className='login-btn' onClick={signinHandle}>LOGIN</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            signup &&
                            <div className='overlay'>
                                <div className='signup-container'>
                                    <div className='signup-img-container'>
                                        <img src="images/Your-Go-To-Health-App.png" alt="health-app-icon" />
                                        <h1>Make Healthcare Simpler</h1>
                                        <p>Get medicine information, order medicines, book lab test and consult doctors online from the comfort of your home</p>
                                    </div>
                                    <div>
                                        <button className='modal-close' onClick={modalCloseHandler}>X</button>
                                        <h1>Sign Up</h1>
                                        <div className='input-section'>
                                            <div><input type="text" placeholder='Enter your name' required value={name} onChange={(e) => { setName(e.target.value) }} /></div>
                                            <div><input type="number" placeholder='Enter your mobile number' required value={mobile} onChange={(e) => { setMobile(e.target.value) }} /></div>
                                            <div><input type="email" placeholder='Enter your email' required value={email} onChange={(e) => { setEmail(e.target.value) }} /></div>
                                            <div><input type="password" placeholder='Enter your password' required value={password} onChange={(e) => { setPassword(e.target.value) }} /></div>
                                            <div><button className='register-btn' onClick={registerHandle}>CONTINUE</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            signupMsg &&
                            <div className='signup-msg-nodal'>
                                <div className='signup-msg-container'>
                                    <h1>User Registered Successfully!</h1>
                                    <button className='signup-modal-close' onClick={modalCloseHandler}>ok</button>
                                </div>
                            </div>
                        }
                        {
                            loginMsg &&
                            <div className='login-msg-nodal'>
                                <div className='login-msg-container'>
                                    <h1>Login Successfully!</h1>
                                    <button className='login-modal-close' onClick={modalCloseHandler}>ok</button>
                                </div>
                            </div>
                        }
                        {
                            profile &&
                            <div className='profile-container'>
                                <button onMouseEnter={profileEnterHandle} onMouseLeave={profileLeaveHandle}><img className='profile-icon' src="images/user.png" alt="use-icon" /></button>
                                {
                                    profileContainer &&
                                    <div className='profile-content' onMouseEnter={profileContentEnterHandle} onMouseLeave={profileContentLeaveHandle}>
                                        <h3>Hi there!</h3>
                                        <div><button>View Profile</button></div>
                                        <div><button>My Order</button></div>
                                        <div><button>Logout</button></div>
                                    </div>
                                }
                            </div>
                        }
                    </div>
                    <div className='cart-section'>
                        <h4>Offers</h4>
                        {
                            cart &&
                            <button><img src="images/cart-icon.png" alt="cart-icon" /></button>
                        }
                        <h4>Need Help?</h4>
                    </div>
                </nav>
                <div className='search-section'>
                    <div className='location'>
                        <div className='map-icon-containe'>
                            <img className='map-icon' src="images/map-icon.png" alt="map-icon" />
                        </div>
                        <select name="locatio" id="location">
                            <option value="">TOP CITIES</option>
                            <option value="new delhi">New Delhi</option>
                            <option value="gurgaon">Gurgaon</option>
                            <option value="pune">Pune</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="bengaluru">Bengaluru</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="ahmedabad">Ahmedabad</option>
                            <option value="chennai">Chennai</option>
                            <option value="indore">Indore</option>
                            <option value="lucknow">Lucknow</option>
                            <option value="jaipur">Jaipur</option>
                            <option value="chandigarh">Chandigarh</option>
                            <option value="bhopal">Bhopal</option>
                            <option value="noida">Noida</option>
                            <option value="navi mumbai">Navi Mumbai</option>
                            <option value="surat">Surat</option>
                            <option value="patna">Patna</option>
                            <option value="ludhiana">Ludhiana</option>
                            <option value="bhubneshwar">Bhubneshwar</option>
                        </select>
                        <div className='search-input'>
                            <input type="text" placeholder='Search for Medicines and Health Products' className='search' />
                            <div className='search-icon-container'>
                                <img className='search-icon' src="images/search-icon.png" alt="search-icon" />
                            </div>
                        </div>
                    </div>
                    <div className='quick-order'>
                        <p>QUICK BUY! Get up to 25% off on medicines</p>
                        <button className='quick-order-btn'>Quick order</button>
                    </div>
                </div>
                <div className='product-nodal-container'>
                    <div className='product-section'>
                        <div>
                            <button onMouseOver={healthHandleEnter} onMouseLeave={healthHandleLeave} className='health-btn nodal-btn'>Health Resource Center <b>⌄</b></button>
                            {
                                showHealth &&
                                <div className='products' onMouseOver={healthHandleEnter} onMouseLeave={healthHandleLeave}>
                                    <div>
                                        <h4>All Diseases</h4>
                                        <h4>All Medicines</h4>
                                        <h4>Medicines by Therapeutic Class</h4>
                                    </div>
                                </div>
                            }
                        </div>
                        <div>
                            <button onMouseOver={vitaminHandleEnter} onMouseLeave={vitaminHandleLeave} className='vitamin-btn nodal-btn'>Vitamins & Nutrition <b>⌄</b></button>
                            {
                                showVitamin &&
                                <div className='vitamin' onMouseOver={vitaminHandleEnter} onMouseLeave={vitaminHandleLeave}>
                                    <div>
                                        <h4>Multivitamins</h4>
                                        <h4>Kids</h4>
                                        <h4>Men</h4>
                                        <h4>Women</h4>
                                        <h4>Sports</h4>
                                        <h4>Vegetarian</h4>
                                        <h4>Omega & Fish Oil</h4>
                                        <h4>Fish Oil</h4>
                                        <h4>Cod Liver Oil</h4>
                                        <h4></h4>
                                        <h4>Flax Seed Oil</h4>
                                        <h4>Calcium</h4>
                                        <h4>Minerals</h4>
                                        <h4>Iron</h4>
                                        <h4>Vitamin B</h4>
                                    </div>
                                    <div>
                                        <h4>Vitamin D</h4>
                                        <h4>Vitamin C</h4>
                                        <h4>Vitamin A</h4>
                                        <h4>Global Supplements</h4>
                                        <h4>Now Foods</h4>
                                        <h4>Now Foods</h4>
                                        <h4>Nordic naturals</h4>
                                        <h4>Hair & Skin Supplements</h4>
                                        <h4>Specialty Supplements</h4>
                                        <h4>Antioxidants</h4>
                                        <h4>Glucosamine</h4>
                                        <h4>Vitamin K</h4>
                                        <h4>Gummies Vitamins</h4>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;