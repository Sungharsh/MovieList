import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MoviesList from "../components/movies/movies";
//import Counters from '../components/counters';
import Customers from "./../components/customers";
import Rentals from "./../components/rentals";
import NotFound from "./../components/notFound";
import NavBar from "../components/navBar";
import MovieForm from "./../components/movieForm";
import LoginForm from "./../components/loginForm";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container-fluid bg-light">
          <Switch>
            <Route path="/login" component={LoginForm} />
            <Route path="/movieslist/:id" component={MovieForm} />
            <Route path="/movieslist" component={MoviesList}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-Found" component={NotFound}></Route>
            <Redirect from="/" exact to="/movieslist" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
