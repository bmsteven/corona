import React from "react";

//dependencies
import { Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

//pages
import CoronaHome from "./pages/CoronaHome";
import AllCountries from "./pages/allCountries";

//styles
import "./styles/styles.css";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/'>
          <CoronaHome />
        </Route>
        <Route exact path='/all-countries' component={AllCountries} />
        <Route>
          <div className='container'>
            <h1>Error 404</h1>
            <p>Ukurasa huu haupo</p>
            <Link to='/'>Rud nyumbani</Link>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
