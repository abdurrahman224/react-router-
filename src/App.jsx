import { Outlet } from "react-router";
import "./App.css";
import Nabers from "./components/Nabers/Nabers";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
  
      <Nabers></Nabers>
     
      <Outlet></Outlet>

     <Footer></Footer>
    </>
  );
}

export default App;
