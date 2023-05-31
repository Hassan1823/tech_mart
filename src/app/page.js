"use client";

import Image from "next/image";
import { useState } from "react";
import HeadBar from "./components/HeadBar";
import UserGrid from "./components/UserGrid";
import MainDashboard from "./components/MainDashboard";
const App = () => {
  const [open, setOpen] = useState(true);

  const Menus = [
    { title: "Dashboard", src: "Home Icon", des: "" },
    { title: "Categories", src: "Chat", gap: true, des: "Product Managment" },
    { title: "Products", src: "Components", des: "" },
    {
      title: "Orders ",
      src: "Package Godown",
      gap: true,
      des: "Orders Managment",
    },
    { title: "Refund Request", src: "shopping-bags 1", des: "" },
    { title: "Users", src: "Users", gap: true, des: "User Managment" },
    { title: "Messages ", src: "Parcel Return", des: "" },
    {
      title: "Workspace",
      src: "Office Bag",
      gap: true,
      des: "Board Managment",
    },
    { title: "Discussion", src: "Chat", des: "" },
    {
      title: "Advertisement",
      src: "Advertising",
      gap: true,
      des: "Promotion Managment",
    },
    { title: "Offers & Deals", src: "Notification Bell", des: "" },
    { title: "Notifications", src: "Sale", des: "" },
    {
      title: "Business Setup",
      src: "Business",
      gap: true,
      des: "System Managment",
    },
    { title: "3rd Party", src: "Sale (1)", des: "" },
    { title: "Pages & Media", src: "Notification Bell (1)", des: "" },
  ];

  return (
    <div className="flex text-[18px]">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white h-screen border drop-shadow-lg pt-2 relative duration-300`}
      >
          <div
            // src="/Ellipse 677.svg"
            className={`absolute cursor-pointer -right-3 top-9   bg-[#0707B4]
          border-2 rounded-full flex justify-center items-center ${open ? 'w-[48px] h-[48px] border-[#0707B4]' : 'border-main-gold w-[28px] h-[28px]'}`}
            onClick={() => setOpen(!open)}
          >
            <Image src="/sideArrow.svg" alt="side arrow" width={25} height={25} className="object-contain m-auto" />
          </div>
        <div className="flex gap-x-4 items-center justify-center w-full h-auto">
          <img
            src="/Tech Mart Logo - Side Bar.png"
            className={`cursor-pointer duration-500 `}
          />
          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1> */}
        </div>
        <ul className="pt-6 bg-[#020242] p-5 ">
          {Menus.map((Menu, index) => (
            <div
              key={index}
              className={`${Menu.gap && open ? "border-t-2 border-white" : ""}`}
            >
              {open && Menu.gap && index > 0 ? (
                <p className="my-2 text-white">{Menu.des}</p>
              ) : (
                ""
              )}
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-[16px] items-center gap-x-4 
              ${Menu.gap ? "mt-5" : "mt-2 mb-4"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <Image
                  src={`/${Menu.src}.svg`}
                  alt="icons"
                  width={22}
                  height={22}
                />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
                {open ? (
                  <Image
                    src="/dropdown.svg"
                    alt="dropdown arrow"
                    width={12}
                    height={10}
                    className="ml-auto mr-[14%] object-contain"
                  />
                ) : (
                  ""
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 px-7 py-[19px]">
        <HeadBar />
        <UserGrid />
        <MainDashboard />
      </div>
    </div>
  );
};
export default App;
