import { PiPathBold, PiGraduationCapBold } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { MdGolfCourse } from "react-icons/md";
import { FaBilibili } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";



// import ItemMenu from "./ItemMenu";

const Menu = () => {
    return (
        <div className="flex h-screen w-44 border-r border-white/20 flex-col items-start bg-black opacity-90">
            <div>


                <div className="mt-14">
                    <div className="w-full px-2">


                        <ul className="w-full text-start">


                            <li className="mt-8 px-1 w-full">
                                <Link to="/overview" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-end  rounded py-1.5 px-4 font-semibold bg-gray-900 text-purple-600">

                                    <span className="w-4/12 text-2xl">
                                        <RiDashboardFill />
                                    </span>


                                    <span className="w-8/12 px-2 py-1.5 text-start text-base text-gray-400 percase font-normal">
                                        Overview
                                    </span>
                                </Link>
                            </li>

                            <li className="mt-8 px-1 w-full">
                                <Link to="/journey" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-start  rounded py-1.5 px-4 text-gray-100 ">

                                    <span className="w-4/12 text-2xl text-gray-300 hover:text-purple-600">
                                        <PiPathBold />
                                    </span>


                                    <span className="w-8/12 px-2 py-1.5 text-start text-base text-gray-400 percase font-normal">
                                        Cursos
                                    </span>
                                </Link>
                            </li>


                            <li className="mt-8 px-1 w-full">
                                <Link to="target" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-start  rounded py-1.5 px-4 text-gray-100 ">

                                    <span className="w-4/12 text-2xl text-gray-300 hover:text-purple-600">
                                        <MdGolfCourse />
                                    </span>


                                    <span className="w-8/12 px-2 py-1.5 text-start text-base text-gray-400 percase font-normal">
                                        Metas
                                    </span>
                                </Link>
                            </li>

                            {/* <li className="mt-8 px-1 w-full">
                                <a href="#" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-start  rounded py-1.5 px-4 text-gray-100 ">

                                    <span className="w-4/12 text-2xl text-gray-300 hover:text-purple-600">
                                        <PiGraduationCapBold />
                                    </span>


                                    <span className="w-8/12 px-2 py-1.5 text-start text-base text-gray-400 percase font-normal">
                                        Cedulas
                                    </span>
                                </a>
                            </li> */}

                            <li className="mt-8 px-1 w-full">
                                <Link to="/docs" className="group w-full hover:opacity-50 duration-300 ease-in-out hover:scale-95 relative flex items-center justify-start  rounded py-1.5 px-4 text-gray-100 ">

                                    <span className="w-4/12 text-2xl text-gray-300 hover:text-purple-600">
                                        <FaBilibili />
                                    </span>


                                    <span className="w-8/12 px-2 text-start py-1.5 text-base text-gray-400 percase font-normal">Docs</span>
                                </Link>
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