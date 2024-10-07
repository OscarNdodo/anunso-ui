





import React from "react";


import { BsArrowRight, BsPlayCircleFill } from "react-icons/bs";
import { RxDoubleArrowDown, } from "react-icons/rx";
import { Link } from "react-router-dom";
import Header from "./components/Header";
import Cover from "./components/Cover";
import Testimonial from "./components/Testimonial";
import Explain from "./components/Explain";
import Price from "./components/Price";
import Products from "./components/Products";
import FeedBack from "./components/FeedBack";




function Landing() {


    return (
        <main className="w-full h-screen bg-transparent flex flex-col bg-red-500">


            {/* Header */}
            <Header />
            {/* Header */}



            {/* Cover */}
            <Cover />
            {/* Cover */}


            {/* Explain in Video */}
            <Explain />
            {/* Explain in Video */}




            {/* Price */}
            <Price />
            {/* Price */}



            {/* Course */}

            {/* <Products /> */}

            {/* Course */}



            {/* Fedback */}


                <FeedBack />


            {/* Fedback */}


            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-36 bg-white lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-gray-900 uppercase mulish-bold sm:text-4xl">
                        Os números falam por todos</h2>

                    <p className="mt-4 text-gray-500 sm:text-lg">
                        Os números falam por todos que fazem parte desta família, que desde a ascensão acredita em cada membro da família e está aberta para novos membros.
                    </p>
                </div>

                <dl
                    className="mg-6 grid grid-cols-1 gap-4 divide-y divide-gray-100 sm:mt-8 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
                >
                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Estudantes</dt>

                        <dd className="text-4xl font-extrabold text-indigo-600 mulish-bold md:text-5xl">436</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Instituições</dt>

                        <dd className="text-4xl font-extrabold text-indigo-600 mulish-bold md:text-5xl">91</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Cursos</dt>

                        <dd className="text-4xl font-extrabold text-indigo-600 mulish-bold md:text-5xl">286</dd>
                    </div>

                    <div className="flex flex-col px-4 py-8 text-center">
                        <dt className="order-last text-lg font-medium text-gray-500">Inscrições</dt>

                        <dd className="text-4xl font-extrabold text-indigo-600 mulish-bold md:text-5xl">108</dd>
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

                            <p className="mx-auto max-w-md text-center leading-relaxed text-white/70 lg:text-left">
                                O melhor lugar na internet para aprender novas habilidades em Mozambique, sem sair de casa.
                            </p>
                        </div>

                        <ul
                            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-5"
                        >
                            <li>
                                <a className="text-white/80 transition hover:text-gray-700/75" href="#"> Sobre </a>
                            </li>

                            <li>
                                <a className="text-white/80 transition hover:text-gray-700/75" href="#"> Termos </a>
                            </li>

                            <li>
                                <a className="text-gray-300 transition hover:text-gray-700/75" href="#"> Parceiros </a>
                            </li>

                            <li>
                                <a className="text-white/80 transition hover:text-gray-700/75" href="#"> Blog </a>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-12 text-center text-sm text-gray-500 lg:text-right">
                        Copyright &copy; 2024. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}

export default Landing;