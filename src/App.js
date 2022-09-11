import { Route } from 'wouter'
import styles from './App.module.css';
import { Header } from './components/Header';
import { GifInformation } from './pages/GifInformation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { SearchForm } from './components/SearchForm';
import { SearchResults } from './pages/SearchResults';


function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <SearchForm/>
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
      <Footer/>
    </div>
  );
}

export default App;
