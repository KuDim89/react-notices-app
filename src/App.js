import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./component/Navbar";
import {Alert} from "./component/Alert";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container pt-4">
        <Alert />
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/about'} component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
