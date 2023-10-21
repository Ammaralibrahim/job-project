import React, { useState } from "react";
import Logo from "../images/logo.png";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!isMenuOpen);
    };
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#1F3655] rounded-xl  ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <img src={Logo} className="h-12 mr-3" alt="Flowbite Logo" />
      </a>
      <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-language"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-language"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } items-center justify-between w-full md:flex md:w-auto md:order-1`}
        id="navbar-language"
      >
       <div className="flex items-center md:order-2">
        {/* Dropdown */}
    
        <ul className="flex flex-col font-medium items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-transparent md:dark:bg-transparent dark:border-transparent">
          <li>
            <button
              type="button"
              class="py-2.5 px-5 mr-2 mb-2 flex text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-sm border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-transparent dark:text-gray-400 dark:border-transparent dark:hover:text-white dark:hover:bg-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="20"
                viewBox="0 0 28 20"
                fill="none"
              >
                <rect width="28" height="20" rx="2" fill="white" />
                <mask
                  id="mask0_3646_161"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="28"
                  height="20"
                >
                  <rect width="28" height="20" rx="2" fill="white" />
                </mask>
                <g mask="url(#mask0_3646_161)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z"
                    fill="#D02F44"
                  />
                  <rect width="12" height="9.33333" fill="#46467F" />
                  <g filter="url(#filter0_d_3646_161)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.66668 2.00004C2.66668 2.36823 2.3682 2.66671 2.00001 2.66671C1.63182 2.66671 1.33334 2.36823 1.33334 2.00004C1.33334 1.63185 1.63182 1.33337 2.00001 1.33337C2.3682 1.33337 2.66668 1.63185 2.66668 2.00004ZM5.33334 2.00004C5.33334 2.36823 5.03487 2.66671 4.66668 2.66671C4.29849 2.66671 4.00001 2.36823 4.00001 2.00004C4.00001 1.63185 4.29849 1.33337 4.66668 1.33337C5.03487 1.33337 5.33334 1.63185 5.33334 2.00004ZM7.33334 2.66671C7.70153 2.66671 8.00001 2.36823 8.00001 2.00004C8.00001 1.63185 7.70153 1.33337 7.33334 1.33337C6.96515 1.33337 6.66668 1.63185 6.66668 2.00004C6.66668 2.36823 6.96515 2.66671 7.33334 2.66671ZM10.6667 2.00004C10.6667 2.36823 10.3682 2.66671 10 2.66671C9.63182 2.66671 9.33334 2.36823 9.33334 2.00004C9.33334 1.63185 9.63182 1.33337 10 1.33337C10.3682 1.33337 10.6667 1.63185 10.6667 2.00004ZM3.33334 4.00004C3.70153 4.00004 4.00001 3.70156 4.00001 3.33337C4.00001 2.96518 3.70153 2.66671 3.33334 2.66671C2.96515 2.66671 2.66668 2.96518 2.66668 3.33337C2.66668 3.70156 2.96515 4.00004 3.33334 4.00004ZM6.66668 3.33337C6.66668 3.70156 6.3682 4.00004 6.00001 4.00004C5.63182 4.00004 5.33334 3.70156 5.33334 3.33337C5.33334 2.96518 5.63182 2.66671 6.00001 2.66671C6.3682 2.66671 6.66668 2.96518 6.66668 3.33337ZM8.66668 4.00004C9.03487 4.00004 9.33334 3.70156 9.33334 3.33337C9.33334 2.96518 9.03487 2.66671 8.66668 2.66671C8.29849 2.66671 8.00001 2.96518 8.00001 3.33337C8.00001 3.70156 8.29849 4.00004 8.66668 4.00004ZM10.6667 4.66671C10.6667 5.0349 10.3682 5.33337 10 5.33337C9.63182 5.33337 9.33334 5.0349 9.33334 4.66671C9.33334 4.29852 9.63182 4.00004 10 4.00004C10.3682 4.00004 10.6667 4.29852 10.6667 4.66671ZM7.33334 5.33337C7.70153 5.33337 8.00001 5.0349 8.00001 4.66671C8.00001 4.29852 7.70153 4.00004 7.33334 4.00004C6.96515 4.00004 6.66668 4.29852 6.66668 4.66671C6.66668 5.0349 6.96515 5.33337 7.33334 5.33337ZM5.33334 4.66671C5.33334 5.0349 5.03487 5.33337 4.66668 5.33337C4.29849 5.33337 4.00001 5.0349 4.00001 4.66671C4.00001 4.29852 4.29849 4.00004 4.66668 4.00004C5.03487 4.00004 5.33334 4.29852 5.33334 4.66671ZM2.00001 5.33337C2.3682 5.33337 2.66668 5.0349 2.66668 4.66671C2.66668 4.29852 2.3682 4.00004 2.00001 4.00004C1.63182 4.00004 1.33334 4.29852 1.33334 4.66671C1.33334 5.0349 1.63182 5.33337 2.00001 5.33337ZM4.00001 6.00004C4.00001 6.36823 3.70153 6.66671 3.33334 6.66671C2.96515 6.66671 2.66668 6.36823 2.66668 6.00004C2.66668 5.63185 2.96515 5.33337 3.33334 5.33337C3.70153 5.33337 4.00001 5.63185 4.00001 6.00004ZM6.00001 6.66671C6.3682 6.66671 6.66668 6.36823 6.66668 6.00004C6.66668 5.63185 6.3682 5.33337 6.00001 5.33337C5.63182 5.33337 5.33334 5.63185 5.33334 6.00004C5.33334 6.36823 5.63182 6.66671 6.00001 6.66671ZM9.33334 6.00004C9.33334 6.36823 9.03487 6.66671 8.66668 6.66671C8.29849 6.66671 8.00001 6.36823 8.00001 6.00004C8.00001 5.63185 8.29849 5.33337 8.66668 5.33337C9.03487 5.33337 9.33334 5.63185 9.33334 6.00004ZM10 8.00004C10.3682 8.00004 10.6667 7.70156 10.6667 7.33337C10.6667 6.96518 10.3682 6.66671 10 6.66671C9.63182 6.66671 9.33334 6.96518 9.33334 7.33337C9.33334 7.70156 9.63182 8.00004 10 8.00004ZM8.00001 7.33337C8.00001 7.70156 7.70153 8.00004 7.33334 8.00004C6.96515 8.00004 6.66668 7.70156 6.66668 7.33337C6.66668 6.96518 6.96515 6.66671 7.33334 6.66671C7.70153 6.66671 8.00001 6.96518 8.00001 7.33337ZM4.66668 8.00004C5.03487 8.00004 5.33334 7.70156 5.33334 7.33337C5.33334 6.96518 5.03487 6.66671 4.66668 6.66671C4.29849 6.66671 4.00001 6.96518 4.00001 7.33337C4.00001 7.70156 4.29849 8.00004 4.66668 8.00004ZM2.66668 7.33337C2.66668 7.70156 2.3682 8.00004 2.00001 8.00004C1.63182 8.00004 1.33334 7.70156 1.33334 7.33337C1.33334 6.96518 1.63182 6.66671 2.00001 6.66671C2.3682 6.66671 2.66668 6.96518 2.66668 7.33337Z"
                      fill="url(#paint0_linear_3646_161)"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_d_3646_161"
                    x="1.33334"
                    y="1.33337"
                    width="9.33334"
                    height="7.66663"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_3646_161"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_3646_161"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_3646_161"
                    x1="1.33334"
                    y1="1.33337"
                    x2="1.33334"
                    y2="8.00004"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="#F0F0F0" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="px-2 text-white font-bold">English</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="21" viewBox="0 0 12 6" fill="none">
    <path d="M5.99999 5.9757C5.51542 5.9757 5.03085 5.78879 4.66396 5.4219L0.150563 0.908509C-0.0501876 0.707759 -0.0501876 0.375483 0.150563 0.174733C0.351313 -0.0260177 0.683589 -0.0260177 0.88434 0.174733L5.39774 4.68813C5.73002 5.0204 6.26996 5.0204 6.60224 4.68813L11.1157 0.174733C11.3164 -0.0260177 11.6487 -0.0260177 11.8494 0.174733C12.0502 0.375483 12.0502 0.707759 11.8494 0.908509L7.33602 5.4219C6.96913 5.78879 6.48456 5.9757 5.99999 5.9757Z" fill="white"/>
    </svg>
            </button>
          </li>
          <li>
          <button type="button" class="py-2.5 px-7 mr-2 mb-2 text-sm font-medium rounded-sm text-white focus:outline-none border-[2px]  dark:bg-transparent">LIVE CHAT</button>
    
          </li>
        </ul>
      </div>
      </div>
    </div>
    </nav>
  )
}
