import React from 'react'
// import Post from './Post'
import './Singlepost.css'

export default function Singlepost() {

    return (
        <div>
            <div className="postImage">
                <img style={{ width: "900px", height: "500px", borderRadius: "8px", margin: '20px', display: "flex", alignItems: "center" }} src='https://e0.pxfuel.com/wallpapers/53/255/desktop-wallpaper-fantasy-game-the-witcher-minimalism-sun-man-the-witcher-minimalist.jpg' alt='image3' />
            </div>
            <div className="postInfo" style={{ textAlign: "center" }}>
                <span style={{ fontFamily: "fantasy" }}>
                    "The Witcher" is a popular fantasy web series based on the book series of the same name by Andrzej Sapkowski. It was also adapted into a successful video game franchise. The show follows Geralt of Rivia, a monster hunter known as a Witcher, as he navigates a world filled with magic, creatures, and political intrigue. The series explores themes of destiny, morality, and the complexities of its characters' lives. With a mix of action, drama, and supernatural elements,
                    "The Witcher" has gained a large fanbase and is known for its intricate storytelling and dark fantasy setting.</span>
                <h2 style={{ fontWeight: "bold" }}>music life</h2>
                <div style={{ margin: "20px" }}>
                    <i style={{ fontSize: "30px", margin: "20px" }} className="edit fa-regular fa-pen-to-square"></i>
                    <i style={{ fontSize: "30px", margin: "20px" }} className="delete fa-solid fa-delete-left"></i>
                </div>
                <h5>1 hour ago</h5>

            </div>
        </div>
    )
}
