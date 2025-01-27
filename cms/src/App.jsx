import { BrowserRouter, Routes, Route } from "react-router";
import BaseLayout from "./views/BaseLayout";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import AddCuisine from "./views/AddCuisine";
import EditCuisine from "./views/EditCuisine";
import UploadImage from "./views/UploadImage";
import Categories from "./views/Categories";
import AddUser from "./views/AddUser";
import CuisineDetail from "./views/CuisineDetail";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<AddUser />} />
          <Route element={<BaseLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cuisines/add" element={<AddCuisine />} />
            <Route path="/cuisines/:id" element={<CuisineDetail />} />
            <Route path="/cuisines/:id/edit" element={<EditCuisine />} />
            <Route path="/cuisines/:id/upload" element={<UploadImage />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
