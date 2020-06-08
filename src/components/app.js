import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons"


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Counter from "./pages/counter";
import Toggle from "./pages/toggle";
import FontSizer from "./pages/font-sizer";
import Align from "./pages/align";
import ShowHide from "./pages/show-hide";
import Clock from "./pages/clock";
import ChangeColor from "./pages/change-color";

library.add(fab,faClock );


export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
            />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/counter" component={Counter} />
              <Route path="/toggle" component={Toggle} />
              <Route path="/font-sizer" component={FontSizer} />
              <Route path="/align" component={Align} />
              <Route path="/show-hide" component={ShowHide} />
              <Route path="/clock" component={Clock} />
              <Route path="/change-color" component={ChangeColor} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
