import React, { Component,Fragment } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import SearchBar from './components/SearchBar';
import Body from './components/Body';
import BodyMeme from './components/BodyMeme';
class MemePage extends Component {
    render() {
        return (
            <Fragment>
              <Header/>
              <Welcome/>
              <SearchBar/>
              <BodyMeme/>
              </Fragment>
          );
            }
}

export default MemePage;