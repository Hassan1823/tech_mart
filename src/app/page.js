"use client";

import { useState } from "react";
const App = () => {
  
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Home Icon" },
    { title: "Categories", src: "Chat", gap: true },
    { title: "Products", src: "Components" },
    { title: "Orders ", src: "Package Godown", gap: true },
    { title: "Refund Request", src: "shopping-bags 1" },
    { title: "Users", src: "Users", gap: true },
    { title: "Messages ", src: "Parcel Return" },
    { title: "Workspace", src: "Office Bag", gap: true },
    { title: "Discussion", src: "Chat" },
    { title: "Advertisement", src: "Advertising", gap: true },
    { title: "Offers & Deals", src: "Notification Bell" },
    { title: "Notifications", src: "Sale" },
    { title: "Business Setup", src: "Business", gap: true },
    { title: "3rd Party", src: "Sale (1)" },
    { title: "Pages & Media", src: "Notification Bell (1)" },
  ];

  return (
    <div className="flex ">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-white h-full border drop-shadow-lg pt-2 relative duration-300`}
      >
        <img
          src="/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full `}
          onClick={() => setOpen(!open)}
        />
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
              {open && Menu.gap && index > 0 ? <p className="my-2 text-white">Product Managment</p> : ""}
              <li
                className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-5" : "mt-2 mb-4"} ${
                  index === 0 && "bg-light-white"
                } `}
              >
                <img src={`/${Menu.src}.svg`} />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {Menu.title}
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Hello Home</h1>
      </div>
    </div>
  );
};
export default App;
