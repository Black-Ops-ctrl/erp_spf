// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/pages/Dashboard";
import Maintenance from "../modules/maintenance/page/Maintenance";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/maintenance" element={<Maintenance />} />
    </Routes>
  );
};

export default AppRoutes;