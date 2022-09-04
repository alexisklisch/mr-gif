import {useEffect, useState} from 'react'
import { fetchGifs } from './services/getGifs'
import styles from './App.module.css';
import { Header } from './Header';
import { GifContainer } from './GifContainer';


function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    fetchGifs('masturbate').then(gifs => setGifs(gifs))
  },[])

  return (
    <div className={styles.App}>
      <Header/>
      <main className='main'>
        <GifContainer listGifmap={gifs}/>
      </main>
    </div>
  );
}

export default App;
