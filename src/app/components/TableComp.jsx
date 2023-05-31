import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Image from "next/image";
import Button from "@mui/material/Button";
const columns = [
  //   {
  //     field: "src",
  //     headerName: "Image",
  //     width: 70,
  //     renderCell: (params) => (
  //       <Image src={params.value} alt="avatar" width={35} height={35} />
  //     ),
  //   },
  {
    field: "imageAndName",
    headerName: "Image and Name",
    width: 200,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src={`http://localhost:3000${params.row.src}`}
          alt="avatar"
          width={35}
          height={35}
        />

        <span style={{ marginLeft: 10 }}>{params.row.name}</span>
      </div>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "product",
    headerName: "Product",
    width: 130,
  },
  {
    field: "orders",
    headerName: "Orders",
    type: "number",
    width: 90,
  },
  {
    field: "subs",
    headerName: "Subscription",
    width: 90,
    renderCell: (params) => (
      <span
        style={{
          marginLeft: 10,
        //   width: '134px',
        //   height: '55px',
        padding:
        params.row.subs === "Premium"
              ? "8px"
              : params.row.subs === "Basic"
              ? "12px"
              : "12px",
          backgroundColor:
            params.row.subs === "Premium"
              ? "#FFD700"
              : params.row.subs === "Basic"
              ? "#72E128"
             
              : "#32475C",
        }}
      >
        {params.row.subs}
      </span>
    ),
  },
  {
    field: "button",
    headerName: "Button",
    width: 100,
    renderCell: (params) => (
      <Button variant="contained" color="primary">
        <Image src="/View.svg" alt="view" width={20} height={20} />
        View
      </Button>
    ),
  },
];

const rows = [
  {
    id: 1,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 2,
    orders: 1,
    subs: "Basic",
  },
  {
    id: 2,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 350,
    orders: 11500,
    subs: "Premium",
  },
  {
    id: 3,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Premium",
  },
  {
    id: 4,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Basic",
  },
  {
    id: 5,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Premium",
  },
  {
    id: 6,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Basic",
  },
  {
    id: 7,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
  {
    id: 8,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 29,
    orders: 87,
    subs: "Premium",
  },
  {
    id: 9,
    src: "/Avatar.svg",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 29,
    orders: 181,
    subs: "Premium",
  },
];

export default function TableComp() {
  return (
    <div style={{ height: "80vh", width: "full" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              page: 0,
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 8]}
        checkboxSelection
      />
    </div>
  );
}
