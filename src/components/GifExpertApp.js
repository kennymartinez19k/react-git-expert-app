import React, { useState } from 'react';
import '../index.css'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GitExpertApp = () => {

    const [categories, setCategories] = useState([])

    return(
        <div>
            <h1>GitExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>

                {
                   categories.map(category => (
                       <GifGrid key={category} category={category}/>
                   ))
                }
        </div>
    )
}