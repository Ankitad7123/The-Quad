import React, { useState, useEffect } from 'react'
import './Post.css';
import axios from 'axios'
import { Link } from 'react-router-dom'


export default function Post() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    useEffect(() => {

        fetchapi();

    }, [])
    const fetchapi = async () => {
        await axios.get("http://localhost:3001/post/")
            .then((response) => { setPosts(response.data) })
            .catch((err) => { console.log(err) })
    }

    const deletewritten = async (_id, e) => {
        e.preventDefault();

        await axios.delete(`http://localhost:3001/post/${_id}`)
        fetchapi();


    }
    const updatewritten = async (_id, title, e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/post/${_id}`, { title })
        fetchapi();
    }
    return (
        <div className='post'>

            {posts.map((res) => (
                <>
                    <Link to={`/fullpage/${res._id}`} style={{ textDecoration: "none" }}>
                        <div className="postImage" key={res._id}>
                            <img style={{ width: "900px", height: "500px", borderRadius: "8px", margin: '20px', display: "flex", alignItems: "center" }} src={res.photo} alt='image3' />
                            <div style={{ margin: "20px" }}>
                                <button style={{ fontSize: "30px", margin: "20px" }} onClick={(e) => updatewritten(res._id, res.title, e)} className="edit fa-regular fa-pen-to-square"></button>
                                <button style={{ fontSize: "30px", margin: "20px" }} onClick={(e) => deletewritten(res._id, e)} className="delete fa-solid fa-delete-left"></button>
                            </div>
                        </div>
                        <div className="postInfo" style={{ textAlign: "center" }}>
                            {/* <span className="spam" style={{ fontFamily: "Helvetica", width: "50vw", height: "100px" }}>
                                {res.desc}</span> */}
                            <h2 style={{ fontWeight: "bold", fontSize: "69px", backgroundImage: "url()", fontFamily: "monospace", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} >{res.title}</h2>

                            <h2 style={{ fontWeight: "bold", backgroundColor: "lightgray", width: "300px" }}> written by ~ {res.username}</h2>

                        </div>
                    </Link>
                </>
            ))
            }

        </div >
    )
}
