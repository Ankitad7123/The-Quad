import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { db, auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
    const [truth, setTruth] = useState(true);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilepic, setProfilepic] = useState("")
    const [data, setData] = useState([]);
    const Navigate = useNavigate();
    const changepage = async () => {
        await axios.post("http://localhost:3001/users/register", { username, password, email, profilepic })
            .then((res) => {
                if (res.data == "notok") {
                    alert("the user is already present");
                }
                else {
                    Navigate("/auth");
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }
    const googlesignup = async () => {
        await signInWithPopup(auth, provider);
    }

    return (
        <>
            <div className='login1' style={{ display: "flex", flex: "1", flexDirection: "row", width: "100vw", hight: "100vh", overflow: "none" }}>
                <div style={{ display: "flex", flex: "0.5", }}>

                    <div style={{ display: "flex", flexDirection: "column", margin: "200px", }} >
                        <div style={{ marginBottom: "60px", marginLeft: "35px" }}>
                            <h1>Register</h1>
                        </div>
                        <input type="text" placeholder='username' style={{ marginBottom: "20px" }} value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        <input type="password" placeholder='password' style={{ marginBottom: "20px" }} value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <input type="text" placeholder='email' style={{ marginBottom: "20px" }} value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" placeholder='profile' value={profilepic} onChange={(e) => { setProfilepic(e.target.value) }} />
                        <button style={{ margin: "28px" }} onClick={changepage}>register</button>
                        or
                        <button style={{ margin: "28px" }} onClick={googlesignup}> Google login</button>
                    </div>

                </div>
                <div style={{ display: "flex", flex: "0.5", width: "48vw" }}>
                    <img style={{ borderRadius: "150px" }} src='https://img.freepik.com/free-vector/men-with-gadgets-isolated-white-background_81522-1685.jpg' alt='im' />
                </div>

            </div>


        </>

    )
}

export default Login