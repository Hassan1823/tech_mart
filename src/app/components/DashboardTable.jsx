import Image from "next/image";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

import Link from "next/link";
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
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 350,
    orders: 11500,
    subs: "Premium",
  },
  {
    src: "Avatar",
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
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Premium",
  },
  {
    src: "Avatar",
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
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 15,
    orders: 65,
    subs: "Block",
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
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Block",
  },
  {
    src: "Avatar",
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
    src: "Avatar",
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
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 50,
    orders: 100,
    subs: "Premium",
  },
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Block",
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
    src: "Avatar",
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
    subs: "Block",
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
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 35,
    orders: 27,
    subs: "Block",
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
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 29,
    orders: 87,
    subs: "Premium",
  },
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 29,
    orders: 181,
    subs: "Premium",
  },
  {
    src: "Avatar",
    name: "Jordan Stevenson",
    email: "Jordan Stevenson@gmail.com",
    product: 20,
    orders: 1,
    subs: "Block",
  },
];
const DashboardTable = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const todosPerPage = 5;
  const pageCount = Math.ceil(tableData.length / todosPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * todosPerPage;
  const currentTodos = tableData.slice(offset, offset + todosPerPage);
  return (
    <>
      <div className="">
        <div className="w-full h-14 flex justify-between items-center my-4 text-[#32475C] text-opacity-90">
          <h3 className="ml-8 text-lg font-[500]">All Users</h3>
          <div className="flex justify-between items-center gap-3">
            <Menu
              as="div"
              className="relative inline-block tw-[100%] justify-centerext-left"
            >
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div className="">
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-3 text-[18px] font-medium text-[#32475C] text-opacity-80 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      5
                      <Image src='/Drop Down Icon.svg' alt='dropdown' width={15} height={15} className="ml-8 my-auto"/>
                   
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-2">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-[#32475C] text-opacity-60",
                                "block px-4 py-2 text-[15px]"
                              )}
                            >
                              5
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-[#32475C] text-opacity-60",
                                "block px-4 py-2 text-[15px]"
                              )}
                            >
                              9
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </Menu>
            <label className="text-xs mr-4">Show Users Per Page</label>
          </div>
        </div>
        <table className="table-auto border-separate border-spacing-x-6 border-spacing-y-4 text-center w-full h-[60vh] mb-8">
          <thead>
            <tr>
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
          <tbody className="text-base text-[#32475C]">
            {currentTodos.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="flex justify-center items-center">
                    <input type="checkbox" name="check" id="" />
                  </td>
                  <td className="justify-center align-middle">
                    <div className="flex gap-2 justify-evenly items-center">
                      <Image
                        src={`/${data.src}.svg`}
                        alt="avatar"
                        width={30}
                        height={30}
                      />
                      <span className="text-opacity-80">{data.name}</span>
                    </div>
                  </td>
                  <td className="justify-center align-middle flex items-center">
                    {data.name}
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
                          ? "bg-[#72E128] px-12"
                          : data.subs === "Premium"
                          ? "bg-[#FFD700] px-8"
                          : "bg-[#32475C] px-12"
                      } bg-opacity-20 py-4 rounded-md`}
                    >
                      {data.subs}
                    </span>
                  </td>
                  <td className="justify-center align-middle flex items-center">
                    <button className="flex gap-3 bg-[#015FCC] px-6 py-3 justify-center items-center text-white rounded-md">
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
        <div className="pagination-container flex justify-end mr-6">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"pagination flex items-center gap-2 space-x-2"}
            previousLinkClassName={
              "previousLink text-[#000000] px-3 py-2  text-opacity-80 border border-gray-300 rounded-md bg-[#F5F5F9]"
            }
            nextLinkClassName={`nextLink px-3 py-2  text-[#000000] text-opacity-80 border border-gray-300 rounded-md bg-[#F5F5F9] ${
              currentPage === pageCount - 1
                ? "disabled opacity-80 cursor-not-allowed"
                : ""
            }`}
            pageClassName={(page) =>
              `page border  px-3 py-2  border-gray-300 rounded-md ${
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
