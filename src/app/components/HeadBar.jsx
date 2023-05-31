"use client";

import Image from "next/image";
import React, { useState } from "react";

const HeadBar = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <div className="flex flex-1 border py-2 px-6 h-[70px] rounded-lg shadow-md items-center text-[#32475C] text-opacity-40">
        {/* search */}
        <div className="flex flex-1">
          <Image
            src="/search mart.svg"
            alt="language"
            width={20}
            height={20}
            className="mr-4 object-contain"
          />
          <input
            type="search"
            placeholder="Search (Ctrl+/)"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="outline-none focus:outline-none mr-14 flex-1"
          />
          {/* <h3>Search (Ctrl+/)</h3> */}
        </div>
        {/* profile options */}
        <div className="flex justify-evenly w-[20%] ">
          <button>
            <Image
              src="/language.svg"
              alt="language"
              width={25}
              height={25}
              className="object-contain"
            />
          </button>
          <button>
            <Image
              src="/grid.svg"
              alt="language"
              width={25}
              height={25}
              className="object-contain"
            />
          </button>
          <button>
            <Image
              src="/darkmode.svg"
              alt="language"
              width={25}
              height={25}
              className="object-contain"
            />
          </button>
          <button>
            <Image
              src="/notification.svg"
              alt="language"
              width={25}
              height={25}
              className="object-contain"
            />
          </button>
          <button>
            <Image
              src="/Avatar.svg"
              alt="avatar"
              width={45}
              height={45}
              className="object-contain"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default HeadBar;
