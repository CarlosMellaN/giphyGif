//import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => {
    //data:images se renombro a images porque son images
    const { data:images, loading } = useFetchGifs( category );
    return (
        <>
            <h3 className='animate__animated animate__fadeInDown'>{ category }</h3>
            {loading && <p className='animate__animated animate__fadeInDown'>Loading</p>}
            <div className='card-grid'>
                {images.map(img =>(
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
    //{...img} le manda todas las propiedas con los ...
}
