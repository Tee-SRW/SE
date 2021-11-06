import React , {useState}from 'react';
import Navbar from './components/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ChooseCreate from './components/pages/ChooseCreate';
import SignUp from './components/pages/SignUp';
import SignUpcompany from './components/pages/SignUpcompany';
import Login from './components/pages/Login';
import Forgetpassword from './components/pages/Forgetpassword';
import Resetpassword from './components/pages/Resetpassword';
import Editprofile from './components/pages/Editprofile';
import Profile from './components/pages/Profile';
function App() {
  const [loggedIn, setLoggedIn] = useState(
    //Test
    !true);

    // initial value
    //document.cookie.split(';').some((item) => item.trim().startsWith('logedIn=')));

  return (
    <>
      <Router>
        <Navbar {...{loggedIn}}/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/ChooseCreate' component={ChooseCreate} />
          <Route path='/Login' component={Login} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/sign-up-company' component={SignUpcompany} />
          <Route path='/Forgetpassword' component={Forgetpassword} />
          <Route path='/Resetpassword' component={Resetpassword} />
          <Route path='/Editprofile' component={Editprofile} />
          <Route path='/Profile' component={Profile} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
