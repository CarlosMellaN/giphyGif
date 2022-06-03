import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {


    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //hace que el componente se renderice solo cuando yo quiero, 
    //se le pueden pasar dependencias, es un arreglo
    useEffect(()=>{
       getGifs( category )
            .then(imgs =>{
                setState({
                    data:imgs,
                    loading: false
                })
            })
    }, [ category ])

    return state;// {data:[], loading: true}

}