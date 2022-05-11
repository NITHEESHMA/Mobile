import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Contact from "./component/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Productdetail from "./component/Productdetail";
import Cartpage from "./component/Cartpage";
import Checkout from "./component/Checkout";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />

          <Route path="/contact" component={Contact} />
          <Route path="/product" component={Product} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/cart" component={Cartpage} />
          <Route path="/products/:id" component={Productdetail} />
          <Redirect path="/" />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
