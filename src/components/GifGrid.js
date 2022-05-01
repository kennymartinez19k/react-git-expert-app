import React from 'react'
import { useFecthGif } from '../hooks/useFecthGif'
import '../styles/gif.css'
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
  const {data: images, loading} = useFecthGif(category)

  return (
    <div>
        {loading ? "Cargando" : "termino la carga"}
        <h3>{category}</h3>
        <div className="list-images">
            {
                images.map((gif, idx) => (
                   <GifItem key={idx} {...gif}/>
                ))
            }
        </div>
    </div>
    
  )
}
