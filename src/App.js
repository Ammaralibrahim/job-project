import "./index.css";
import Logo from "./logo.png";
import Home from "./home-bg.png";
import People from "./people.png";
import Medal from "./medal-star.png";
import Wallet from "./wallet.png";
import Clock from "./clock.png";
import Massage from "./massage.png";
import Lovely from "./lovely.png";
import Document from "./document.png";
import Accordion from "./dropdown-text";

function App() {
  return (
    <>
        <div className="relative">
          <img
            src={Home}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative pt-12 bg-gray-900 bg-opacity-50">
            <nav className="bg-white mx-12 	 rounded-xl h-[119px]   border-gray-200 dark:bg-[#1F3655]">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 pt-9">
                <a href="/" className="flex items-center">
                  <div className="w-20">
                    <img src={Logo} alt="logo" />
                  </div>
                </a>
                <div className="flex items-center md:order-2">
                  <button
                    type="button"
                    data-dropdown-toggle="language-dropdown-menu"
                    className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <svg
                      className="w-5 h-5 mr-2 rounded-full"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 3900 3900"
                    >
                      <path fill="#b22234" d="M0 0h7410v3900H0z" />
                      <path
                        d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                        stroke="#fff"
                        strokeWidth={300}
                      />
                      <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                      <g fill="#fff">
                        <g id="d">
                          <g id="c">
                            <g id="e">
                              <g id="b">
                                <path
                                  id="a"
                                  d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                />
                                <use xlinkHref="#a" y={420} />
                                <use xlinkHref="#a" y={840} />
                                <use xlinkHref="#a" y={1260} />
                              </g>
                              <use xlinkHref="#a" y={1680} />
                            </g>
                            <use xlinkHref="#b" x={247} y={210} />
                          </g>
                          <use xlinkHref="#c" x={494} />
                        </g>
                        <use xlinkHref="#d" x={988} />
                        <use xlinkHref="#c" x={1976} />
                        <use xlinkHref="#e" x={2470} />
                      </g>
                    </svg>
                    English (US)
                  </button>
                  {/* Dropdown */}

                  <button
                    data-collapse-toggle="navbar-language"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-language"
                    aria-expanded="false"
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
                </div>
              </div>
            </nav>

            <div className="px-12 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
              <div className="flex flex-col items-center justify-between xl:flex-row">
                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                  <h2 className="max-w-lg mb-6 font-sans text-4xl	font-bold tracking-tight text-[#4AC97D] sm:text-5xl sm:leading-none">
                    Win the right to live
                  </h2>
                  <p className="max-w-lg mb-6 font-sans text-4xl	font-bold tracking-tight text-white sm:text-5xl sm:leading-none">
                    in the USA!
                  </p>

                  <div className="flex flex-col md:flex-row">
                    <div className="text-white w-full  md:w-xl border-l-4 px-1">
                      The official deadline is running, so hurry up and{" "}
                      <span className="underline">apply here!</span>
                    </div>
                    <div className="flex justify-between gap-2 py-2">
                      <div className="bg-gray-900 text-white  w-[70px] h-[70px] shrink-0 rounded-[14px] text-center py-3">
                        <p className="font-bold text-xl">27</p>
                        <p className="font-thin text-gray-400 text-xs uppercase">
                          Days
                        </p>
                      </div>
                      <div className="bg-gray-900 text-white  w-[70px] h-[70px]  shrink-0 rounded-[14px] text-center py-3">
                        <p className="font-bold text-xl">24</p>
                        <p className="font-thin text-gray-400 text-xs uppercase">
                          Hours
                        </p>
                      </div>
                      <div className="bg-gray-900 text-white  w-[70px] h-[70px] shrink-0 rounded-[14px] text-center py-3">
                        <p className="font-bold text-xl">60</p>
                        <p className="font-thin text-gray-400 text-xs uppercase">
                          Minutes
                        </p>
                      </div>
                      <div className="bg-gray-900 text-white  w-[70px] h-[70px] shrink-0 rounded-[14px] text-center py-3">
                        <p className="font-bold text-xl">60</p>
                        <p className="font-thin text-gray-400 text-xs uppercase">
                          Seconds
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <ul className="space-y-4 text-left text-white dark:text-gray-900">
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
                          Double chance for married people to win the Green
                          Card.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative py-3 sm:max-w-md sm:mx-auto">
                  {" "}
                  <div className="relative px-4 py-8 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-">
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
                      <div className="flex items-center space-x-16">
                        <div className="flex flex-col">
                          <label className="text-transparent">Start</label>
                          <div className="relative  focus-within:text-gray-600 text-gray-400">
                            <input
                              type="text"
                              className="pr-4 px-3 py-2 bg-slate-100     w-full sm:text-sm  rounded-xl focus:outline-none text-gray-600"
                              placeholder="First Name"
                            />
                            <div className="absolute left-3 top-2"></div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-transparent">End</label>
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
                      <div className="flex items-center space-x-16">
                        <div className="flex flex-col">
                          <label className="text-transparent">Start</label>
                          <div className="relative  focus-within:text-gray-600 text-gray-400">
                            <input
                              type="text"
                              className="pr-4 px-3 py-2 bg-slate-100  w-full sm:text-sm  rounded-xl focus:outline-none text-gray-600"
                              placeholder="Email address"
                            />
                            <div className="absolute left-3 top-2"></div>
                          </div>
                        </div>
                        <div className="flex flex-col">
                          <label className="text-transparent">End</label>
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
                              className="px-4 py-2 bg-slate-100 w-full sm:text-sm rounded-md focus:outline-none text-gray-600 pl-3 pr-12" // Stil sınıfları eklenmiş
                              placeholder="Your country of birth"
                            />
                            <svg
                              className="absolute right-3 top-1/2 transform -translate-y-1/2"
                              height="12"
                              viewBox="0 0 1792 1792"
                              width="12"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10-10 10-23z" />
                            </svg>
                          </div>

                          <div className="flex flex-col relative">
                            <input
                              type="text"
                              className="px-4 py-2 bg-slate-100 w-full sm:text-sm rounded-md focus:outline-none text-gray-600 pl-3 pr-12" // Stil sınıfları eklenmiş
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
        <div className="container max-w-7xl md:w-lg mx-auto bg-[#F7F8F9] py-10">
          <div className="flex py-10">
            <img className="mr-3" src={Document} alt="document" />{" "}
            <div class=" text-sky-950 text-1xl font-bold">
              Find the right visa for you!
            </div>
          </div>
          <div className="flex py-10">
            <div class=" text-[#49C87C] text-4xl font-medium">
              Find the right visa for you!
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-white px-10 py-10 h-28 flex justify-between ">
              <div className=" text-black text-1xl font-medium border-l-4 border-sky-800 pt-1 pl-2">
                {" "}
                Mandatory Government Fees for Green Cards
              </div>
              <button class=" h-12 w-32 bg-red-500 text-white text-apply font-semibold rounded-lg">
                Apply
              </button>
            </div>
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="overflow-hidden">
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
                          Cost (to Applicat Living in the U.S.)
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
              <div className="p-4">
                <Accordion
                  title="Diversity Visa Timeline"
                  description="Açıklama 1 burada yer alacak."
                />
                <Accordion
                  title="Diversity Visa FAQs"
                  description="Açıklama 2 burada yer alacak."
                />
              </div>
              <div className="text-green-400 text-2xl md:text-4xl px-10">
                Let's keep in touch for news
              </div>
            </div>
            <div className="container px-9 mt-10" >
              <div class="lg:flex lg:justify-between lg:border-l-4 lg:border-sky-800 p-4">
                <div class="lg:w-1/4 pr-4">
                  <p class="text-lg">
                    Subscribe to be the first to receive updates and gain an
                    advantage in your application process.
                  </p>
                </div>
                <div class="lg:w-1/2 mt-4 lg:mt-4">
                  <input
                    type="text"
                    class="border p-2 lg:w-2/3 w-full rounded-md"
                    placeholder="Email Address"
                  />
                  <button class="bg-red-300 text-xs text-white p-2 mt-2  lg:mt-0 lg:ml-2 lg:w-1/3 w-full lg:w-auto rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
