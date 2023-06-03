"use client";

import Image from "next/image";
import React, { useState } from "react";

// local Imports
import DashboardTable from "./DashboardTable";
// import TableComp from "./TableComp";

const exportMenu = [
  {
    title: "PDF",
    src: "pdf",
  },
  {
    title: "Excel",
    src: "excel",
  },
  {
    title: "CSV",
    src: "csv",
  },
  {
    title: "Word",
    src: "word",
  },
  {
    title: "Copy",
    src: "Copy",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const MainDashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openStatus, setOpenStatus] = useState(false);
  const [openExport, setOpenExport] = useState(false);

  return (
    <>
      <div className="flex flex-col flex-1 h-auto w-full border rounded-lg shadow-md px-4 py-8">
        <div className="flex justify-between w-full h-[70px] ">
          {/* search bar */}
          <div className="w-[55%] h-[80%] max-h-full rounded-md border-2 flex text-lg">
            <Image
              src="/Search Bar.svg"
              alt="language"
              width={22}
              height={22}
              className="mx-4 object-contain"
            />
            <input
              type="search"
              placeholder="Search User"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="outline-none focus:outline-none mr-20 flex-1"
            />
            <button className="bg-[#015FCC] w-[20%] h-full text-white rounded-r-md">
              Search
            </button>
          </div>
          {/* status */}
          <div className="flex flex-col w-[18%] h-auto text-[#32475C] text-opacity-60">
            <button
              className="border-2 w-full h-[80%] bg-white rounded-md flex justify-around items-center cursor-pointer py-4"
              onClick={() => setOpenStatus(!openStatus)}
            >
              <span>Select Status</span>
              <Image
                src="/Drop Down Icon.svg"
                alt="dropdown"
                width={12}
                height={12}
              />
            </button>
            {/* drop down options */}
            {openStatus ? (
              <>
                <ul className="bg-white z-10 w-full border-2 flex flex-col justify-around items-start rounded-md ">
                  <li className="hover:text-blue-1 py-2 px-4 hover:bg-gold-1 hover:bg-opacity-30 w-full cursor-pointer">
                    Online
                  </li>
                  <li className="border w-[90%] mx-auto my-1"></li>
                  <li className="hover:text-blue-1 py-2 px-4 hover:bg-gold-1 hover:bg-opacity-30 w-full cursor-pointer">
                    Offline
                  </li>
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
          {/* export */}
          <div className="flex flex-col w-[18%] h-auto text-[#32475C] text-opacity-60">
            <button
              className="border-2 w-full h-[80%] bg-white rounded-md flex justify-evenly items-center cursor-pointer py-4"
              onClick={() => setOpenExport(!openExport)}
            >
              <Image
                src="/Export Icon.svg"
                alt="dropdown"
                width={32}
                height={32}
              />
              <span>Export</span>
            </button>
            {/* drop down options */}
            {openExport ? (
              <>
                <ul className="bg-white z-10 w-full border-2 flex flex-col items-start rounded-md ">
                  {exportMenu.map((exportData, index) => {
                    return (
                      <li key={index} className="hover:text-blue-1 py-2 px-4 hover:bg-gold-1 hover:bg-opacity-30 w-full cursor-pointer flex gap-4">
                        <Image
                          src={`/${exportData.src}.svg`}
                          alt="pdf"
                          width={12}
                          height={14}
                        />
                        {exportData.title}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <DashboardTable />
      </div>
    </>
  );
};

export default MainDashboard;
