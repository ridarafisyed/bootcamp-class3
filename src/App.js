import React from 'react';
import logo from './logo.svg';
import './App.css';

//import { green } from '@material-ui/core/colors';
import FacebookIcon from '@material-ui/icons/Facebook';
//import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function App({name,profession, app_number}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{name}</h1>
        <p>
          I'm {profession} and this is my {app_number}rd application using React. 
        </p>
        <p>
        Contact: 
        <a
          className="App-link"
          href="https://www.linkedin.com/in/ridarafisyed/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon />
        </a>

         <a
          className="App-link"
          href="https://www.facebook.com/ridarsyed"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-facebook"> </i>
        </a>
        </p>
        <Button variant="contained" color="primary">
        View Profile
      </Button>
      </header>
    </div>
  );
}

export default App;
