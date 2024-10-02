import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard_navbar from '../components/Dashboard_navbar';
import '../static/Layout.css'; 

function Layout() {
  return (
    <div className="layout-container">
      <div className="dashboard-navbar">
        <Dashboard_navbar />
      </div>
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
