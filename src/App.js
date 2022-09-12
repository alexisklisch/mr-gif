import { Route } from 'wouter'
import { Header } from './components/Header';
import { GifInformation } from './pages/GifInformation';
import { Home } from './pages/Home';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './pages/SearchResults';
import { Footer } from './components/Footer';
import styles from './App.module.css';
import { GifsContext } from './context/GifsContext';


function App() {
  return (
      <div className={styles.App}>
        <Header/>
        <SearchForm/>
        <GifsContext>
          <main className='main'>
            <Route
              component={ Home }
              path="/"
            />
            <Route
              component={ SearchResults }
              path="/search/:keyword"
            />
            <Route
              component={ GifInformation }
              path="/gif/:id"
            />
          </main>
        </GifsContext>
        <Footer/>
      </div>
  );
}

export default App;
