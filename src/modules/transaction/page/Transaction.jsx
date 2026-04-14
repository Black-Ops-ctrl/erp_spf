// src/modules/transaction/page/Transaction.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../../layout/DashboardLayout";
import Header from "../../../dashboard/components/Header";
import TransactionSubModuleCard from "../components/TransactionSubModuleCard";
import backIcon from "../../../assets/icons/btn_back.png";
import generalLedgerIcon from "../../../assets/icons/maintenance_icons/general_ledger.png";
import cashManagementIcon from "../../../assets/icons/transaction_icons/cash_management.png";
import salesIcon from "../../../assets/icons/maintenance_icons/sales.png";
import accountsReceiveableIcon from "../../../assets/icons/transaction_icons/accounts_receiveable.png";
import accountPayableIcon from "../../../assets/icons/maintenance_icons/account_payable.png";
import purchaseIcon from "../../../assets/icons/maintenance_icons/purcahse.png";
import purchaseModuleIcon from "../../../assets/icons/transaction_icons/purchase_module.png";
import feedMillIcon from "../../../assets/icons/modules/feed_mill.png";
import inventoryIcon from "../../../assets/icons/maintenance_icons/inventory.png";
import fixAssetIcon from "../../../assets/icons/maintenance_icons/fix_asset.png";
import administrationIcon from "../../../assets/icons/maintenance_icons/administration.png";
import hrPayrollIcon from "../../../assets/icons/maintenance_icons/hr_payroll.png";

const subModules = [
  {
    title: "General Ledger",
    icon: generalLedgerIcon,
  },
  {
    title: "Cash Management",
    icon: cashManagementIcon, 
  },
  {
    title: "Accounts Receiveable",
    icon: accountsReceiveableIcon,
  },
  {
    title: "Account Payable",
    icon: accountPayableIcon,
  },
  {
    title: "Purchase",
    icon: purchaseIcon,
  },
  {
    title: "Purchase Module",
    icon: purchaseModuleIcon,
  },
  {
    title: "Feed Mill",
    icon: feedMillIcon, 
  },
  {
    title: "Fix Asset",
    icon: fixAssetIcon,
  },
  {
    title: "Inventory",
    icon: inventoryIcon,
  },
  {
    title: "Sales",
    icon: salesIcon,
  },
  {
    title: "Sales Layer",
    icon: salesIcon,
  },
  {
    title: "Gate Office",
    icon: administrationIcon,
  },
  {
    title: "Production",
    icon: inventoryIcon,
  },
  {
    title: "Layer Production",
    icon: inventoryIcon,
  },
  {
    title: "Imports",
    icon: purchaseIcon,
  },
  {
    title: "HR & Payroll",
    icon: hrPayrollIcon,
  },
  {
    title: "Appraisal",
    icon: hrPayrollIcon,
  },
  {
    title: "Power",
    icon: administrationIcon,
  },
  {
    title: "Plant Maintenance",
    icon: fixAssetIcon,
  },
  {
    title: "Project Management",
    icon: administrationIcon,
  },
];

const Transaction = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };

  const handleSubModuleClick = (subModuleTitle) => {
    console.log(`Clicked on: ${subModuleTitle}`);
    // Here you will navigate to specific sub-module page later
  };

  return (
    <DashboardLayout>
      <Header />

      <div className="px-2 sm:px-2 md:px-4 lg:px-6 mt-4">
        {/* Back Button and Title Section */}
        <div className="flex items-center gap-2 mb-4 animate-slide-in-slow">
          <button
            onClick={handleBackClick}
            className="hover:opacity-80 transition-opacity duration-200 group"
          >
            <img 
              src={backIcon} 
              alt="Back" 
              className="w-7 h-7 object-contain group-hover:-translate-x-1 transition-transform duration-200"
            />
          </button>
          
          <h2 className="text-lg font-[600] font-poppins text-redColor">
            Transaction Module
          </h2>
        </div>

        {/* Sub Modules Grid */}
        <div className="animate-fade-in-up-slow">
          <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-4">
            {subModules.map((mod, index) => (
              <div key={index} onClick={() => handleSubModuleClick(mod.title)}>
                <TransactionSubModuleCard {...mod} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transaction;