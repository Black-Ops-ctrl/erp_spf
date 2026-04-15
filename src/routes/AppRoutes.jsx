// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Dashboard from "../modules/dashboard/pages/Dashboard";
import Maintenance from "../modules/maintenance/page/Maintenance";
import Transaction from "../modules/transaction/page/Transaction";
import FeedMill from "../modules/feed_mill/page/FeedMill"; 
import Plant from "../modules/plant/page/Plant"; 
import Shops from "../modules/shops/page/Shops"; 
import Reports from "../modules/reports/page/Reports";
import Transport from "../modules/transport/page/Transport";
// import Utilities from "../modules/utilities/page/Utilities";
import Auditors from "../modules/auditors/page/Auditors";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/transaction" element={<Transaction />} />
      <Route path="/feedMill" element={<FeedMill />} />
      <Route path="/plant" element={<Plant />} />
      <Route path="/shops" element={<Shops />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/transport" element={<Transport />} />
      {/* <Route path="/utilities" element={<Utilities />} /> */}
      <Route path="/auditors" element={<Auditors />} />

    </Routes>
  );
};

export default AppRoutes;