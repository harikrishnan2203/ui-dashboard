import React from "react";
import Table from "../component/Table/Table";
import InputComponent from "../component/elements/Inputs/Input";
import SearchComponent from "../component/elements/Inputs/search";
import Sidebar from "../component/Sidebar/Sidebar";
import "./Dashboard.css";
import { tableData } from "../Data";


export default function Dashboard() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-2">
          <Sidebar />
        </div>
        <div class="col-10 p-5">
          <div class="row mb-4">
            <div className="col-6 search">
              <box-icon name="search"></box-icon>
              <SearchComponent placeholder="Search" type="search" />
            </div>
            <p>Sales Information</p>
          </div>
          <div class="row mb-4">
          <div class="col-3">
              <InputComponent
                label="Invoice ID"
                id="invoiceID"
                placeholder="Enter Invoice ID"
                type="text"
              />
            </div>
            <div class="col-3">
              <InputComponent
                label="Customer"
                id="customerName"
                placeholder="Enter Customer Name"
                type="text"
              />
            </div>
            <div class="col-3">
              <InputComponent
                label="Start Date"
                id="startingDate"
                placeholder="Enter Start Date"
                type="date"
              />
            </div>
            <div class="col-3">
              <InputComponent
                label="End Date"
                id="endingDate"
                placeholder="Enter End Date"
                type="date"
              />
            </div>
          </div>
          <div class="row px-2">
            <Table data={tableData} />
          </div>
        </div>
      </div>
    </div>
  );
}
