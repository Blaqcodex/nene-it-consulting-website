import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "../Website";
import Login from "../pages/admin/Login";
import Dashboard from "../pages/admin/Dashboard";
import Contacts from "../pages/admin/Contacts";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/admin/login" element={<Login />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />

        <Route path="/admin/contacts" element={<Contacts />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;