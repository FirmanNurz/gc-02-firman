import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router";


export default function BaseLayout() {
  return (
    <>
      <div className="p-5 min-h-screen">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
