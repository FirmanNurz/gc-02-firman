import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import MainDetail from "./components/MainDetailProduct";
import Section from "./components/Section";

function App() {
  const [page, setPage] = useState("Detail");
  return (
    <>
      <Header />
      {/* Hero Section */}
      <Section />
      {/* Menu Section */}
      {page === "Home" && <Main setPage={setPage} />}
      {page === "Detail" && <MainDetail setPage={setPage} />}
      <Footer />
    </>
  );
}
export default App;
