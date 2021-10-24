import React from 'react';
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignUpcompany from './components/pages/SignUpcompany';
import Login from './components/pages/Login';
import Forgetpassword from './components/pages/Forgetpassword';
import Resetpassword from './components/pages/Resetpassword';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/Login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-up-company' component={SignUpcompany} />
          <Route path='/Forgetpassword' component={Forgetpassword} />
          <Route path='/Resetpassword' component={Resetpassword} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
