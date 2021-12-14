import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import ChooseCreate from "./components/pages/ChooseCreate";
import SignUp from "./components/pages/SignUp";
import SignUpcompany from "./components/pages/SignUpcompany";
import Login from "./components/pages/Login";
import Forgetpassword from "./components/pages/Forgetpassword";
import Resetpassword from "./components/pages/Resetpassword";
import Editprofile from "./components/pages/Editprofile";
import Profile from "./components/pages/Profile";
import EditprofileCompany from "./components/pages/EditprofileCompany";
import EditprofileFreelacne from "./components/pages/EditprofileFreelance";
import Freelance from "./components/pages/Freelance";
import CreateWorkFreeLance from "./components/pages/CreateWorkFreeLance";
import CreateWorkCompany from "./components/Create-work/create-work-company";
import EditWorkFreelance from "./components/Work/Edit-work-freelance";
import EditWorkCompany from "./components/Work/Edit-work-company";
import Profilefreelance from "./components/pages/Profilefreelance";
import Profilecompany from "./components/pages/Profilecompany";
import WorkFreelance from "./components/pages/WorkFreelance";
import WorkCompany from "./components/pages/WorkCompany";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    //Test

    false
  );

  // initial value
  //document.cookie.split(';').some((item) => item.trim().startsWith('logedIn=')));
  return (
    <>
      <Router>
        <Navbar {...{ loggedIn }} />
        <div className="page__content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/Login" component={Login} />
            {/* Tier 1 */}
            <Route path="/Forgetpassword" component={Forgetpassword} />
            {/* Tier 1 */}
            <Route path="/Resetpassword" component={Resetpassword} />
            {/* Tier 1 */}
            <Route path="/ChooseCreate" component={ChooseCreate} />
            {/* Tier 1 */}
            <Route path="/sign-up" component={SignUp} />
            {/* Tier 1 */}
            <Route path="/sign-up-company" component={SignUpcompany} />
            {/* Tier 1 */}
            <Route path="/Freelance" component={Freelance} />
            {/* Tier 2 */}
            <Route path="/Profile" component={Profile} />
            {/* Tier 2 */}
            <Route path="/Editprofile" component={Editprofile} />
            {/* Tier 2 */}
            <Route path="/Profilefreelance" component={Profilefreelance} />
            <Route path="/Editprofilefreelance" component={EditprofileFreelacne} />
            <Route path="/EditprofileCompany" component={EditprofileCompany} />
            <Route path="/Freelance" component={Freelance} />
            <Route path="/Createworkfreelance" component={CreateWorkFreeLance} />
            <Route path="/CreateworkCompany" component={CreateWorkCompany} />
            <Route path="/EditWorkFreelance" component={EditWorkFreelance} />
            <Route path="/EditworkCompany" component={EditWorkCompany} />
            <Route path="/Profilecompany" component={Profilecompany} />
            {/* Tier 2 */}
            <Route path="/EditprofileCompany" component={EditprofileCompany} />
            {/* Tier 2 */}
            <Route path="/CreateworkCompany" component={CreateWorkCompany} />
            {/* Tier 2 */}
            <Route path="/EditworkCompany" component={EditWorkCompany} />
            {/* Tier 2 */}
            <Route path="/WorkCompany" component={WorkCompany} />
            {/* Tier 2 */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
