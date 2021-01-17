import { Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Todo from "./components/todo/Todo";

function App() {
  return (
    <>
      <Header />
      <Route path="/" exact={true} component={Home} />
      <Route path="/login" exact={true} component={Login} />
      <Route path="/signup" exact={true} component={Signup} />
      <Route path="/demo" exact={true} component={Todo} />
      <Footer />
    </>
  );
}

export default App;
