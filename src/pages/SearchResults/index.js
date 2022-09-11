import { GifResults } from "../../components/GifResults"
import { useGifs } from "../../hooks/useGifs"

function SearchResults(props){
    const { keyword } = props.params
    const { gifs, loading } = useGifs({ keyword })

    return(
        <GifResults gifs={ gifs } loading={loading} />
    )
}

export { SearchResults }