import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ReactGA from 'react-ga4';

ReactGA.initialize('G-616GVPE5NN');
ReactGA.send('pageview');

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
