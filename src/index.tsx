import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import { Home, Projects, Resume, Connect } from './components';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>

        <Route exact path='/'>
          <Home  title={'Mike Kaiser'} />
        </Route>

        <Route path='/resume'>
          <Resume />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/connect'>
          <Connect />
        </Route>
        
      </Switch>
    </Router>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
