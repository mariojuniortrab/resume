import React, { Component } from 'react';
import './App.css';
import 'w3-css/w3.css';
import Container from './components/Container';
import ThirdColum from './components/ThirdColum';
import Profile from './components/Profile';
import Footer from './components/Footer';
import TwoThirdColumn from './components/TwoThirdColumn';
import Experience from './components/Experience';
import Education from './components/Education';
import config from './config';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <ThirdColum>
            <Profile {...config.app.profile}/>
          </ThirdColum>
          <TwoThirdColumn>
            <Experience {...config.app.experience}/>
            <Education {...config.app.education}/>
          </TwoThirdColumn>
        </Container>
        <Footer {...config.app.footer}/>
      </div>
    );
  }
}

export default App;
