import React, { useState } from 'react';
import './Sidebar.css'


export default function Sidebar() {
    const [first, setFirst] = useState(false);

    const aboutme = () => {
        setFirst(current => !current);

    }
    return (
        <div className='sidebar' style={{ border: first ? "1px solid black" : "0px solid black", position: "absolute", right: first ? "380px" : "1px", backgroundColor: first ? "lightgray" : "white", borderRadius: first ? "7px" : "none", boxShadow: first ? "5px 5px 35px black" : "none", zIndex: first ? "5" : "1", width: first ? "710px" : "460px" }} >
            <div className="aboutus" style={{ borderLeft: "2px", borderColor: "black" }}>

                <h2>About us!</h2>
                <img className="img2" src='https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png' alt='immg' />

                <button onClick={aboutme} style={{ width: "90px", height: "40px", marginBottom: "20px", fontFamily: "fantasy" }}>{first ? "close" : "About us!"}</button>
                <ul>
                    <div style={{ display: "flex", textAlign: "center", marginBottom: "20px", alignContent: "center", justifyContent: "space-evenly", margineTop: "18px" }}>
                        <i className="topicon fa-brands fa-instagram"></i>
                        <i className="topicon fa-brands fa-twitter"></i>
                        <i className="topicon fa-regular fa-envelope"></i></div>
                </ul>

            </div>
            {
                first ? (
                    <div style={{ width: "50vw", }} >
                        <span style={{ fontSize: "20px", fontFamily: "monospace", backgroundColor: 'lightgrey', color: 'black', textAlign: "center" }}>
                            Hey, I'm Ankit dubey! I thrive on all things tech, from the latest gadgets to cutting-edge innovations.
                            When I'm not immersed in tech, I'm making strategic moves on a chessboard – it's my ultimate mental workout.
                            And when it's time to unwind, you'll find me lost in the world of movies, appreciating the storytelling and artistry.
                            Tech, chess, and movies – that's the essence of who I am.
                        </span>
                        <ul style={{ color: 'red', fontFamily: "fantasy", display: "flex", marginTop: "50px", marginBottom: "20px" }}>
                            <li style={{ marginRight: "20px", backgroundColor: "white", color: "black", borderRadius: "10px", fontWeight: "bold" }}> sports</li>
                            <li style={{ marginRight: "20px", backgroundColor: "white", color: "black", borderRadius: "10px", fontWeight: "bold" }}> tech </li>
                            <li style={{ marginRight: "20px", backgroundColor: "black", color: "white", borderRadius: "10px", fontWeight: "bold" }}> geopolitics</li>
                            <li style={{ marginRight: "20px", backgroundColor: "black", color: "white", borderRadius: "10px", fontWeight: "bold" }}> chess</li>
                        </ul>


                    </div>
                ) : (
                    <>
                    </>
                )
            }
        </div>
    )
}
