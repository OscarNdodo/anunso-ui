import { FaPersonRunning } from "react-icons/fa6";
import { GiGolfFlag } from "react-icons/gi";
import { SiRundeck } from "react-icons/si";

function Start() {
    return (
        <aside className="w-full py-8  flex items-center justify-between px-10 bg-gradient-to-r from-indigo-700 via-indigo-800 to-purple-700 rounded-lg">


            <div className="w-3/12 flex items-end text-9xl text-white">
                <span><FaPersonRunning /></span>
                <span className="animate-pulse duration-1000 ease-in-out text-gray-900"><SiRundeck /></span>
            </div>


            <div className="w-9/12 flex justify-start flex-col items-end">


                <div className="w-full flex items-end justify-end">
                    <span className="text-4xl bg-white  text-center rounded-full flex justify-center items-end p-1 text-green-500 "><GiGolfFlag /></span>
                </div>


                <p className="text-4xl font-normal py-10 text-white text-end w-8/12 line-clamp-2">
                    A jornada para sua maratona de aprendizado começa aqui...
                </p>


                <div className="flex w-6/12 items-center justify-between mt-5">
                    <a href="#" className="bg-white text-gray-800 px-10 py-3 rounded text-sm uppercase">Minha jornada</a>
                    <a href="#" className="px-10 py-3 rounded text-sm uppercase border border-white text-white">Nova jornada</a>
                </div>
            </div>

        </aside>
    );
}


export default Start;