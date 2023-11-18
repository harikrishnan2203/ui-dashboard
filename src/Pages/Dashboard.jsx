import React from "react";
import Table from "../component/Table/Table";
import InputComponent from "../component/elements/Inputs/Input";
import SearchComponent from "../component/elements/Inputs/search";
import Sidebar from "../component/Sidebar/Sidebar";
import "./Dashboard.css"

const tableData = [
    { invoiceId: "INV001",
      date: "01-01-2023",
      customerName: "Customer A",
      payableAmount: 1000,
      paidAmount: 800,
      due: 200 
    },
    
    { invoiceId: "INV002",
      date: "02-01-2023",
      customerName: "Customer B",
      payableAmount: 1200,
      paidAmount: 1000,
      due: 200 
    },
    
    { invoiceId: "INV003",
      date: "03-01-2023",
      customerName: "Customer C",
      payableAmount: 800,
      paidAmount: 600,
      due: 200 
    },
    
    { invoiceId: "INV004",
      date: "04-01-2023",
      customerName: "Customer D",
      payableAmount: 1500,
      paidAmount: 1200,
      due: 300 
    },
    
    { invoiceId: "INV005",
      date: "05-01-2023",
      customerName: "Customer E",
      payableAmount: 900,
      paidAmount: 700,
      due: 200 
    },
    
    { invoiceId: "INV006",
      date: "06-01-2023",
      customerName: "Customer F",
      payableAmount: 1100,
      paidAmount: 900,
      due: 200 
    },
    
    { invoiceId: "INV007",
      date: "07-01-2023",
      customerName: "Customer G",
      payableAmount: 1300,
      paidAmount: 1100,
      due: 200 
    },
    
    { invoiceId: "INV008",
      date: "08-01-2023",
      customerName: "Customer H",
      payableAmount: 1000,
      paidAmount: 800,
      due: 200 
    },
    
    { invoiceId: "INV009",
      date: "09-01-2023",
      customerName: "Customer I",
      payableAmount: 1200,
      paidAmount: 1000,
      due: 200 
    },
    
    { invoiceId: "INV010",
      date: "10-01-2023",
      customerName: "Customer J",
      payableAmount: 800,
      paidAmount: 600,
      due: 200 
    },
    
    { invoiceId: "INV011",
      date: "11-01-2023",
      customerName: "Customer K",
      payableAmount: 1500,
      paidAmount: 1200,
      due: 300 
    },
    
    { invoiceId: "INV012",
      date: "12-01-2023",
      customerName: "Customer L",
      payableAmount: 900,
      paidAmount: 700,
      due: 200 
    },
    
    { invoiceId: "INV013",
      date: "13-01-2023",
      customerName: "Customer M",
      payableAmount: 1100,
      paidAmount: 900,
      due: 200 
    },
    
    { invoiceId: "INV014",
      date: "14-01-2023",
      customerName: "Customer N",
      payableAmount: 1300,
      paidAmount: 1100,
      due: 200 
    },
    
    { invoiceId: "INV015",
      date: "15-01-2023",
      customerName: "Customer O",
      payableAmount: 1000,
      paidAmount: 800,
      due: 200 
    },
    
    { invoiceId: "INV016",
      date: "16-01-2023",
      customerName: "Customer P",
      payableAmount: 1200,
      paidAmount: 1000,
      due: 200 
    },
    
    { invoiceId: "INV017",
      date: "17-01-2023",
      customerName: "Customer Q",
      payableAmount: 800,
      paidAmount: 600,
      due: 200 
    },
    
    { invoiceId: "INV018",
      date: "18-01-2023",
      customerName: "Customer R",
      payableAmount: 1500,
      paidAmount: 1200,
      due: 300 
    },
    
    { invoiceId: "INV019",
      date: "19-01-2023",
      customerName: "Customer S",
      payableAmount: 900,
      paidAmount: 700,
      due: 200 
    },
    
    { invoiceId: "INV020",
      date: "20-01-2023",
      customerName: "Customer T",
      payableAmount: 1100,
      paidAmount: 900,
      due: 200 
    },
    
    { invoiceId: "INV021",
      date: "21-01-2023",
      customerName: "Customer U",
      payableAmount: 1300,
      paidAmount: 1100,
      due: 200 
    },
    
    { invoiceId: "INV022",
      date: "22-01-2023",
      customerName: "Customer V",
      payableAmount: 1000,
      paidAmount: 800,
      due: 200 
    },
    
    { invoiceId: "INV023",
      date: "23-01-2023",
      customerName: "Customer W",
      payableAmount: 1200,
      paidAmount: 1000,
      due: 200 
    },
    
    { invoiceId: "INV024",
      date: "24-01-2023",
      customerName: "Customer X",
      payableAmount: 800,
      paidAmount: 600,
      due: 200 
    },
    
    { invoiceId: "INV025",
      date: "25-01-2023",
      customerName: "Customer Y",
      payableAmount: 1500,
      paidAmount: 1200,
      due: 300 
    },
    
    { invoiceId: "INV026",
      date: "26-01-2023",
      customerName: "Customer Z",
      payableAmount: 900,
      paidAmount: 700,
      due: 200 
    },
    
    { invoiceId: "INV027",
      date: "27-01-2023",
      customerName: "Customer AA",
      payableAmount: 1100,
      paidAmount: 900,
      due: 200 
    },
    
    { invoiceId: "INV028",
      date: "28-01-2023",
      customerName: "Customer BB",
      payableAmount: 1300,
      paidAmount: 1100,
      due: 200 
    },
    
    { invoiceId: "INV029",
      date: "29-01-2023",
      customerName: "Customer CC",
      payableAmount: 1000,
      paidAmount: 800,
      due: 200 
    },
    
    { invoiceId: "INV030",
      date: "30-01-2023",
      customerName: "Customer DD",
      payableAmount: 1200,
      paidAmount: 1000,
      due: 200 
    },
    
    { invoiceId: "INV031",
      date: "31-01-2023",
      customerName: "Customer EE",
      payableAmount: 800,
      paidAmount: 600,
      due: 200 
    },
    
    { invoiceId: "INV032",
      date: "01-02-2023",
      customerName: "Customer FF",
      payableAmount: 1500,
      paidAmount: 1200,
      due: 300 
    },
    
    { invoiceId: "INV033",
      date: "02-02-2023",
      customerName: "Customer GG",
      payableAmount: 900,
      paidAmount: 700,
      due: 200 
    },
    
    { invoiceId: "INV034",
      date: "03-02-2023",
      customerName: "Customer HH",
      payableAmount: 1100,
      paidAmount: 900,
      due: 200 
    },
    
    { invoiceId: "INV035",
      date: "04-02-2023",
      customerName: "Customer II",
      payableAmount: 1300,
      paidAmount: 1100,
      due: 200 
    },
    
    { invoiceId: "INV036",
      date: "05-02-2023",
      customerName: "Customer JJ",
      payableAmount: 1000,
      paidAmount: 800,
      due: 200 
    },
    
    { invoiceId: "INV037",
      date: "06-02-2023",
      customerName: "Customer KK",
      payableAmount: 1200,
      paidAmount: 1000,
      due: 200 
    },
    
    { invoiceId: "INV038",
      date: "07-02-2023",
      customerName: "Customer LL",
      payableAmount: 800,
      paidAmount: 600,
      due: 200 
    },
    
    { invoiceId: "INV039",
      date: "08-02-2023",
      customerName: "Customer MM",
      payableAmount: 1500,
      paidAmount: 1200,
      due: 300 
    },
    
    { invoiceId: "INV040",
      date: "09-02-2023",
      customerName: "Customer NN",
      payableAmount: 900,
      paidAmount: 700,
      due: 200 
    },
    
    { invoiceId: "INV041",
      date: "10-02-2023",
      customerName: "Customer OO",
      payableAmount: 1100,
      paidAmount: 900,
      due: 200 
    },
    
    { invoiceId: "INV042",
      date: "11-02-2023",
      customerName: "Customer PP",
      payableAmount: 1300,
      paidAmount: 1100,
      due: 200 
    },
    
    { invoiceId: "INV043",
      date: "12-02-2023",
      customerName: "Customer QQ",
      payableAmount: 1000,
      paidAmount: 800,
      due: 200 
    },
    
    { invoiceId: "INV044",
      date: "13-02-2023",
      customerName: "Customer RR",
      payableAmount: 1200,
      paidAmount: 1000,
      due: 200 
    },
    
    { invoiceId: "INV045",
      date: "14-02-2023",
      customerName: "Customer SS",
      payableAmount: 800,
      paidAmount: 600,
      due: 200 
    },
    
    { invoiceId: "INV046",
      date: "15-02-2023",
      customerName: "Customer TT",
      payableAmount: 1500,
      paidAmount: 1200,
      due: 300 
    },
    
    { invoiceId: "INV047",
      date: "16-02-2023",
      customerName: "Customer UU",
      payableAmount: 900,
      paidAmount: 700,
      due: 200 
    },
    
    { invoiceId: "INV048",
      date: "17-02-2023",
      customerName: "Customer VV",
      payableAmount: 1100,
      paidAmount: 900,
      due: 200 
    },
    
    { invoiceId: "INV049",
      date: "18-02-2023",
      customerName: "Customer WW",
      payableAmount: 1300,
      paidAmount: 1100,
      due: 200 
    },
    
    { invoiceId: "INV050",
      date: "19-02-2023",
      customerName: "Customer XX",
      payableAmount: 1000,
      paidAmount: 800,
      due: 200
     }
     
  ];
  
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
