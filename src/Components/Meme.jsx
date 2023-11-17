import React from 'react';
import memesData from '../memesData';



const Meme = () =>{
    const [memeImage, setMemeImage] = React.useState("")


     function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }
    return(
        <main>
            <div className="form">
                <input type="text" placeholder='top text' />
                <input type="text" placeholder='bottom text' />
                <button className='btn' onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src="{memeImage}" alt=""  className='meme--image'/>
        </main>
        
    )
}
export default Meme;