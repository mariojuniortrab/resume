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
import data from './data';

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <ThirdColum>
            <Profile {...data.app.profile}/>
          </ThirdColum>
          <TwoThirdColumn>
            <Experience {...data.app.experience}/>
            <Education {...data.app.education}/>
          </TwoThirdColumn>
        </Container>
        <Footer {...data.app.footer}/>
      </div>
    );
  }
}

export default App;
