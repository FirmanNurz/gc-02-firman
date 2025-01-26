import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./views/HomePage";
import BaseLayout from "./views/BaseLayout";
import MainDetail from "./views/MainDetailProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<MainDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}