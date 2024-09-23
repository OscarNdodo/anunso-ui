import { GiFlyingFlag } from "react-icons/gi";
import { GoStar, GoStarFill } from "react-icons/go";
import { BsFillBookmarkFill, BsBookmark, BsEye, BsCheck2Circle } from "react-icons/bs";
import { FaSchoolFlag } from "react-icons/fa6";
import { useState } from "react";

const Course = () => {
    const [save, setSave] = useState(false);
    const [subscribe, setSubscribe] = useState(false);
    const [modal, setModal] = useState(false);


    function closeModal() {
        setModal(false);
    }

    return (
        <div className="w-full h-72 flex flex-col justify-end bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-700 rounded-xl  overflow-hidden ">


            <div className="w-full h-full">
                <div className="w-full h-16 flex items-center justify-between text-sm uppercase bg-white font-semibold text-black/90 px-4 py-2 border-b-2">
                    <a href="#" className="flex items-center hover:opacity-70 duration-300 ease-linear">
                        <img src="/assets/images/logot.png" className="w-10 h-10  p-1 mr-2 border border-gray-500/80 rounded-full" alt="company icon" />
                        <h2 className="line-clamp-2">Instituo de Formacao Basica</h2>
                    </a>
                    <button title="Guardar curso" className="font-bold text-2xl text-indigo-600 hover:scale-95 hover:opacity-70 duration-300 ease-linear" onClick={() => setSave(!save)}>
                        {
                            save ? <BsFillBookmarkFill /> : <BsBookmark />
                        }
                    </button>
                </div>
                <div className="w-full h-36 bg-black/10 flex items-center justify-center">
                    <h2 className="w-full uppercase font-black text-2xl line-clamp-3 px-5 text-center text-white">
                        Curso de formacao basica em informatica na optica de utilizador
                    </h2>
                </div>
            </div>


            <div className="w-full flex items-center justify-between bg-black/80 p-5 py-4">
                <h3 className=" text-white/80 uppercase font-light text-sm flex items-center">
                    <span className="bg-indigo-500 p-1.5 mr-2 rounded-full animate-pulse duration-500 ease-in-out"></span>
                    <span className="bg-green-500 p-1.5 mr-2 rounded-full animate-pulse duration-500 ease-in-out"></span>
                    <span>Offline</span>
                </h3>
                <div className="flex flex-row-reverse items-center">
                    <button onClick={() => setModal(true)} className="px-5 py-2.5 ml-2  bg-purple-600 text-2xl rounded-lg text-gray-50 font-semibold duration-300 hover:animate-none hover:scale-95 hover:opacity-70 ease-linear"><BsEye /></button>
                    {

                        subscribe ?

                            <button onClick={() => setSubscribe(!subscribe)} className="px-10 py-2.5  text-2xl hover:text-white bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-700 rounded-md text-gray-50 font-semibold duration-300 hover:animate-none hover:scale-95 hover:opacity-70 ease-linear">
                                <BsCheck2Circle />
                            </button>

                            :
                            
                            <button onClick={() => setSubscribe(!subscribe)} className="px-10 py-2.5 border hover:bg-transparent hover:text-white bg-white rounded-md text-gray-900 font-semibold duration-300 hover:animate-none hover:scale-95 hover:opacity-70 ease-linear">Inscrever-se</button>

                    }
                </div>
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