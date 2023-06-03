"use client";

import Image from "next/image";
import React, { useState } from "react";

const menuData = [
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

const HomePage = () => {
  const [opneMenu, setOpenMenu] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  return (
    <>
      {/* main container */}
      <div className="w-full h-auto flex">
        {/* sidebar */}
        <div
          className={`relative flex flex-col h-auto border bg-gradient-to-b from-blue-1 to-blue-2 text-white text-[18px] font-medium leading-6 ${
            opneMenu ? "w-[335px] duration-300" : "w-[70px] duration-300"
          }`}
        >
          {/* slider button */}
          <button
            className={`bg-gradient-to-b  from-blue-1 to-blue-2  rounded-full absolute flex justify-center items-center border-none ${
              opneMenu
                ? "w-[48px] h-[48px] top-[67px] left-[303px] duration-300"
                : "w-[25px] h-[25px] left-[55px] top-[30px] duration-300"
            }`}
            onClick={() => setOpenMenu(!opneMenu)}
          >
            <Image
              src="/sliderButton.svg"
              alt="slider button"
              width={30}
              height={30}
            />
          </button>
          {/* logo */}
          <div className="flex justify-center items-center w-full h-[194px] border bg-[#FFFFFF]">
            <Image
              src="/Tech Mart Logo.svg"
              alt="logo"
              width={240}
              height={185}
            />
          </div>

          {/* menu */}
          <div className="w-full h-auto my-6">
            <ul className="">
              {menuData.map((data, index) => {
                return (
                  <li key={index} className="mx-4 flex flex-col gap-8 my-6">
                    <div
                      className="flex rounded-md p-2 justify-between hover:bg-light-white cursor-pointer mx-6"
                      onClick={() => setOpenSubMenu(!openSubMenu)}
                    >
                      <Image
                        src={`/${data.src}.svg`}
                        alt="menu_icons"
                        width={15}
                        height={15}
                      />
                      {opneMenu ? (
                        <>
                          <button className="">{data.title}</button>
                          <button>
                            <Image
                              src="/dropdown.svg"
                              alt="down arrow"
                              width={9}
                              height={9}
                            />
                          </button>
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* sub menu items */}

                    <ul
                      className={`${
                        openSubMenu && opneMenu ? "flex" : "hidden"
                      } gap-4 flex-col mx-8 w-auto`}
                    >
                      <li className="flex items-center gap-14 hover:bg-light-white rounded-md p-2 ">
                        <span className="w-[11px] h-[11px] rounded-full bg-white"></span>
                        eCommerece
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* main conatiner  */}
        <h1>Hello Home</h1>
      </div>
    </>
  );
};

export default HomePage;
