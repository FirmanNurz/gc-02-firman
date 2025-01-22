import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import LoginSection from "./components/LoginSection";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";
import NewProduct from "./components/NewProduct";
import UpdateSection from "./components/UpdateSection";
import CategorySection from "./components/CategorySection"
import NewUser from "./components/NewUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <>
        {/* Preloader */}
        <Preloader/>
        {/* End Preloader */}
        {/* Navbar */}
        <Navbar/>
        {/* End Navbar */}
        {/* Login Section */}
        <LoginSection/>
        {/* End Login Section */}
        {/* Home Section */}
        <section className="container-fluid" id="home-section">
          <div className="row">
            {/* Sidebar */}
            <Sidebar/>
            {/* End Sidebar */}
            {/* Product Section */}
            <Product/>
            {/* End Product Section */}
            {/* New Product Section */}
            <NewProduct/>
            {/* End New Product Section */}
            {/* Update Section */}
            <UpdateSection/>
            {/* End Update Section */}
            {/* Category Section */}
            <CategorySection />
            {/* End Category Section */}
            {/* New User Section */}
            <NewUser/>
            {/* End New User Section */}
          </div>
        </section>
        {/* End Home Section */}
      </>
    </>
  );
}

export default App;
