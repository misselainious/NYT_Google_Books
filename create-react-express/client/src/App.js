import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Books from "./pages/Books";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
      
          <Route exact path="/" component={Books} />
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} /> */}
      
      </div>
    </Router>
  );
}

export default App;
