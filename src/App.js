import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";



function App() {
  return (
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element = { <Home></Home> }/>
          <Route path="/coins" element = { <Coins></Coins> }/>
          <Route path="/exchanges" element = { <Exchanges></Exchanges> }/>
          <Route path="/coin/:id" element = { <CoinDetails></CoinDetails> }/>
        </Routes>
        <Footer></Footer>
      </Router>
  );
}

export default App;
