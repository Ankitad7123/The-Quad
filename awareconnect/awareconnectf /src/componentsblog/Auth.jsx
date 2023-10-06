import React, { useState, useEffect } from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';


function Auth() {


    const [logged, setLogged] = useState({});
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);
    const navigation = useNavigate();
    const [trut, setTruth] = useState(false);




    const check = async () => {
        try {
            const response = await axios.post("http://localhost:3001/auth/", { username, password });
            console.log(response.data);
            if (response.data === "ok") {
                localStorage.setItem("trut", true);
                navigation("/");
                localStorage.setItem("data", [username])
            } else {
                alert(response.data);
            }
        } catch (error) {
            console.error("Login error:", error);
        }
    }



    const googlesignup = async () => {
        try {
            await signInWithPopup(auth, provider);
            navigation("/");
        } catch (error) {
            alert(error);

        }

    }






    return (
        <>

            <div className='login1' style={{ display: "flex", flex: "1", flexDirection: "row", width: "100vw", hight: "100vh", overflow: "none" }}>
                <div style={{ display: "flex", flex: "0.5", }}>

                    <div style={{ display: "flex", flexDirection: "column", margin: "200px", }} >
                        <div style={{ marginBottom: "60px", marginLeft: "45px" }}>
                            <h1 style={{ color: "red" }}>Login</h1>
                        </div>
                        <input type="text" placeholder='username' style={{ marginBottom: "20px" }} value={username} onChange={(e) => { setUsername(e.target.value) }} />
                        <input type="password" placeholder='password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        <button style={{ margin: "28px" }} onClick={check}>login</button>
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

export default Auth