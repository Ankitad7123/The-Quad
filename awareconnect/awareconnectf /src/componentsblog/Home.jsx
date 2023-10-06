import React, { useState, useEffect } from 'react'
import Header from './Header'
import Post from './Post'
import Sidebar from './Sidebar'
import './Home.css'
import Topbar from './Topbar'


export default function Home() {


    return (
        <div>
            <div className='header'>
                <Topbar />

                <Header />
            </div>
            <div className="home">
                <div className="post2" style={{ flex: 11 }}>
                    <h1 style={{ textAlign: 'center' }}>post</h1>


                    <Post />

                </div>
                <Sidebar />
            </div>

        </div>
    )
}
