import React from "react";
import Header from "../components/DiversityHeader";

export default function Diversity() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <div className="relative flex flex-col py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-[#01264A]">
        <div className="flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-32 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-6">
              <div className="py-4">
                <div className="text-5xl font-bold text-white py-2">
                  Eletronic
                </div>
                <div className="text-5xl font-bold text-[#49C87C] py-2">
                  diversity visa
                </div>
                <div className="text-5xl font-bold text-white py-2">
                  entry form
                </div>
              </div>
              <div className="">
                <p className="text-white text-xl md:text-3xl font-sm">
                  Here you will fill all <br /> your information to <br /> reach
                  your dream.
                </p>
              </div>
            </div>
            <div className="flex items-center text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="25"
                viewBox="0 0 32 35"
                fill="none"
              >
                <path
                  d="M19.1187 5.94436L16.0006 2.05469"
                  stroke="white"
                  strokeWidth="2.34791"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28.6139 25.6128C26.362 30.3056 21.5589 33.5497 15.9999 33.5497C8.26767 33.5497 2 27.282 2 19.5498C2 11.8176 8.26767 5.54993 15.9999 5.54993C17.0707 5.54993 18.1101 5.69174 19.118 5.92795"
                  stroke="white"
                  strokeWidth="2.34791"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.1658 11.1885C28.9138 13.5192 30.0005 16.4009 30.0005 19.5505"
                  stroke="#4AC97D"
                  strokeWidth="2.34791"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.1259 23.9757V15.5665L9.76367 18.1964"
                  stroke="white"
                  strokeWidth="2.34791"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1502 15.5665C20.8824 15.5665 22.2998 16.9838 22.2998 18.7161V20.8421C22.2998 22.5743 20.8824 23.9916 19.1502 23.9916C17.4179 23.9916 16.0006 22.5743 16.0006 20.8421V18.7161C16.0006 16.9681 17.4179 15.5665 19.1502 15.5665Z"
                  stroke="white"
                  strokeWidth="2.34791"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="px-2">10 minutes to finish</div>
            </div>
            <div className="my-4 pl-8 text-sm text-white border-l-4 border-white">
              This is a full copy of the official DV Lottery application form.
              Use it for training only. You will need to apply on the official
              website www.dvlottery.state.gov when it opens to take part in the
              lottery.
            </div>
          </div>
        </div>
        <div className="inset-y-0 right-0 w-full max-w-xl  mx-auto lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
        <div class="h-96 lg:h-screen  bg-white w-full flex flex-col justify-center items-center relative">
  <div className="text-[#01264A] text-5xl mb-6 text-center">
    Are you ready to begin?
  </div>
  <button
    type="button"
    class="p-3 w-2/3  mt-3 text-base font-medium text-white bg-[#49C87C] hover:bg-[#49C87C] focus:ring-4 focus:outline-none focus:ring-[#49C87C] rounded-lg text-center dark:bg-[#49C87C] dark:hover:bg-[#49C87C] dark:focus:ring-[#49C87C]"
  >
    Start Now!
  </button>
  <div className="absolute bottom-4 right-4 text-gray-500 text-center">
    Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
  </div>
</div>

</div>

      </div>
    </>
  );
}
