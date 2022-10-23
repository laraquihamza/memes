import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react/cjs/react.production.min';
import Header from './components/Header';
import Welcome from "./components/Welcome";
import SearchBar from './components/SearchBar';
import Carousel from './components/Carousel';
import Body from './components/Body';

function App() {
  return (
    <Fragment>
      <Header/>
      <Welcome/>
      <SearchBar/>
      <Carousel/>
      <Body/>
      </Fragment>
  );
}

export default App;
