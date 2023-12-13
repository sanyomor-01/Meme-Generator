import React from "react"
import memesData from "../memesData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText    : "",
        bottomText : "",
        randomImage : "https://i.imgflip.com/1g8my4.jpg"
    })

    const [allMemeImage, setAllMemeImage] = React.useState(memesData)
 
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme((prevMeme)=> ({
            ...prevMeme, randomImage : url
        }) )
        
    }
    
    return (
        <main>
            <form>
                <div>
                    <label className="form--label">Top text</label>

                    <input 
                        type="text"
                        placeholder="Top text"
                        className="form--input"
                    />
                </div>
                <div>
                    <label className="form--label">Top text</label>
                    <input 
                        type="text"
                        placeholder="Bottom text"
                        className="form--input"
                    />
                </div>
                <button
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </form>
            <img src={meme.randomImage} className="meme--image" />
        </main>
    )
}