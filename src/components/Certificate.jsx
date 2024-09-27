import { GrDocumentDownload } from "react-icons/gr";
import { TbCertificate } from "react-icons/tb";



function Certificate() {
    return (
        <div className="max-w-80 relative flex flex-col items-center bg-white text-black/90 rounded-lg">
            <TbCertificate size={180} className="relative w-full text-yellow-600" />
            <div className="w-full flex flex-col items-start py-5 px-10">
                <a href="#" className="uppercase mulish-bold text-pretty w-full line-clamp-3 ">basico de informatica na optica do utilizador</a>
                <button className="absolute top-0 left-0 px-2 py-1 text-white rounded text-sm  mulish-light bg-gradient-to-r from-indigo-700 to-purple-600 flex items-center">
                    <GrDocumentDownload className="mr-1" />
                    Download
                    </button>
            </div>
        </div>
    );
}



export default Certificate;