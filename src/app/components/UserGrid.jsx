"use client";
import React from "react";
import { useState } from "react";

const UserGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const userData = [
    {
      title: "All Users",
      ratio: "21,459",
      analytics: "Last week analytics ",
      ana_per: 1505,
      percentage: 15,
      color: true,
    },
    {
      title: "Premium Users",
      ratio: "15,000",
      analytics: "Last week analytics  ",
      ana_per: 1200,
      percentage: 10,
      color: true,
    },
    {
      title: "Basic Users",
      ratio: "6,450",
      analytics: "Last week analytics  ",
      ana_per: 314,
      percentage: 2,
      color: true,
    },
    {
      title: "Block Users",
      ratio: "312",
      analytics: "Last week analytics  ",
      ana_per: 9,
      percentage: 2,
      color: false,
    },
  ];
  return (
    <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2 my-6 w-full h-[128px]">
      {userData.map((data, index) => {
        const isActive = activeIndex === index;
        return (
          <div
            key={index}
            className={"w-full h-[90%] font-normal border text-[#020242] rounded-lg shadow-md flex flex-col py-2 px-6 cursor-pointer gap-2 " + (isActive ? "bg-gradient-to-t from-gold-2 to-gold-1" : "bg-[#fff]")}
            // style={{ backgroundColor: isActive ? "#FDBB12" : "#fff" }}
            onClick={() => handleClick(index)}
          >
            {/* title */}
            <p className="text-[20px] ">{data.title}</p>
            {/* ratio */}
            <p className="text-[22px]">{data.ratio}</p>
            <div className="text-xs flex flex-1 justify-between">
              {/* analysis */}
              <p className="text-black">
                {data.analytics} - {data.ana_per}
              </p>
              {/* percentage */}
              <p
                className={`${
                  data.color === true ? "text-[#459510]" : "text-[#FF011E]"
                }`}
              >
                (+{data.percentage}%)
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserGrid;
