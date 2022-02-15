import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Thankyou from "./components/Thankyou";

function App() {
  const [cart, setcart] = useState([]);
  const [show, setshow] = useState(true);

  const handlclk = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setcart([...cart, item]);
  };

  const handlechnge = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount == 0) arr[ind].amount = 1;
    setcart([...arr]);
  };

  useEffect(() => {
    console.log("cart chnge");
  }, [cart]);

  return (
    <div className="App">
      <Router>

      <Header setshow={setshow} size={cart.length} />


        <Routes>

          <Route path="" element={<Home/>}/>

          <Route path="/thankyou" element={<Thankyou/>}/>

          <Route path="/menu" element={<Menu handlclk={handlclk} />}/>
          <Route path="/cart" element={<Cart cart={cart} setcart={setcart} handlechnge={handlechnge} />}/>
      

      


        </Routes>

      
      </Router>

      {/* <Home/> */}

    </div>
  );
}

export default App;
