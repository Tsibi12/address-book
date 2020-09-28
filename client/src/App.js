import React from 'react';
import { Switch, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import CreateContact from './containers/CreateContact';
import ListContact from './containers/ListContact';
import NavBar from './components/NavBar';
import EditContact from './containers/EditContact';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container" >
        <Switch>
            <Route exact path={["/", "/contacts"]} component={ListContact} />
            <Route exact path="/add" component={CreateContact} />
            <Route exact path="/update/:id" component={EditContact} />
        </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
