import React from "react";

//dependencies
import { Switch, Route } from "react-router-dom";

//pages
// import Home from "./pages/Home"
import CoronaHome from "./pages/CoronaHome"
import AllCountries from "./pages/allCountries"
// import Corona from "./pages/Corona";
// import NavBar from "./components/NavBar"
// import Footer from "./components/Footer"

//styles
import "./styles/styles.css";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <CoronaHome/>
        </Route>
        <Route exact path='/all-countries' component={AllCountries} />
        <Route>
          <div className='container'>
            <h1>Error 404</h1>
            <p>Page not found</p>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
