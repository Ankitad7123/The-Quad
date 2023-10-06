import React, { useState } from 'react'
import './Topbar.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Topbar() {
    const [first, setFirst] = useState(false);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const search = () => {
        setFirst(current => !current);
    }


    const logout = async () => {
        await localStorage.setItem("trut", false);
        navigate("/auth")

    }
    useEffect(() => {
        const getitem = () => {
            setData(localStorage.getItem("data"));
            console.log(data);
        }
        getitem();
    }, [])
    return (
        <div className='topbar'>
            <div className='left'>
                <p className='toplist1' style={{ color: "red", fontFamily: "-moz-initial", fontWeight: "100px" }}> hello {data} !</p>
                {/* <a href='https://instagram.com/_._ad7/'><i className="topicon fa-brands fa-instagram"></i></a>
                <a href="https://twitter.com/ankitd7_?s=20"><i className="topicon fa-brands fa-twitter"></i></a>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjRPhqdcvLHlQmvxGSCNljgRpkMsFrNMtXdFKDFVXVqDKpVPxbQgBmHChdcLDJNNhJPgkB"><i className="topicon fa-regular fa-envelope"></i></a> */}
            </div>
            <div className='center'>
                <ul className='toplist'>
                    <li className='toplist1' ><a href="/" style={{ textDecoration: "none" }}>home</a></li>
                    <li className='toplist1'><a href="/setting" style={{ textDecoration: "none" }}>about-us</a> </li>
                    <li className='toplist1'> <a href="/write" style={{ textDecoration: "none" }}>write</a></li>
                    <li className='toplist1'>contact-us</li>
                    <li className='toplist1'><a href="/auth" style={{ textDecoration: "none" }}>login</a></li>
                </ul>
            </div>
            <div className='right'>
                <input style={{ margin: "10px", display: first ? "inline" : "none" }} text="text" placeholder='search your content' />
                <i onClick={search} className=" Right fa-solid fa-magnifying-glass"></i>
                <i className=" Right1 fa-solid fa-user"></i>

            </div>
            <li className='toplist1' onClick={logout}>Logout </li>

        </div>
    )
}
