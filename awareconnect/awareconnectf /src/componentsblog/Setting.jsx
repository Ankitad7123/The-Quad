import React from 'react';
import './Setting.css'
import Sidebar from './Sidebar';

export default function Setting() {
    return (
        <div className='settings'>
            <button style={{ alignItem: "center", width: "90px", height: "50px", backgroundColor: "lightblue", borderRadius: "5px", fontFamily: "fantasy", left: "300px" }}>delete account</button>
            <div className="setttingwrraper" >
                <form style={{ display: "flex", flexDirection: "column", width: "350px", textAlign: "center", justifyContent: "center", alignContent: "center", margin: "50px", left: "350px", position: "absolute", alignItems: "center" }} >
                    <label style={{ backgroundColor: "black", color: "white", width: "100px", borderRadius: "5px", height: "35px", fontFamily: "fantasy" }}>
                        username
                    </label>
                    <input style={{ backgroundColor: "lightgrey", width: "450px", height: "30px", textAlign: "center", borderRadius: "5px", margin: "30px", border: "none", borderBottom: "1px solid black", boxShadow: "0px 0px 3px grey" }} type="text" placeholder='username' />
                    <label style={{ backgroundColor: "black", color: "white", width: "100px", borderRadius: "5px", height: "35px", fontFamily: "fantasy" }}>
                        password
                    </label>
                    <input style={{ backgroundColor: "lightgrey", width: "450px", height: "30px", textAlign: "center", borderRadius: "5px", margin: "30px", border: "none", borderBottom: "1px solid black", boxShadow: "0px 0px 3px grey" }} type="password" placeholder='password' />
                    <label style={{ backgroundColor: "black", color: "white", borderRadius: "5px", width: "100px", fontFamily: "fantasy" }}>
                        confirm password
                    </label>
                    <input style={{ backgroundColor: "lightgrey", width: "450px", height: "30px", textAlign: "center", borderRadius: "5px", margin: "50px", border: "none", borderBottom: "1px solid black", boxShadow: "0px 0px 3px grey" }} type="password" placeholder=' confirm password' />
                    <button style={{ alignItem: "center", width: "90px", height: "30px", backgroundColor: "lightblue", borderRadius: "5px", fontFamily: "fantasy" }}>update</button>
                </form>
            </div>
            <div className="sidebar3"><Sidebar /></div>
        </div>
    )
}
