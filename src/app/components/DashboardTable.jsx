import Image from "next/image";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
const tableData = [
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 2,
    orders: 1,
    subs: "Basic",
  },
  {
    src: "Avatar 1",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 350,
    orders: 11500,
    subs: "Premium",
  },
  {
    src: "Avatar 2",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Premium",
  },
  {
    src: "Avatar 3",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Basic",
  },
  {
    src: "Avatar 4",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Premium",
  },
  {
    src: "Avatar 5",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Basic",
  },
  {
    src: "Avatar 6",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
  {
    src: "Avatar 7",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Block",
  },
  {
    src: "Avatar 8",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Basic",
  },
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Block",
  },
  
  
  {
    src: "Avatar 4",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Premium",
  },
  {
    src: "Avatar 6",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Basic",
  },
  {
    src: "Avatar 7",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Premium",
  },
  {
    src: "Avatar 8",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Basic",
  },
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
  {
    src: "Avatar 1",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Block",
  },
  {
    src: "Avatar 2",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Basic",
  },
  {
    src: "Avatar 3",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Block",
  },
  {
    src: "Avatar 4",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Basic",
  },
  {
    src: "Avatar 5",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
  {
    src: "Avatar 6",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 350,
    orders: 11500,
    subs: "Premium",
  },
  {
    src: "Avatar 7",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Premium",
  },
  {
    src: "Avatar 8",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Basic",
  },
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Premium",
  },
  {
    src: "Avatar 1",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Basic",
  },
  {
    src: "Avatar 2",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
  {
    src: "Avatar 3",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Block",
  },
  {
    src: "Avatar 4",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Basic",
  },
  {
    src: "Avatar 5",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Block",
  },
  {
    src: "Avatar 6",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Basic",
  },
  {
    src: "Avatar 7",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
  {
    src: "Avatar 8",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Premium",
  },
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Basic",
  },
  {
    src: "Avatar 1",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Premium",
  },
  {
    src: "Avatar 2",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Block",
  },
  {
    src: "Avatar 3",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
  {
    src: "Avatar 4",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Premium",
  },
  {
    src: "Avatar 5",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 0,
    orders: 0,
    subs: "Block",
  },
  {
    src: "Avatar 6",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Premium",
  },
  {
    src: "Avatar 7",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Block",
  },
  {
    src: "Avatar 8",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 29,
    orders: 87,
    subs: "Premium",
  },
  {
    src: "Avatar 1",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 29,
    orders: 181,
    subs: "Premium",
  },
  {
    src: "Avatar 2",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
];
const DashboardTable = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const todosPerPage = 9;
  const pageCount = Math.ceil(tableData.length / todosPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * todosPerPage;
  const currentTodos = tableData.slice(offset, offset + todosPerPage);
  return (
    <>
      <div className="">
        <div className="w-full h-autp flex justify-between items-center my-4 text-[#32475C] text-opacity-90">
          <h3 className="ml-8 text-lg font-[500]">All Users</h3>
          <div className="flex justify-between items-center gap-3">
            <select className="border-[#FAFAFC] border-2 h-[38px] focus:outline-none w-24 px-2 rounded-md text-[15px] text-[#32475C] text-opacity-60">
              <option className="hover:bg-gold-1 hover:bg-opacity-30">5</option>
              <option className="hover:bg-gold-1 hover:bg-opacity-30">8</option>
              <option className="hover:bg-gold-1 hover:bg-opacity-30">
                10
              </option>
            </select>
            {/* <Image src="/Drop Down Icon.svg" alt="dropdown" width={10} height={8} /> */}
            <label className="text-xs mr-4">Show Users Per Page</label>
          </div>
        </div>
        {/* border-separate border-spacing-x-6 border-spacing-y-8 */}
        <table className="table-auto border-separate w-full h-[60vh] mb-8 text-lg text-center rounded-lg bg-[#FAFAFC]">
          <thead className=" w-full h-auto">
            <tr className="">
              {/* <th>
              </th> */}
              <th className="text-left w-[230px] h-[60px] p-4">
                <input type="checkbox" name="check" id="" className="w-[15px] h-[15px] mr-6"/>
                Users
                </th>
              <th className="text-left p-4 w-[260px]">Emails</th>
              <th>Products</th>
              <th>Orders</th>
              <th>Subscription</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-[15px] text-[#32475C] bg-white">
            {currentTodos.map((data, index) => {
              return (
                <tr key={index} className="">
                  {/* <td className="w-[30px] h-[60px] flex justify-center items-center">
                  </td> */}
                  <td className="w-[250px] h-[60px] px-4">
                    <div className="flex justify-start gap-2 items-center">
                    <input type="checkbox" name="check" id="" className="w-[15px] h-[15px] mr-4" value="checked"/>
                      <Image
                        src={`/${data.src}.svg`}
                        alt="avatar"
                        width={38}
                        height={38}
                      />
                      <span className="text-opacity-80">{data.name}</span>
                    </div>
                  </td>
                  <td className="w-auto h-[60px] px-4 justify-start align-middle flex items-center">
                    {data.email}
                  </td>
                  <td className="justify-center align-middle">
                    {data.product}
                  </td>
                  <td className="justify-center align-middle flex items-center">
                    {data.orders}
                  </td>
                  <td className=" justify-center align-middle">
                    <span
                      className={`${
                        data.subs === "Basic"
                          ? "bg-[#72E128] px-11"
                          : data.subs === "Premium"
                          ? "bg-[#FFD700] px-8"
                          : "bg-[#32475C] px-11"
                      } bg-opacity-20 py-4 rounded-md w-[134px] h-[55px]`}
                    >
                      {data.subs}
                    </span>
                  </td>
                  <td className="justify-center align-middle flex items-center">
                    <button className="flex gap-2 w-[117px] h-[34px] bg-[#015FCC] justify-center items-center text-white rounded-md">
                      <Image
                        src="/View.svg"
                        alt="view"
                        width={20}
                        height={20}
                      />{" "}
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="pagination-container flex justify-end mr-6 mt-auto items-center">
          <div className="text-[#32475C] text-opacity-90 text-base mr-auto ml-5">
            {`Showing ${currentPage+1} to ${pageCount} of ${todosPerPage * pageCount} entries`} 
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex items-center gap-2 space-x-2"}
            previousLinkClassName={
              "previousLink text-[#000000] text-[15px] w-[116px] h-[40px] p-2 text-opacity-80 border border-gray-300 rounded-md bg-[#F5F5F9]"
            }
            nextLinkClassName={`nextLink text-[15px] w-[136px] h-[40px] p-2 text-[#000000] text-opacity-80 border border-gray-300 rounded-md bg-[#F5F5F9] ${
              currentPage === pageCount - 1
                ? "disabled opacity-80 cursor-not-allowed"
                : ""
            }`}
            pageClassName={(page) =>
              `page border w-[40px] h-[40px] flex justify-center items-center px-3 py-2  border-gray-300 rounded-md ${
                currentPage === pageCount - 1
                  ? "disabled opacity-100 cursor-not-allowed"
                  : ""
              }`
            }
            disabledClassName={
              "disabled  px-3 py-2  opacity-60 cursor-not-allowed"
            }
            activeClassName={
              "active bg-[#FDBB12] px-3 py-2 text-white border border-gold rounded-md"
            }
            pageRangeDisplayed={5}
            marginPagesDisplayed={1}
          />
        </div>
      </div>
    </>
  );
};

export default DashboardTable;
