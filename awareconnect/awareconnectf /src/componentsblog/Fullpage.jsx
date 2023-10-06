import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Fullpage() {
    const [post1, setPost1] = useState([])
    const [post, setPost] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        const fetch = async () => {
            try {
                await axios.get(`http://localhost:3001/post/${id}`)
                    .then((res) => { setPost1(res.data); console.log(post); })
                    .catch((err) => { console.log(err) })
            } catch (error) {
                console.log(error);
            }
        }
        fetch();
        console.log(post1)
    }, [])
    // useEffect(() => {
    //     const result = post1.find(res => res._id === Number(id));
    //     setPost(result);
    //     console.log(post)
    // }, [id, post1])
    return (
        <div style={{ backgroundColor: "silver", width: "100vw", height: "100vh" }}>
            <div className="postImage" key={post1.id} >
                <img style={{ diaplay: "flex", width: "700px", height: "360px", borderRadius: "8px", margin: '20px', display: "flex", alignItems: "center", justifyContent: "space-around", alignContent: "center", marginLeft: "350px" }} src={post1.photo} alt='image3' />
                <div style={{ margin: "20px" }}>
                    {/* <button style={{ fontSize: "30px", margin: "20px" }} onClick={(e) => updatewritten(res._id, res.title, e)} className="edit fa-regular fa-pen-to-square"></button> */}
                    {/* <button style={{ fontSize: "30px", margin: "20px" }} onClick={(e) => deletewritten(res._id, e)} className="delete fa-solid fa-delete-left"></button> */}
                </div>
            </div>
            <div className="postInfo" style={{ textAlign: "center" }}>
                <span className="spam" style={{ fontFamily: "monospace", width: "50vw", height: "100px", fontSize: "15px" }}>
                    {post1.desc}</span>
                <h2 style={{ fontWeight: "bold", fontFamily: "cursive", fontSize: "7vh", color: "crimson" }} >{post1.title}</h2>
                <h5>{new Date(post1.createdAt).toDateString()}</h5>
                <h5>{new Date(post1.createdAt).toLocaleTimeString()}</h5>
                <h2 style={{ fontWeight: "bold", backgroundColor: "", width: "300px", fontFamily: "fantasy" }}> -  written by ~ {post1.username}</h2>

            </div>
        </div>)

}

export default Fullpage