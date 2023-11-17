import React from 'react';
const Meme = () =>{
    return(
        <main>
            <div className="form">
                <input type="text" placeholder='top text' />
                <input type="text" placeholder='bottom text' />
                <button className='btn'>Get a new meme image</button>
            </div>
            <div className='meme'>
                <p className='top--text'> Top Text</p>
                <p className='bottom--text'> Bottom Text</p>

            </div>
        </main>
        
    )
}
export default Meme;