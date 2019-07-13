import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import SaveBooks from "./pages/SaveBooks";
import SearchReviews from "./pages/SearchReviews";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <div class="wrapper">
        <header class="main-head">The header</header>
        <nav class="main-nav">
          <ul>
            <li><a href="">Nav 1</a></li>
            <li><a href="">Nav 2</a></li>
            <li><a href="">Nav 3</a></li>
          </ul>
        </nav>
        <article class="content">
          <h1>Main article area</h1>
          <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
        </article>
        <aside class="side">Sidebar</aside>
        <div class="ad">Advertising</div>
        <footer class="main-footer">The footer</footer>
        {/* </div>
      <div> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={SearchReviews} />
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
