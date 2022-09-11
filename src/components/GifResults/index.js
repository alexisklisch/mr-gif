import { GifBox } from "../../components/GifBox"
import ReactLoading from 'react-loading'
import style from "./GifContainer.module.css"


function GifResults({ gifs, loading }){

    return(
        <>
            {
                loading
                    ? <ReactLoading className="loading" type="cylon" color="#eeeeee" height={660} width={320}/>
                    : <section className={`${style.gifsCardContainer} container-1`}>
                        {gifs.map(singleGif => <GifBox src={singleGif.url} alt={singleGif.title} id={singleGif.id} title={singleGif.title} key={singleGif.id}/>)}
                    </section>
            }
        </>
    )
}

export { GifResults }