import {useEffect, useState} from 'react'
import { fetchGifs } from '../services/getGifs'

export function useGifs ({ keyword }){
    const [gifs, setGifs] = useState([])
    const [ loading, setLoading ] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetchGifs(keyword)
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    },[keyword])

    return { gifs, loading }
}