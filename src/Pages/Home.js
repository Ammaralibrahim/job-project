import React, { useState } from "react";

import Logo from "../images/logo.png";
import HomeBg from "../images/home-bg.png";
import People from "../images/people.png";
import Medal from "../images/medal-star.png";
import Wallet from "../images/wallet.png";
import Clock from "../images/clock.png";
import Massage from "../images/massage.png";
import Lovely from "../images/lovely.png";
import Document from "../images/document.png";
import Star from "../images/star.png";
import User from "../images/user.png";
import Trustpilot from "../images/trustpilot.png";
import Accordion from "./dropdown-text";
import Header from "../components/Header"

function Home() {

  return (
    <>
      <div className="relative">
        <img
          src={HomeBg}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative pt-12 bg-gray-900 bg-opacity-50">
          <div className="container px-5">
           <Header/>
          </div>
          <div className="px-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-[#4AC97D] sm:text-5xl sm:leading-none">
                  Win the right to live
                </h2>
                <p className="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                  in the USA!
                </p>

                <div className="flex flex-col md:flex-row">
                  <div className="text-white w-full md:w-xl border-l-4 px-1">
                    The official deadline is running, so hurry up and{" "}
                    <span className="underline">apply here!</span>
                  </div>
                  <div className="flex justify-between gap-2 py-2">
                    <div className="bg-gray-900 text-white w-[60px] h-[60px] shrink-0 rounded-[14px] text-center py-2.5">
                      <p className="font-bold text-sm">27</p>
                      <p className="font-thin text-gray-400 text-xs uppercase">
                        Days
                      </p>
                    </div>
                    <div className="bg-gray-900 text-white w-[60px] h-[60px] shrink-0 rounded-[14px] text-center py-2.5">
                      <p className="font-bold text-sm">24</p>
                      <p className="font-thin text-gray-400 text-xs uppercase">
                        Hours
                      </p>
                    </div>
                    <div className="bg-gray-900 text-white w-[60px] h-[60px] shrink-0 rounded-[14px] text-center py-2.5">
                      <p className="font-bold text-sm">60</p>
                      <p className="font-thin text-gray-400 text-xs uppercase">
                        Minutes
                      </p>
                    </div>
                    <div className="bg-gray-900 text-white w-[60px] h-[60px] shrink-0 rounded-[14px] text-center py-2.5">
                      <p className="font-bold text-sm">60</p>
                      <p className="font-thin text-gray-400 text-xs uppercase">
                        Seconds
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <ul className="space-y-4 text-left text-white dark:text-gray-200">
                    <li className="flex items-center space-x-3">
                      <img src={People} alt="icons" />
                      <span>
                        50,000 people and their families will Live, Work and
                        Study in USA.
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={Medal} alt="icons" />
                      <span>OFFICIAL USA Governmental program.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={Wallet} alt="icons" />
                      <span>Your chance to LIVE, WORK & STUDY in USA.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={Clock} alt="icons" />
                      <span>Simple registration within 5 minutes.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={Massage} alt="icons" />
                      <span>Personal support in every step.</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <img src={Lovely} alt="icons" />
                      <span>
                        Double chance for married people to win the Green Card.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="relative py-3 sm:max-w-md sm:mx-auto">
                {" "}
                <div className="relative px-8 py-8 bg-white md:mx-0 shadow rounded-3xl ">
                  {" "}
                  <div className="max-w-md mx-auto">
                    <div className="flex w-[220px] justify-between ">
                      <svg
                        height="30"
                        viewBox="0 0 1792 1792"
                        width="20"
                        fill="#4AC97D"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1728 893q0 14-10 24l-384 354q-16 14-35 6-19-9-19-29v-224h-1248q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h1248v-224q0-21 19-29t35 5l384 350q10 10 10 23z" />
                      </svg>{" "}
                      <p className="text-[#4AC97D] font-bold text-xl">
                        Check now for free!
                      </p>
                    </div>
                    <div class=" text-sky-950 text-4xl text-center font-bold ">
                      Green card eligibility
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col py-3">
                        <div className="relative  focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 px-3 py-2 bg-slate-100     w-full sm:text-sm  rounded-xl focus:outline-none text-gray-600"
                            placeholder="First Name"
                          />
                          <div className="absolute left-3 top-2"></div>
                        </div>
                      </div>
                      <div className="flex flex-col py-3">
                        <div className="relative  focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 px-3 py-2 bg-slate-100  w-full sm:text-sm  rounded-xl focus:outline-none text-gray-600"
                            placeholder="Lastname"
                          />
                          <div className="absolute left-3 top-2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col py-3">
                        <div className="relative  focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 px-3 py-2 bg-slate-100  w-full sm:text-sm  rounded-xl focus:outline-none text-gray-600"
                            placeholder="Email address"
                          />
                          <div className="absolute left-3 top-2"></div>
                        </div>
                      </div>
                      <div className="flex flex-col py-3">
                        <div className="relative  focus-within:text-gray-600 text-gray-400">
                          <input
                            type="text"
                            className="pr-4 px-3 py-2 bg-slate-100  w-full sm:text-sm  rounded-xl focus:outline-none text-gray-600"
                            placeholder="Your email again"
                          />
                          <div className="absolute left-3 top-2"></div>
                        </div>
                      </div>
                    </div>
                    <div className="divide-y divide-gray-200">
                      <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                        <div className="flex flex-col relative">
                          <input
                            type="text"
                            className="px-4 py-2 bg-slate-100 w-full sm:text-sm rounded-md focus:outline-none text-gray-600 pl-3 pr-12"
                            placeholder="Your country of birth"
                          />
                          <svg
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            height="12"
                            viewBox="0 0 1792 1792"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50-50q10-10 10-23z" />
                          </svg>
                        </div>

                        <div className="flex flex-col relative">
                          <input
                            type="text"
                            className="px-4 py-2 bg-slate-100 w-full sm:text-sm rounded-md focus:outline-none text-gray-600 pl-3 pr-12"
                            placeholder="Marial Status"
                          />
                          <svg
                            className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            height="12"
                            viewBox="0 0 1792 1792"
                            width="12"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50-50q10-10 10-23z" />
                          </svg>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="link-checkbox"
                            type="checkbox"
                            defaultValue=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label
                            htmlFor="link-checkbox"
                            className="ml-2 text-sm font-sm text-gray-900 dark:text-gray-700"
                          >
                            Yes, I finished high school OR I have qualifying
                            training.
                          </label>
                        </div>
                      </div>
                      <div className="pt-4 flex items-center space-x-4">
                        <button className="bg-[#4AC97D] font-bold flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl md:w-lg mx-auto bg-[#F7F8F9] py-10 px-10">
        <div className="flex py-10">
          <img className="mr-3" src={Document} alt="document" />
          <div class=" text-sky-950 text-1xl font-bold">
            Find the right visa for you!
          </div>
        </div>
        <div className="flex py-10">
          <div class=" text-[#49C87C] text-4xl font-medium">
            Diversity Visa Cost
          </div>
        </div>
        <div className="flex flex-col">
          <div className="bg-white px-1 lg:px-10 py-10 h-28 flex justify-between ">
            <div className=" text-black text-1xl font-medium border-l-4 border-sky-800 pt-1 pl-2">
              Mandatory Government Fees for Green Cards
            </div>
            <button class=" h-12 w-32 bg-red-500 text-white text-apply font-semibold rounded-lg">
              Apply
            </button>
          </div>
          <div className="-m-1.5 overflow-x-auto rounded-2xl">
            <div className="p-1.5 min-w-full inline-block align-middle rounded-2xl ">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-white dark:divide-gray-700">
                  <thead>
                    <tr className="bg-[#ffffff] ">
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Fee Type
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Cost (to Applicant Living in the U.S.)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                      >
                        Cost (to Applicant Living Abroad)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        Family Sponsorship Form (I-130)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $535
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $535
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        Green Card Application Form (I-485)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $1140
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        Not required
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        Financial Support Form (I-864)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $0
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $120
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        Work Permit Application Form (I-765) (optional)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $0
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        Not required
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        Travel Permit Application Form (I-131) (optional)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $0
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        Not required
                      </td>
                    </tr>

                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        Biometrics (Fingerprints & Photo)
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $85
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $0
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        State Department Processing
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        Not required
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $325
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        USCIS Immigrant Fee
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        Not required
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        $220
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-black dark:text-black">
                        Medical Examination
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        *Varies
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-black">
                        *Varies
                      </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-white hover:bg-white dark:odd:bg-white dark:even:bg-white dark:hover:bg-white">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black dark:text-black">
                        Total
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black dark:text-black">
                        $1760
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-black dark:text-black">
                        $1200
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="">
              <Accordion
                title="Diversity Visa Timeline"
                description="Açıklama 1 burada yer alacak."
              />
              <Accordion
                title="Diversity Visa FAQs"
                description="Açıklama 2 burada yer alacak."
              />
            </div>
          </div>
          <div className="text-center py-2 lg:text-right lg:text-sm text-xs">
            {" "}
            {/* Conditional styling */}
            Fees are subject to change, please use{" "}
            <span className="underline px-2">this calculator</span>
          </div>

          <div className="container">
            <div className="text-green-400 text-2xl md:text-4xl px-1">
              Let's keep in touch for news
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-white px-5 py-5 lg:px-36">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex py-3 lg:py-12 px-3">
            <img src={Star} alt="Star" className="w-6 h-5 m-1" />
            <div className="font-bold text-xs lg:text-lg text-sky-900">
              Our Jobs Speak for Themselves
            </div>
          </div>

          <div className="flex py-3 lg:py-6 px-3 mt-1 ">
            <img
              src={Trustpilot}
              alt="Trustpilot"
              className="w-20 h-7 lg:w-40 lg:h-16"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row py-3 px-5">
          <div>
            <img src={User} alt="User image" />
          </div>
          <div class="grid">
            <div class="text-lg font-bold px-5 underline text-gray-600 ">
              Yeonseo Choi
            </div>
            <div class="flex px-5 justify-between w-60">
              <div>1 Review</div>
              <div class="flex text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12ZM18 10.2C18 6.57 15.35 4 12 4C8.65 4 6 6.57 6 10.2C6 12.54 7.95 15.64 12 19.34C16.05 15.64 18 12.54 18 10.2ZM12 2C16.2 2 20 5.22 20 10.2C20 13.52 17.33 17.45 12 22C6.67 17.45 4 13.52 4 10.2C4 5.22 7.8 2 12 2Z"
                    fill="#535353"
                  ></path>
                </svg>
                KR
              </div>
            </div>
          </div>
        </div>

        <hr class="h-px mt-3 lg:mt-7 float-left mx-5 w-2/4  lg:w-2/4 bg-gray-700 border-0 dark:bg-gray-300" />

        <div class="text-center lg:text-right lg:w-2/4 text-gray-500">
          Mar 20, 2023
        </div>

        <div class="text-left lg:w-2/4 px-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="auto"
            viewBox="0 0 206 37"
            fill="none"
          >
            <rect width="36.6365" height="36.6365" fill="#00B87C" />
            <path
              d="M30.7402 15.5878L21.2823 15.5878L18.3708 6.59509L15.4421 15.5878L5.98425 15.5706L13.6333 21.1351L10.7046 30.1278L18.3536 24.5634L26.0026 30.1278L23.0912 21.1351L30.7402 15.5878Z"
              fill="#FDFEFE"
            />
            <path
              d="M23.7461 23.1672L23.0915 21.1343L18.3712 24.5626L23.7461 23.1672Z"
              fill="#4BBD97"
            />
            <rect x="42.1323" width="36.6365" height="36.6365" fill="#00B87C" />
            <path
              d="M72.872 15.5878L63.4141 15.5878L60.5027 6.59509L57.574 15.5878L48.1161 15.5706L55.7651 21.1351L52.8364 30.1278L60.4854 24.5634L68.1344 30.1278L65.223 21.1351L72.872 15.5878Z"
              fill="#FDFEFE"
            />
            <path
              d="M65.878 23.1672L65.2233 21.1343L60.5030 24.5626L65.878 23.1672Z"
              fill="#4BBD97"
            />
            <rect x="84.2642" width="36.6365" height="36.6365" fill="#00B87C" />
            <path
              d="M115.004 15.5878L105.546 15.5878L102.635 6.59509L99.7059 15.5878L90.2480 15.5706L97.8970 21.1351L94.9683 30.1278L102.617 24.5634L110.266 30.1278L107.355 21.1351L115.004 15.5878Z"
              fill="#FDFEFE"
            />
            <path
              d="M108.010 23.1672L107.3550 21.1343L102.6350 24.5626L108.010 23.1672Z"
              fill="#4BBD97"
            />
            <rect x="126.396" width="36.6365" height="36.6365" fill="#00B87C" />
            <path
              d="M157.136 15.5878L147.678 15.5878L144.766 6.59509L141.838 15.5878L132.380 15.5706L140.029 21.1351L137.100 30.1278L144.749 24.5634L152.398 30.1278L149.487 21.1351L157.136 15.5878Z"
              fill="#FDFEFE"
            />
            <path
              d="M150.142 23.1672L149.4870 21.1343L144.767 24.5626L150.142 23.1672Z"
              fill="#4BBD97"
            />
            <rect x="168.528" width="36.6365" height="36.6365" fill="#00B87C" />
            <path
              d="M199.268 15.5878L189.810 15.5878L186.899 6.59509L183.970 15.5878L174.5120 15.5706L182.161 21.1351L179.2330 30.1278L186.882 24.5634L194.531 30.1278L191.619 21.1351L199.268 15.5878Z"
              fill="#FDFEFE"
            />
            <path
              d="M192.274 23.1672L191.6190 21.1343L186.8990 24.5626L192.274 23.1672Z"
              fill="#4BBD97"
            />
          </svg>
        </div>

        <div class="text-left px-5 py-3 text-lg font-bold lg:w-2/4 text-gray-500">
          Highly Recommend
        </div>

        <div class="text-left px-5 py-3 text-md font-thin lg:w-2/4 text-gray-500">
          Nikka was a very professional consultant, always ready to assist us
          each step of the way. I was reminded of everything I had to take with
          me to the interview and also later to pick up my passport and my
          son's. Thanks once more; I certainly recommend the service.
        </div>

        <div class="text-left px-5 py-3 text-md font-bold lg:w-2/4 text-gray-500">
          Date of experience: February 28, 2023
        </div>

        <div class="flex w-full py-2 justify-center">
          <div class="py-2 px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="27"
              viewBox="0 0 16 27"
              fill="none"
            >
              <path
                d="M12.5228 24.2528L3.77484 15.5048C2.74172 14.4717 2.74172 12.7811 3.77484 11.748L12.5228 3"
                stroke="#D2D2D2"
                stroke-width="4.98658"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div class="py-2 px-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="27"
              viewBox="0 0 15 27"
              fill="none"
            >
              <path
                d="M2.52295 24.1265L10.7906 15.4825C11.7671 14.4617 11.7671 12.7913 10.7906 11.7704L2.52295 3.12646"
                stroke="#4AC97D"
                stroke-width="4.98662"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="container px-2 mt-10 ">
          <div class="lg:flex lg:justify-between rounded-xl lg:border-l-8 lg:border-sky-800 p-4">
            <div class="lg:w-1/4 pr-4">
              <p class="text-sm">
                Subscribe to be the first to receive updates and gain an
                advantage in your application process.
              </p>
            </div>
            <div class="lg:w-1/2 mt-4 lg:mt-4">
              <form>
                <label
                  for="search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="search"
                    class="block w-full p-4 pl-10 text-sm text-gray-200 bg-gray-100 rounded-xl focus:outline-none dark:bg-gray-200 dark:text-gray-900 dark:focus:outline-none"
                    placeholder="Search"
                    required
                  />

                  <button
                    type="submit"
                    class="text-white flex absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 dark:bg-red-500 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Search
                    <svg
                      className="ml-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="22"
                      viewBox="0 0 7 12"
                      fill="none"
                    >
                      <path
                        d="M1 11L5.59317 6.88384C6.13561 6.39773 6.13561 5.60228 5.59317 5.11617L1 1"
                        stroke="white"
                        stroke-width="2"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-white  shadow dark:bg-[#002A54]">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img src={Logo} className="h-14 mr-3" alt="Gov Assist Logo" />
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium tracking-normal	 text-gray-500 sm:mb-0 dark:text-gray-100">
              <li>
                <a href="#" className="mr-4 underline md:mr-6 ">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 underline md:mr-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 underline md:mr-6 ">
                  Legal Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 underline md:ml-6 ">
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-2 border-gray-200 sm:mx-auto dark:border-gray-100 lg:my-8" />

          <div className="text-sm text-white">
            Disclaimer: GovAssist is not affiliated with any United States
            government agency or department. Costs for consulting services do
            NOT include any government application, medical examination, filing,
            or biometric fees. This website does not provide legal advice and we
            are not a law firm. None of our customer service representatives are
            lawyers and they also do not provide legal advice. We are a private,
            internet-based travel and immigration consultancy provider dedicated
            to helping individuals travel to the United States. You may apply by
            yourself directly at travel.state.gov or at uscis.gov. GovAssist is
            affiliated with the UT law firm GovAssist Legal which provides legal
            services on immigration matters. Only licensed immigration
            professionals can provide advice, explanation, opinion, or
            recommendation about possible legal rights, remedies, defenses,
            options, selection of forms or strategies.
          </div>
        </div>
        <div className="px-5 bg-[#011527]">
          <span className="block text-sm py-9 bg-[#011527] text-gray-500 sm:text-center dark:text-gray-400">
            Copyright © 2016-2023 GovAssist, LLC All Rights Reserved
          </span>
        </div>
      </footer>
    </>
  );
}

export default Home;
