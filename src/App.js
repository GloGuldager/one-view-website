import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
// import logo from './OneViewLogo.png';
import './App.css';
import SearchReviews from "./pages/SearchReviews";

// import SaveBooks from "./pages/SaveBooks";
// import SearchBooks from "./pages/SearchBooks";
// import NoMatch from "./pages/NoMatch";
// import Nav from "./components/Nav";
// import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/" component={SearchReviews} />
          {/* <Route exact path="/saved" component={SaveBooks} /> */}
          {/* <Route exact path="/saved/:id" component={SaveBooks} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
