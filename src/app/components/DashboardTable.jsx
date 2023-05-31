import Image from "next/image";
import React from "react";

const DashboardTable = () => {

  const tableData =[
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 2,
      orders: 1,
      subs: 'Basic',
    },
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 350,
      orders: 11500,
      subs: 'Premium',
    },
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 15,
      orders: 65,
      subs: 'Premium',
    },
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 0,
      orders: 0,
      subs: 'Basic',
    },
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 50,
      orders: 100,
      subs: 'Premium',
    },
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 35,
      orders: 27,
      subs: 'Basic',
    },
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 20,
      orders: 1,
      subs: 'Block',
    },
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 29,
      orders: 87,
      subs: 'Premium',
    },
    {
      src :"Avatar",
      name: 'Jordan Stevenson',
      email: "Jordan Stevenson@gmail.com",
      product: 29,
      orders: 181,
      subs: 'Premium',
    },
  ]


  return (
    <>
      <table className="border-separate border-spacing-x-6 border-spacing-y-4 text-left">
        <thead>

        <tr className="">
          <th>
            <input type="checkbox" name="check" id="" />
          </th>
          <th>Users</th>
          <th>Emails</th>
          <th>Products</th>
          <th>Orders</th>
          <th>Subscription</th>
          <th>Action</th>
        </tr>
        </thead>
        {/* table data starts here */}
        <tbody className=" text-[18px] text-[#32475C]">
{
  tableData.map((data,index)=>{
    return(
      <tr key={index}>
        {/* checkbox */}
        <td>
          <input type="checkbox" name="check" id="" />
        </td>
        {/* user profile */}
        <td>
          <div className="flex gap-2">
            <Image src={`/${data.src}.svg`} alt="avatar" width={30} height={30} />
            <span className="text-opacity-80">{data.name}</span>
          </div>
        </td>
        {/* email */}
        <td className="">{data.name}</td>
        {/* Products */}
        <td>{data.product}</td>
        {/* orders */}
        <td>{data.orders}</td>
        {/* Subscription */}
        <td>
          <span className={`${data.subs === 'Basic' ? 'bg-[#72E128] px-12' : data.subs === 'Premium' ? 'bg-[#FFD700] px-8' : 'bg-[#32475C] px-12'} bg-opacity-20 py-4 rounded-md`}>{data.subs}</span>
        </td>
        {/* Action */}
        <td>
          <button className="flex gap-3 bg-[#015FCC] px-6 py-3 justify-center items-center text-white text-[16px] rounded-md">
            <Image src="/View.svg" alt="view" width={20} height={20}/>
            View
          </button>
        </td>
      </tr>

    )
  })
}
        </tbody>
      </table>
    </>
  );
};

export default DashboardTable;
