// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import Maintenance from "../modules/maintenance/page/Maintenance";
import Transaction from "../modules/transaction/page/Transaction";
import FeedMill from "../modules/feed_mill/page/FeedMill"; 
import Plant from "../modules/plant/page/Plant"; 

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/feedMill" element={<FeedMill />} />
      <Route path="/plant" element={<Plant />} />
    </Routes>
  );
};

export default AppRoutes;