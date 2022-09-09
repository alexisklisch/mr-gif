import {useEffect, useState} from 'react'
import { fetchGifs } from '../services/getGifs'

export function useGifs ({ keyword }){
    const [gifs, setGifs] = useState([])

    useEffect(() => {
        fetchGifs(keyword).then(gifs => setGifs(gifs))
    },[keyword])

    return { gifs }
}