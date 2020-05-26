import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";


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
              <Route path="/about-me" component={About} />
              <Route path="/contact-me" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route exact path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
