// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/pages/Dashboard";
import Maintenance from "../modules/maintenance/page/Maintenance";
import Transaction from "../modules/transaction/page/Transaction";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/transaction" element={<Transaction />} />
    </Routes>
  );
};

export default AppRoutes;