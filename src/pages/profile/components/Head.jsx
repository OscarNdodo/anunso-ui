

import { useState } from "react";
import { FaCameraRotate } from "react-icons/fa6";
import { GiGolfFlag } from "react-icons/gi";



export default function Head() {


    const img = "/assets/images/user.png";


    const [show, setShow] = useState(false);


    return (
        <div className="w-full flex items-start my-5 rounded bg-gradient-to-b from-black p-5">
            <div className="flex">
                <div className="relative w-60 h-60" >
                    <img onMouseEnter={() => setShow(true)} src={img} className="w-60 h-full rounded opacity-80" alt="user image" />
                    {
                        show && (
                            <button onMouseLeave={() => setShow(false)} className="w-60 h-full flex items-center justify-center text-white/80 absolute top-0 left-0 bg-black/60">
                                <FaCameraRotate className="text-4xl hover:text-purple-600" />
                            </button>
                        )
                    }
                </div>
            </div>

            <div className="w-full flex flex-col  pl-5">

              




                <div className="w-full grid grid-cols-3   h-36 place-items-center rounded">
                    <div className=" flex flex-col items-center">
                        <span className="text-5xl mulish-black">06</span>
                        <h2 className="text-sm font-light uppercase">Cursos</h2>
                    </div>



                    <div className=" flex flex-col items-center   relative justify-center h-full w-full">
                        <GiGolfFlag className="text-4xl text-green-500 absolute right-3 bottom-3" />
                        <span className="text-6xl mulish-black">06</span>
                        <h2 className="text-sm font-light uppercase">Cursos</h2>
                    </div>




                    <div className=" flex flex-col items-center">
                        <span className="text-5xl mulish-black">06</span>
                        <h2 className="text-sm font-light uppercase">Cursos</h2>
                    </div>







                </div>
                    {/* <h2 className="text-4xl uppercase mulish-light w-full mt-12 text-white/85  line-clamp-1">Ola, Oscar!</h2> */}


            </div>

        </div>
    )
}