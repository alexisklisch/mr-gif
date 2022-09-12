import {useContext, useEffect, useState} from 'react'
import GifsContext from '../context/GifsContext'
import { fetchGifs } from '../services/getGifs'

export function useGifs ({ keyword }){
    const [ loading, setLoading ] = useState(false)
    //const [ gifs, setGifs ] = useState([])
    const { gifs, setGifs } = useContext(GifsContext)

    useEffect(() => {
        setLoading(true)

        fetchGifs(keyword)
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
            })
    },[keyword, setGifs])

    return { gifs, loading }
}