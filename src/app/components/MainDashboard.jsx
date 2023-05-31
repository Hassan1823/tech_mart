"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


// local Imports 
import DashboardTable from './DashboardTable'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MainDashboard = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="flex flex-col flex-1 h-full border rounded-lg shadow-md p-2">
        <div className="flex w-full mx-2 my-5 justify-around gap-4 h-[70px]">
          {/* search bar */}
          <div className="border rounded-lg shadow-lg flex justify-between items-center h-[70px] flex-1">
            <div className="flex flex-1">
              <Image
                src="/search mart.svg"
                alt="language"
                width={20}
                height={20}
                className="mx-4 object-contain "
              />
              <input
                type="search"
                placeholder="Search (Ctrl+/)"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="outline-none focus:outline-none flex-1 mr-8"
              />
            </div>
            <buton className="bg-[#015FCC] text-white rounded-lg h-full w-[150px] flex justify-center items-center text-[18px] font-mnedium leading-8 cursor-pointer">
              Search
            </buton>
          </div>
          {/* status */}
          <div className="w-[20%] flex justify-center">
            <Menu as="div" className="relative inline-block tw-[20%] justify-centerext-left">
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-6 py-5 text-[18px] font-medium text-[#32475C] text-opacity-80 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      Select Role
                      <ChevronDownIcon
                        className="-mr-1 h-7 w-7 text-gray-400 ml-14"
                        aria-hidden="true"
                      />
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
                              Baisc
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
                              Premium
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
                              Block
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </Menu>
          </div>
          {/* export */}
          <div className="w-[20%] flex justify-center">
            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-8 py-3 text-[18px] font-semibold text-black ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      <div className="bg-[#4B83C1] rounded-full p-2 mr-10 ml-2">
                        <Image
                          src="/export.svg"
                          alt="export "
                          width={30}
                          height={30}
                        />
                      </div>
                      Export
                      {/* <ChevronDownIcon
                        className="-mr-1 h-7 w-7 text-gray-400 ml-14"
                        aria-hidden="true"
                    /> */}
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
                              PDF{" "}
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
                              Excel
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
                              CSV
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
                              Word
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
                              Copy
                            </Link>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </Menu>
          </div>
        </div>
        <DashboardTable />
      </div>
    </>
  );
};

export default MainDashboard;
