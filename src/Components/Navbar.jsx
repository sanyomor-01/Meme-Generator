import React from 'react';
import logo from '../assets/troll-face.png'

export default function Navbar() {
    return (
        <div>
          <header>
              <img  className='troll-face' src= {logo} alt="troll face" />
              <h2 className='brand--text' >Meme Generator</h2>
             <h4 className='project--title' >  React Course - Project 3 </h4>
          </header>
        </div>
    )
}
