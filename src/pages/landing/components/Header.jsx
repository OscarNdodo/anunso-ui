import { useState } from "react";
import { Link } from "react-router-dom";




function Header() {



    const img = "/assets/images/user.png";



    const [popup, setPopup] = useState(false);
    return (

        <header className="px-10 py-3 w-full flex items-center justify-between fixed left-0 top-0 bg-gradient-to-br from-black/40 z-30">
            <h1 className="text-2xl font-black mulish-black text-white uppercase ">Anunso</h1>


            <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                    <ul className="flex items-center gap-6 text-base">
                        <li>
                            <a className="text-white/90 transition hover:text-white/65" href="#"> Sobre </a>
                        </li>

                        <li>
                            <a className="text-white/90 transition hover:text-white/65" href="#"> Termos </a>
                        </li>

                        <li>
                            <a className="text-white/90 transition hover:text-white/65" href="#"> Parceiros </a>
                        </li>

                        <li>
                            <a className="text-white/90 transition hover:text-white/65" href="#"> Blog </a>
                        </li>
                    </ul>
                </nav>

                <div className="hidden md:relative md:block">
                    <button
                        onClick={() => setPopup(!popup)}
                        type="button"
                        className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                    >
                        <span className="sr-only">Toggle dashboard menu</span>

                        <img
                            src={img}
                            className="size-10 object-cover"
                        />
                    </button>

                    <div
                        className={
                            `${popup ? "flex" : "hidden"} flex-col absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg`
                        }
                        role="menu"
                    >
                        <div className="p-2">
                            <Link
                                to="/login"
                                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                            >
                                Minha conta
                            </Link>

                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                            >
                                Meus cursos
                            </a>

                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                                role="menuitem"
                            >
                                Notificações
                            </a>
                        </div>

                        <div className="p-2">
                            <form method="POST" action="#">
                                <button
                                    type="submit"
                                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                                    role="menuitem"
                                >
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
                                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                                        />
                                    </svg>

                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

        </header>
    );
}



export default Header;