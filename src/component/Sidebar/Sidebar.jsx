import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  function handleClick(e) {
    console.log("Clicked Title", e);
  }

  return (
    <div class="sidebar h-full py-5 d-flex flex-column g-0">
      <div class="row mb-5 branding-container">
        <h5 class="text-center brand-name" onClick={(e) => handleClick(e)}>
          Medico Sales
        </h5>
      </div>

      <div className="sidebar-1">
        <div class="row nav-links">
          <ul>
            <li class="nav-link active">
              <i class="bx bxs-grid-alt me-3"></i>
              <a href="#">Dashboard</a>
            </li>
            <li class="nav-link">
              <i class="bx bx-test-tube me-3"></i>
              <a href="#">Labtest</a>
            </li>
            <li class="nav-link">
              <i class="bx bxs-calendar-plus me-3"></i>
              <a href="#">Appointment</a>
            </li>
            <li class="nav-link">
              <i class="bx bxs-shopping-bags me-3"></i>
              <a href="#">Order List</a>
            </li>
            <li class="nav-link">
              <i class="bx bxs-message-alt-check me-3"></i>
              <a href="#">Message</a>
            </li>
            <li class="nav-link">
              <i class="bx bxs-wallet me-3"></i>
              <a href="#">Payment</a>
            </li>
            <li class="nav-link">
              <i class="bx bxs-cog me-3"></i>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
        <div class="footer">
          <div class="d-flex align-items-center justify-content-start">
            <i class="bx bx-help-circle me-3"></i>
            <a href="#">Help</a>
          </div>
        </div>
      </div>
    </div>
  );
}
