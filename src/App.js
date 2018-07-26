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
import configUS from './configUS';
import FloatButton from './components/FloatButton';

class App extends Component {
  constructor(){
    super();
    this.state = {
      config : config,
      language : 'PT'
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    const language = e.target.innerHTML;
    const conf = language === 'PT' ? config : configUS ;
    this.setState({
      language : e.target.innerHTML,
      config : conf
    })
  }

  render() {
    
    return (
      <div>
        <Container>
          <ThirdColum>
            <Profile {...this.state.config.app.profile}/>
          </ThirdColum>
          <TwoThirdColumn>
            <Experience {...this.state.config.app.experience}/>
            <Education {...this.state.config.app.education}/>
          </TwoThirdColumn>
        </Container>
        <Footer {...this.state.config.app.footer}/>
        <FloatButton  language={this.state.language} handleClick = {this.handleClick}/>
      </div>
    );
  }
}

export default App;
