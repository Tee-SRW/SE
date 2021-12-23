import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Services";
import ChooseCreate from "./pages/ChooseCreate";
import SignUp from "./pages/SignUp";
import SignUpcompany from "./pages/SignUpcompany";
import Login from "./pages/Login";
import Forgetpassword from "./pages/Forgetpassword";
import Resetpassword from "./pages/Resetpassword";
import Editprofile from "./pages/Editprofile";
import Profile from "./pages/Profile";
import EditprofileCompany from "./pages/EditprofileCompany";
import EditprofileFreelacne from "./pages/EditprofileFreelance";
import Freelance from "./pages/Freelance";
import CreateWorkFreeLance from "./pages/CreateWorkFreeLance";
import CreateWorkCompany from "./components/Create-work/create-work-company";
import EditWorkFreelance from "./components/Work/Edit-work-freelance";
import EditWorkCompany from "./components/Work/Edit-work-company";
import Profilefreelance from "./pages/Profilefreelance";
import Profilecompany from "./pages/Profilecompany";
import WorkFreelance from "./pages/WorkFreelance";
import WorkCompany from "./pages/WorkCompany";

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
            <Route
              path="/Editprofilefreelance"
              component={EditprofileFreelacne}
            />
            <Route path="/EditprofileCompany" component={EditprofileCompany} />
            <Route path="/WorkFreelance" component={WorkFreelance} />
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
            {/* Tier 2 */}
            <Route path="/WorkFreelance" component={WorkFreelance} />
            {/* Tier 2 */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
