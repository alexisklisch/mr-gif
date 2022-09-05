import {Link, Route} from 'wouter'
import styles from './App.module.css';
import { Header } from './components/Header';
import { GifContainer } from './components/GifContainer';
import { GifInformation } from './components/GifInformation';
import { Footer } from './components/Footer';


function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.linksContainer}>
        <Link to="/gif/buenos aires">Buenos Aires</Link>
        <Link to="/gif/porto">Porto</Link>
        <Link to="/gif/wyoming">Wyoming</Link>
      </div>
      <main className='main'>
        <Route
          component={ GifContainer }
          path="/collection/:keyword"
        />
        <Route
          component={ GifInformation }
          path="/gif/:id"
        />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
