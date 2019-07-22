import React from 'react';
import './App.css';
import Livro from './Livro'
import TableBootstrap from './TableBootstrap'
import Nav from './Nav'
import {Switch, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Nav />
     <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <TableBootstrap/>
              )}
            />
            <Route
              exact
              path="/:livro?"
              render={props => (
                 <Livro {...props}/>
              )}
            />
          </Switch>
    

    </div>
  );
}

export default App;


 
