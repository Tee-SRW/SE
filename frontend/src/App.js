import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//  Home
import Home from "./pages/Home";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer/Footer";

//  Login
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
//  Sign-up
import ChooseCreate from "./pages/ChooseCreate";
import SignUp from "./pages/SignUp";
import SignUpcompany from "./pages/SignUpcompany";
import Freelance from "./pages/Freelance";

//  Profile
import Profile from "./pages/Profile";
import Profilefreelance from "./pages/Profilefreelance";
import Profilecompany from "./pages/Profilecompany";
//  EditProfile
import Editprofile from "./pages/Editprofile";
import EditprofileCompany from "./pages/EditprofileCompany";
import EditprofileFreelacne from "./pages/EditprofileFreelance";

//  work
import WorkFreelance from "./pages/WorkFreelance";
import WorkCompany from "./pages/WorkCompany";
//  Create-work
import CreateWorkFreeLance from "./pages/CreateWorkFreeLance";
import CreateWorkCompany from "./pages/createWorkCompany";
//  Editwork
import EditWorkFreelance from "./pages/EditWorkFreelance";
import EditWorkCompany from "./pages/EditWorkCompany";


function App() {
  // const [loggedIn, setLoggedIn] = useState(console.log(false),
  //   //false);

  // // initial value
  // document.cookie.split(';').some((item) => item.trim().startsWith('logedIn=')));

  return (
    <div className="">
      <Router>
        <Navbar />
        <div className="page__content">
          <Switch>
            {/* Home Path*/}
            <Route path="/" exact component={Home} />

            {/* Login Path*/}
            <Route path="/Login" component={Login} />
            <Route path="/Forgetpassword" component={Forgetpassword} />
            <Route path="/Resetpassword" component={Resetpassword} />

            {/* Sign-up Path */}
            <Route path="/ChooseCreate" component={ChooseCreate} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-up-company" component={SignUpcompany} />
            <Route path="/Freelance" component={Freelance} />

            {/* Profile Path*/}
            <Route path="/Profile" component={Profile} />
            <Route path="/Profilefreelance" component={Profilefreelance} />
            <Route path="/Profilecompany" component={Profilecompany} />

            {/* Edit-Profile Path*/}
            <Route path="/Editprofile" component={Editprofile} />
            <Route path="/Editprofilefreelance" component={EditprofileFreelacne} />
            <Route path="/EditprofileCompany" component={EditprofileCompany} />

            {/* Work Path */}
            <Route path="/WorkFreelance" component={WorkFreelance} />
            <Route path="/WorkCompany" component={WorkCompany} />

            {/* Create-Work Path */}
            <Route path="/Createworkfreelance" component={CreateWorkFreeLance} />
            <Route path="/CreateworkCompany" component={CreateWorkCompany} />

            {/* Edit-Work Path */}
            <Route path="/EditWorkFreelance" component={EditWorkFreelance} />
            <Route path="/EditworkCompany" component={EditWorkCompany} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
