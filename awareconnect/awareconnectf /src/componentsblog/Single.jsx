import React from 'react'
import Sidebar from './Sidebar'
import './Single.css'
import Singlepost from './Singlepost'

export default function Single() {
    return (
        <div className='single'>
            <div className="singlepost">
                <Singlepost />
            </div>

            <div className="side">
                <Sidebar />
            </div>
        </div>
    )
}
