import { GiFlyingFlag } from "react-icons/gi";
import Item from "./components/Item";





function Journey() {

    const img = "/assets/images/extra/journey-1.webp";
    const image = "/assets/images/rocket-3.webp";
    return (
        <section className="">

            <div className="w-full relative flex flex-col text-black/90 rounded-xl overflow-hidden">
                <img src={img} className="min-w-full h-[180px] fill-current rounded-xl" alt="rocket starting" />
                <h3 className="absolute w-48 py-2  bg-white font-bold text-base hover:scale-95 hover:opacity-80 duration-300 ease-in-out flex items-end px-2">
                    Ola, <span className="text-xl font-semibold ml-0.5 mulish-bold">Oscar</span>
                    <GiFlyingFlag className="ml-16 mb-1 text-2xl text-green-500 " />
                </h3>
            </div>

            <h3 className="mt-16 w-full text-xl text-white/90 uppercase mulish-light border-b-4 border-white/70">O progresso das suas jornadas</h3>


            <div className="relative flex w-full flex-col my-10 rounded-lg border border-slate-200/20 p-5 mb-32 shadow-sm">
                <nav className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10">



                    <Item image={img} name="Curso de informatica basica na optica do utilizador" progress={30} />

                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={63} />


                </nav>
            </div>



        </section>
    );
}


export default Journey;