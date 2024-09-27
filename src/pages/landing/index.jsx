





import React from "react";


import { BsArrowRight, BsPlayCircleFill } from "react-icons/bs";
import { RxDoubleArrowDown, } from "react-icons/rx";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Testimonial from "./components/Testimonial";




function Landing() {


    const cover = "/assets/images/anunso.gif";
    const video = "/assets/videos/anunso.mp4";




    const playVideo = (event) => {
        const currentVideo = event.target;
        currentVideo.paused ? currentVideo.play() : currentVideo.pause();
    }
    return (
        <main className="w-full h-screen bg-transparent flex flex-col bg-red-500">


            {/* Header */}

            <Header />


            {/* Header */}



            {/* Cover */}


            <Cover />


            {/* Cover */}


            <section className="w-full h-screen flex" id="down">

                <div className="max-w-screen-xl min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                                iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                                minima aliquid tempora. Obcaecati, autem.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="size-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full h-screen flex bg-gradient-to-tl from-black via-black/90 to-black">

                <div className="max-w-screen-xl min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="flex w-full items-center justify-between">


                        <div className="w-8/12 h-full relative">
                            <video onClick={playVideo} className="w-full rounded " src={video} poster={cover}></video>
                            {/* <button onClick={playVideo} className="absolute top-0 h-full w-full text-white flex items-center justify-center text-6xl">
                <BsPlayCircleFill />
              </button> */}
                        </div>


                        <div className="w-4/12 ml-5">
                            <h2 className="text-3xl font-bold sm:text-4xl text-white/90">Find your career path</h2>

                            <p className="my-10 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                                iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                                minima aliquid tempora. Obcaecati, autem.
                            </p>

                            <Link
                                to="/overview"
                                className="mt-8 inline-block rounded bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            <div className="mx-auto sm:w-7/12 px-4 py-8 sm:px-6 sm:py-28 lg:px-8">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
                    <div
                        className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
                    >
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">
                                Pro
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 30$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> 20 users included </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> 5GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Help center access </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Phone support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Community access </span>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Get Started
                        </a>
                    </div>

                    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
                        <div className="text-center">
                            <h2 className="text-lg font-medium text-gray-900">
                                Starter
                                <span className="sr-only">Plan</span>
                            </h2>

                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl"> 20$ </strong>

                                <span className="text-sm font-medium text-gray-700">/month</span>
                            </p>
                        </div>

                        <ul className="mt-6 space-y-2">
                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> 10 users included </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> 2GB of storage </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Email support </span>
                            </li>

                            <li className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-5 text-indigo-700"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>

                                <span className="text-gray-700"> Help center access </span>
                            </li>
                        </ul>

                        <a
                            href="#"
                            className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                        >
                            Get Started
                        </a>
                    </div>
                </div>
            </div>



            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <header>
                        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

                        <p className="mt-4 max-w-md text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
                            dicta incidunt est ipsam, officia dolor fugit natus?
                        </p>
                    </header>

                    <div className="mt-8 block lg:hidden">
                        <button
                            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                        >
                            <span className="text-sm font-medium"> Filters & Sorting </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4 rtl:rotate-180"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>

                    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                        <div className="hidden space-y-4 lg:block">
                            <div>
                                <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Sort By </label>

                                <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm">
                                    <option>Sort By</option>
                                    <option value="Title, DESC">Title, DESC</option>
                                    <option value="Title, ASC">Title, ASC</option>
                                    <option value="Price, DESC">Price, DESC</option>
                                    <option value="Price, ASC">Price, ASC</option>
                                </select>
                            </div>

                            <div>
                                <p className="block text-xs font-medium text-gray-700">Filters</p>

                                <div className="mt-1 space-y-2">
                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                        >
                                            <span className="text-sm font-medium"> Availability </span>

                                            <span className="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> 0 Selected </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                    Reset
                                                </button>
                                            </header>

                                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                                <li>
                                                    <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterInStock"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterPreOrder"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterOutOfStock"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>

                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                        >
                                            <span className="text-sm font-medium"> Price </span>

                                            <span className="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> The highest price is $600 </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                    Reset
                                                </button>
                                            </header>

                                            <div className="border-t border-gray-200 p-4">
                                                <div className="flex justify-between gap-4">
                                                    <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">$</span>

                                                        <input
                                                            type="number"
                                                            id="FilterPriceFrom"
                                                            placeholder="From"
                                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>

                                                    <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                                        <span className="text-sm text-gray-600">$</span>

                                                        <input
                                                            type="number"
                                                            id="FilterPriceTo"
                                                            placeholder="To"
                                                            className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </details>

                                    <details
                                        className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
                                    >
                                        <summary
                                            className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
                                        >
                                            <span className="text-sm font-medium"> Colors </span>

                                            <span className="transition group-open:-rotate-180">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="size-4"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    />
                                                </svg>
                                            </span>
                                        </summary>

                                        <div className="border-t border-gray-200 bg-white">
                                            <header className="flex items-center justify-between p-4">
                                                <span className="text-sm text-gray-700"> 0 Selected </span>

                                                <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
                                                    Reset
                                                </button>
                                            </header>

                                            <ul className="space-y-1 border-t border-gray-200 p-4">
                                                <li>
                                                    <label htmlFor="FilterRed" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterRed"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Red </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterBlue" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterBlue"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Blue </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterGreen" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterGreen"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Green </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterOrange" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterOrange"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Orange </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterPurple" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterPurple"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Purple </span>
                                                    </label>
                                                </li>

                                                <li>
                                                    <label htmlFor="FilterTeal" className="inline-flex items-center gap-2">
                                                        <input
                                                            type="checkbox"
                                                            id="FilterTeal"
                                                            className="size-5 rounded border-gray-300"
                                                        />

                                                        <span className="text-sm font-medium text-gray-700"> Teal </span>
                                                    </label>
                                                </li>
                                            </ul>
                                        </div>
                                    </details>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                <li>
                                    <a href="#" className="group block overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt=""
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />

                                        <div className="relative bg-white pt-3">
                                            <h3
                                                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Basic Tee
                                            </h3>

                                            <p className="mt-2">
                                                <span className="sr-only"> Regular Price </span>

                                                <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="group block overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt=""
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />

                                        <div className="relative bg-white pt-3">
                                            <h3
                                                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Basic Tee
                                            </h3>

                                            <p className="mt-2">
                                                <span className="sr-only"> Regular Price </span>

                                                <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                            </p>
                                        </div>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="group block overflow-hidden">
                                        <img
                                            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                            alt=""
                                            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                                        />

                                        <div className="relative bg-white pt-3">
                                            <h3
                                                className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                                            >
                                                Basic Tee
                                            </h3>

                                            <p className="mt-2">
                                                <span className="sr-only"> Regular Price </span>

                                                <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                                            </p>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* <Testimonial /> */}







            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.

  Plugins:
    - @tailwindcss/forms
*/}

            <section className="bg-gray-50">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit
                        </h2>

                        <p className="hidden text-gray-500 sm:mt-4 sm:block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia blanditiis
                            repellat in, vero, aperiam porro ipsum laboriosam consequuntur exercitationem incidunt
                            tempora nisi?
                        </p>
                    </div>

                    <div className="mx-auto mt-8 max-w-xl">
                        <form action="#" className="sm:flex sm:gap-4">
                            <div className="sm:flex-1">
                                <label htmlFor="email" className="sr-only">Email</label>

                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                                />
                            </div>

                            <button
                                type="submit"
                                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                            >
                                <span className="text-sm font-medium"> Sign Up </span>

                                <svg
                                    className="size-5 rtl:rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </section>



            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by eCommerce Businesses</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
      provident impedit esse recusandae facere libero harum sequi.
    </p>
  </div>

  <dl
    className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
  >
    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
    </div>

    <div className="flex flex-col px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Downloads</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
    </div>
  </dl>
</div>




            <footer className=" w-full bg-black/90">
                <div className="bg-gradient-to-br from-black relative  w-full px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
                        <a
                            className="inline-block animate-bounce duration-400 rounded-full bg-black p-3 text-white shadow transition hover:opacity-80 sm:p-3 lg:p-4"
                            href="#"
                        >
                            <span className="sr-only">Voltar</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="lg:flex lg:items-end lg:justify-between ">
                        <div>
                            <div className="flex justify-center text-white lg:justify-start mulish-black uppercase text-xl">
                                Anunso
                            </div>

                            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-white/70 lg:text-left">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                                cum itaque neque.
                            </p>
                        </div>

                        <ul
                            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
                        >
                            <li>
                                <a className="text-white/80 transition hover:text-gray-700/75" href="#"> About </a>
                            </li>

                            <li>
                                <a className="text-white/80 transition hover:text-gray-700/75" href="#"> Services </a>
                            </li>

                            <li>
                                <a className="text-gray-300 transition hover:text-gray-700/75" href="#"> Projects </a>
                            </li>

                            <li>
                                <a className="text-white/80 transition hover:text-gray-700/75" href="#"> Blog </a>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-300 lg:text-right">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}

export default Landing;