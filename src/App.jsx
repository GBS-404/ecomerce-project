import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header.jsx";
import ProductList from "./components/ProductList.jsx";
import MaleSelection from "./components/MaleSection.jsx";
import FemaleSection from "./components/FemaleSection.jsx";
import Cart from "./components/Cart.jsx";
import "./styles/App.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/male" exact component={MaleSelection} />
        <Route path="/female" exact component={FemaleSection} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
