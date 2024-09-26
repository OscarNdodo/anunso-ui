import { GiFlyingFlag } from "react-icons/gi";
import { GoStar, GoStarFill } from "react-icons/go";
import { BsFillBookmarkFill, BsBookmark, BsEye, BsCheck2Circle } from "react-icons/bs";
import { FaSchoolFlag } from "react-icons/fa6";
import { useState } from "react";

const Course = ({ type, name, price, duration }) => {
    const [save, setSave] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [modal, setModal] = useState(false);


    function closeModal() {
        setModal(false);
    }

    return (
        <div
            onMouseEnter={() => setSubscribe(true)}
            onMouseLeave={() => setSubscribe(false)}
            className="w-full relative  h-54 flex flex-col justify-end  bg-white/50 rounded-xl  overflow-hidden ">

            {/* Link */}
            {
                subscribe && (

                    <a href="#" className="w-full absolute top-0 left-0  h-full z-10 flex justify-center items-center  bg-gradient-to-br from-indigo-600  shadow  rounded  overflow-hidden">a</a>


                )
            }

            <span className="p-1  absolute top-0 left-0 -rotate-12 text-green-500 font-semibold text-sm uppercase">{type}</span>

            <div className="w-full h-full">

                <div className="w-full h-32 bg-black/80 items-center justify-center">
                    <h2 className="w-full h-full flex items-center justify-center uppercase font-black text-xl line-clamp-2  px-5 text-center text-white">
                        {name}
                    </h2>
                </div>

            </div>

            <div className="w-full bg-gradient-to-r from-indigo-700 to-white via-purple-600  p-1 animate-pulse duration-300 ease-in-out">
            </div>


            <div className="w-full flex items-center justify-between bg-black/80 p-2">
                <h3 className=" text-white/90  font-light text-sm flex items-center justify-between w-full">
                    <div>
                        <span className="font-extrabold mulish-black text-xl text-white"><small className="font-normal mulish-light text-sm -mr-1 text-white/90">MT</small> {price}</span>
                    </div>
                    <span className="uppercase text-xs">duracao: <span className="text-base font-bold lowercase">{duration} dias</span></span>
                </h3>

            </div>

            {
                modal && (
                    <div className=" w-screen h-screen absolute top-0 left-0 bg-transparent flex items-center justify-center z-20">
                        <div onAuxClick={closeModal} className="bg-gradient-to-tr flex justify-between from-black via-white/10 to-black mt-10 h-3/4 w-8/12 p-10">
                            <aside className="w-6/12 px-5 bg-black my-10 mr-10 rounded-xl">
                                <h3 className="uppercase text-lg mt-4 border-b-4 border-white/80 text-white mulish-bold">Sobre a instituicao</h3>
                            </aside>

                            <aside className="w-6/12 px-5 bg-white border rounded-xl">
                                <h3 className="uppercase text-lg mt-4 border-b-4 border-black/80 text-black mulish-bold">Sobre o curso</h3>
                            </aside>
                        </div>
                    </div>
                )
            }

        </div>
    );
}


export default Course;