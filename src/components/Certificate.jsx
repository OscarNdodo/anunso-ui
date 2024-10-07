import {  GrDownload } from "react-icons/gr";
import { TbCertificate } from "react-icons/tb";



function Certificate() {
    return (
        <div className="relative flex flex-col items-center ">
            <TbCertificate  className="relative w-full text-white/50 bg-black/80 border border-gray-300/20 text-[220px] py-5" />

            <div className="w-full flex items-center justify-between bg-gradient-to-r from-white/80 via-white via-20% to-white/80 text-black/90 p-2 rounded mt-2">
                <h2 className="line-clamp-1 w-10/12">Nome do curso completo curso completo curso completo</h2>
                <button className="w-1/12 text-indigo-600">
                    <GrDownload />
                </button>
            </div>
        </div>
    );
}



export default Certificate;