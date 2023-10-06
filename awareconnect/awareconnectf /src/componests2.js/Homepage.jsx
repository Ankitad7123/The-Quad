import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Topbar from '../componentsblog/Topbar';
import { data } from './Data';


function Homepage() {
    const navigate = useNavigate();
    const [data1, setData1] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);

    const setLocal = async () => {
        await localStorage.setItem("truth", false);
        navigate("/login");
    }

    const left = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    }

    const right = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }

    useEffect(() => {
        const time = () => {
            setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));

            }, 80000);
        }
        const get = () => {
            setData1(localStorage.getItem("name"))




        }
        get();
        time();
        setCurrentIndex(0);
    }, []);

    return (
        <div>
            {/* <div style={{ width: "100vw", height: "3vh", display: "flex", padding: "30px", position: "fixed", zIndex: "1", borderRadius: "50px", boxShadow: "10px 5px 9px", borderTop: "1px solid black", top: "0" }}>
        //     <div style={{ display: "flex", flexDirection: "row", alignItem: "center", justifyItem: "center", marginLeft: "10px" }}>
        //         <button style={{ width: "120px", height: "40px", fontFamily: "monospace", textAlign: "center", marginLeft: "10px", backgroundImage: "url()", backgroundPosition: "center", backgroundSize: "60px", color: "black", fontSize: "20px", fontWeight: "bold", fontFamily: "-moz-initial", borderRadius: "10px", border: "0.5px solid black" }} >nutrition</button>
        //         <button style={{ width: "120px", height: "40px", fontFamily: "monospace", textAlign: "center", marginLeft: "10px", backgroundImage: "url()", backgroundPosition: "center", backgroundSize: "60px", color: "black", fontSize: "15px", fontWeight: "bold", fontFamily: "monospace", borderRadius: "10px", border: "0.5px solid black" }} > health statistics </button>
        //     </div>
        //     <div>
        //         <h1 style={{ textShadow: "1px 1px 3px black", color: "red", position: "absolute", textAlign: "center", justifyContent: "center", alignItems: "center", bottom: "2.6px", left: "590px", color: "silver" }}>AwareConnect.com</h1>
        //     </div>
        //     <div style={{ display: "flex", flexDirection: "row", alignItem: "center", justifyItem: "center", marginLeft: "800px" }}>


        //         <button style={{ width: "120px", height: "40px", fontFamily: "monospace", textAlign: "center", marginLeft: "10px", backgroundImage: "url()", backgroundPosition: "center", backgroundSize: "60px", color: "black", fontSize: "15px", fontWeight: "bold", fontFamily: "monospace", borderRadius: "10px", border: "0.5px solid black" }} >Excercise </button>
        //         <button style={{ width: "120px", height: "40px", fontFamily: "monospace", textAlign: "center", marginLeft: "10px", backgroundImage: "url()", backgroundPosition: "center", backgroundSize: "60px", color: "red", fontSize: "15px", fontWeight: "bold", fontFamily: "monospace", borderRadius: "10px", border: "0.5px solid black" }} onClick={setLocal}>hello {data1}! logout </button>


        //     </div>
        // </div> */}
            <Topbar />
            <div className="slider" style={{ marginTop: "-35px", width: "100vw", height: "96vh", flex: "1", backgroundColor: "lightgrey", backgroundBlendMode: "darken", opacity: "0.9", borderRadius: "150px", boxShadow: "15px 5px 10px" }}>

                <div style={{ display: "flex", flex: "0.5", border: "1px solid black", borderRadius: "150px", borderBottom: "none", borderRight: "none", borderLeft: "none", marginTop: "33px" }}>
                    <button onClick={left} style={{ opacity: "0.6", cursor: "pointer", fontSize: "25px", backgroundColor: "black", width: "4vw", height: "6vh", borderRadius: "50%", position: "absolute", top: "100px", bottom: "0", margin: "auto", alignItems: "center", display: "flex", textAlign: "center", left: "10px", backgroundPosition: "center" }} className="arrowleft"> <i style={{ textAlign: "center", alignItems: "center", margin: "10px", color: "white" }} className="fa-solid fa-caret-left"></i></button>
                    <img style={{ display: "flex", width: "60vw", height: "85vh", marginTop: "60px", marginLeft: "40px", borderRadius: "50px", width: currentIndex == 2 ? "70vw" : "80vw" }} src={data[currentIndex].img} />
                    <div style={{ display: "flex", flex: "0.4", justifyContent: "center", alignItems: "center", fontFamily: "fantasy", fontWeight: "bold", fontSize: "26px", marginLeft: "60px", width: currentIndex == 2 ? "290px" : "310px", position: "absolute", left: currentIndex == 2 ? "1000px" : "990px", top: "190px", color: currentIndex == 0 ? "black" : "black", textShadow: currentIndex == 0 ? "1px 1px 10px black" : "none" }}>
                        <p>
                            {data[currentIndex].text}
                        </p>

                    </div>
                    <button onClick={right} style={{ opacity: "0.6", cursor: "pointer", fontSize: "25px", backgroundColor: "black", width: "4vw", height: "6vh", borderRadius: "50%", position: "absolute", top: "100px", bottom: "0", margin: "auto", alignItems: "center", display: "flex", textAlign: "center", left: "1370px", backgroundPosition: "center" }} className="arrowright"><i style={{ textAlign: "center", alignItems: "center", margin: "10px", color: "white" }} className="fa-solid fa-caret-right"></i></button>

                </div>
            </div>
            {/* <video autoPlay controls width="900">
                <source src="/stemcell.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video> */}


        </div>
    )
}

export default Homepage