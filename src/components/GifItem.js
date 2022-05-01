import React from 'react'

export const GifItem = ({media}) => {
  return (
    <div className='item animate__animated animate__fadeIn'>
        <img src={media.gif.url} alt="img"/>
    </div>
  )
}
