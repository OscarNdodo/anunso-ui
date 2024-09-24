import { PiPathBold } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { FaSchoolFlag } from "react-icons/fa6";
import { FaBilibili } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";



// import ItemMenu from "./ItemMenu";

const Menu = () => {
    return (
        <div className="flex h-screen w-44 border-r border-gray-800 flex-col items-start bg-black opacity-90">
            <div>


                <div className="mt-14">
                    <div className="w-full px-2">


                        <ul className="w-full text-start">


                            <li className="mt-8 px-1 w-full">
                                <a href="#" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-end  rounded py-1.5 px-4 font-semibold bg-gray-900 text-purple-600">

                                    <span className="w-4/12 text-2xl">
                                        <RiDashboardFill />
                                    </span>


                                    <span className="w-8/12 px-2 py-1.5 text-start text-base text-gray-400 percase font-normal">
                                        Overview
                                    </span>
                                </a>
                            </li>

                            <li className="mt-8 px-1 w-full">
                                <a href="#" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-start  rounded py-1.5 px-4 text-gray-100 ">

                                    <span className="w-4/12 text-2xl text-gray-300 hover:text-purple-600">
                                        <PiPathBold />
                                    </span>


                                    <span className="w-8/12 px-2 py-1.5 text-start text-base text-gray-400 percase font-normal">
                                        Cursos
                                    </span>
                                </a>
                            </li>


                            <li className="mt-8 px-1 w-full">
                                <a href="#" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-start  rounded py-1.5 px-4 text-gray-100 ">

                                    <span className="w-4/12 text-2xl text-gray-300 hover:text-purple-600">
                                        <FaSchoolFlag />
                                    </span>


                                    <span className="w-8/12 px-2 py-1.5 text-start text-base text-gray-400 percase font-normal">
                                        Escolas
                                    </span>
                                </a>
                            </li>

                            <li className="mt-8 px-1 w-full">
                                <a href="#" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-start  rounded py-1.5 px-4 text-gray-100 ">

                                    <span className="w-4/12 text-2xl text-gray-300 hover:text-purple-600">
                                        <FaBilibili />
                                    </span>


                                    <span className="w-8/12 px-2 py-1.5 text-center text-base text-gray-400 percase font-normal">
                                        Docs
                                    </span>
                                </a>
                            </li>



                        </ul>
                    </div>
                </div>
            </div>

            <div className="w-40 absolute bottom-0 bg-black p-2">

                <li className="mt-8 px-1 w-full">
                    <a href="#" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-start  rounded py-1.5 px-4 text-gray-100 ">

                        <span className="w-4/12 text-2xl text-gray-300 hover:text-purple-600">
                            <IoMdSettings />
                        </span>


                        <span className="w-8/12 px-2 py-1.5 text-start text-base text-gray-400 percase font-normal">
                            Settings
                        </span>
                    </a>
                </li>
            </div>
        </div>


    )
}

export default Menu;