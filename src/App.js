import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/home/Landing";
import Movie from "./components/home/Movie";
import Slider from "./components/home/Slider";
import Banner from "./components/home/Banner";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Navbar />
          <Route exact path="/movie/:id" component={Banner} />
          <Route exact path="/favorites/" component={Banner} />
          <Route exact path="/" component={Slider} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/movie/:id" component={Movie} />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export default App;
