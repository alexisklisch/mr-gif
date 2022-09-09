import { Route } from 'wouter'
import styles from './App.module.css';
import { Header } from './components/Header';
import { GifContainer } from './components/GifContainer';
import { GifInformation } from './pages/GifInformation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';


function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <main className='main'>
        <Route
          component={ Home }
          path="/"
        />
        <Route
          component={ GifContainer }
          path="/search/:keyword"
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
