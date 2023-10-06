import axios from 'axios'
import React, { useState } from 'react'

export default function Write() {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [photo, setPhoto] = useState("")
    const [username, setUsername] = useState("")
    const [categories, setCategories] = useState("")
    const writesubmit = async () => {
        try {
            await axios.post("http://localhost:3001/post/", { title, desc, photo, username, categories });
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div style={{ display: "flex", alignItem: "center", textAlign: "center", justifyContent: "center", margin: "50px", backgroundColor: "lightyellow", backgroundSize: "500%" }}>
            <form className="writeform">


                <div className='writeformGroup' style={{ display: "flex", flexDirection: "column", margin: "30px" }}>
                    <label htmlFor='file' style={{ fontSize: "60px" }}>
                        <i style={{ cursor: "pointer" }} className="fa-solid fa-image"><h6 style={{ fontSize: "10px", color: "red" }}> add your image</h6></i>

                    </label>
                    <input type="file" id='file' style={{ display: "none" }} />
                    <input type="text" value={photo} onChange={(e) => { setPhoto(e.target.value) }} placeholder="paste your google link of image" style={{ width: "40vw", alignItems: "center", height: "5vh", backgroundColor: "lightgrey", fontSize: "20px", textAlign: "center", border: "none", marginBottom: "10px" }} />

                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} placeholder="Title of your blog" style={{ width: "40vw", alignItems: "center", height: "5vh", backgroundColor: "lightgrey", fontSize: "20px", textAlign: "center", border: "none" }} />

                </div>
                <div className="writeformGroup">
                    <textarea name="textarea" value={desc} onChange={(e) => { setDesc(e.target.value) }} id="textarea" cols="50" rows="10" placeholder='Tale your story.......' style={{ width: "900px", height: "500px", backgroundColor: "lightgray", textAlign: "center", alignContent: "center", fontSize: "30px", border: "none" }}></textarea>
                    <input type="text" value={categories} onChange={(e) => { setCategories(e.target.value) }} placeholder="category" style={{ width: "40vw", alignItems: "center", height: "5vh", backgroundColor: "lightgrey", fontSize: "20px", textAlign: "center", border: "none", marginBottom: "10px" }} />
                    <input type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="username" style={{ width: "20vw", alignItems: "center", height: "5vh", backgroundColor: "lightgrey", fontSize: "20px", textAlign: "center", border: "none", marginBottom: "10px", marginLeft: "8px" }} />
                </div>
                <button className="writesubmit" onClick={writesubmit} style={{ width: "70px", height: "40px", fontFamily: "fantasy", ":hover": { backgroundColor: "red", } }}>publish</button>
            </form>

        </div >
    )
}
