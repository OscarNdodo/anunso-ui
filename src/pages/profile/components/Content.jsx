import { FaMedal } from "react-icons/fa6";
import { GiMedal } from "react-icons/gi";
import { PiCertificateLight } from "react-icons/pi";




export default function Content() {
    return (
        <div className="w-full grid grid-cols-3 gap-5 p-3">

          
            <div className="m-3 relative text-white/90 bg-gradient-to-r from-purple-600 to-black/50 border border-purple-500 shadow-md hover:shadow-lg duration-300 ease-in-out shadow-purple-600 flex items-center justify-center p-5 rounded-lg">
                <PiCertificateLight size={100} className="" />
                <span className="absolute top-1 mulish-black text-white left-1">01</span>
            </div>

            <div className="m-3 text-purple-100/80 bg-gradient-to-tl  from-black flex items-center justify-center p-5 rounded-lg">
                <GiMedal size={80} className="" />
            </div>

            <div className="m-3 relative text-white/90 bg-gradient-to-r from-purple-600 to-black/50 border border-purple-500 shadow-md hover:shadow-lg duration-300 ease-in-out shadow-purple-600 flex items-center justify-center p-5 rounded-lg">
                <GiMedal size={100} className="" />
                <span className="absolute top-1 mulish-black text-white left-1">02</span>
            </div>

            <div className="m-3 text-purple-100/80 bg-gradient-to-tl  from-black flex items-center justify-center p-5 rounded-lg border border-white/10">
                <FaMedal size={80} className="" />
            </div>



            <div className="m-3 text-purple-100/80 bg-gradient-to-tl  from-black flex items-center justify-center p-5 rounded-lg border border-white/10">
                <GiMedal size={100} className="" />
            </div>

            {/* <div className="m-3 text-purple-600 bg-black/50 border border-purple-500 shadow-md shadow-purple-600 flex items-center justify-center p-5 rounded-lg">
                <FaMedal size={100} className="" />
            </div> */}

        </div>
    );
}