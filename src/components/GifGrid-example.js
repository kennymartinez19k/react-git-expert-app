import React, { useEffect, useState } from 'react'
import { GetGif } from '../Functions/GetGifs';
import '../styles/gif.css'
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
    const [gifs, setGifs] = useState([]);

    useEffect( () => {
        GetGif(category).then(
            setGifs
        )
    }, [category])
    

  return (
    <div>
        <h3>{category}</h3>
        <div className="list-images">
            {
                gifs.map((gif, idx) => (
                   <GifItem key={idx} {...gif}/>
                ))
            }
        </div>
    </div>
    
  )
}
