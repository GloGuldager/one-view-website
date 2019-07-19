import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import SaveResults from "./pages/SaveResults";
import SearchReviews from "./pages/SearchReviews";
// import Results from "./pages/Results";
import Nav from "./components/Nav";
import Footer from "./components/Footer"
import Login from "./pages/Login"
import "./index.css";


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchReviews} />
          {/* <Route exact path="/results" component={Results} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/saved" component={SaveResults} />
          <Route exact path="/saved/:id" component={SaveResults} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
