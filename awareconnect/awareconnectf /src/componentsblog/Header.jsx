import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className='header'>
            <div className='span'>
                <span className='spansm'>SocialAware</span>
                <span className='spansm'> &amp;</span>
            </div>


            <div className='img'>

                <span className='spanlg' >blogs</span>
                <img src='https://assets-global.website-files.com/5f3a33a074c2eb9e90f16437/60f687b22eef030ccf366902_How-to-Start-Your-Own-Blog-That-Generates-Income.jpeg' alt='blogimage' />
            </div>

        </div>
    )
}
