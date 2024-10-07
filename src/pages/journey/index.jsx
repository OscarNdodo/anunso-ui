import Item from "./components/Item";

import { FaWandMagicSparkles } from "react-icons/fa6";



function Journey() {

    const img = "/assets/images/extra/journey-1.webp";
    const image = "/assets/images/rocket-3.webp";
    return (
        <section className="">

            <div className="w-full relative flex flex-col text-black/90 rounded-xl overflow-hidden">
                <div className="min-w-full h-[240px] flex items-center justify-between fill-current rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 via-50% from-10% via-indigo-600 px-10">
                    <form className="w-8/12 flex items-center justify-evenly bg-white/45 p-2 rounded">
                            <select className="py-2 px-5 text-base rounded bg-white/5" >
                                <option value="">Província</option>
                                <option value="">Provincia</option>
                            </select>


                            <select className="py-2 px-5 text-base rounded bg-white/5">
                                <option value="">Modalidade</option>
                                <option value="">Online</option>
                            </select>

                            <select className="py-2 px-5 text-base rounded bg-white/5">
                                <option value="">Duração</option>
                                <option value="">Provincia</option>
                            </select>

                            <select className="py-2 px-5 text-base rounded bg-white/5">
                                <option value="">Categória</option>
                                <option value="">Provincia</option>
                            </select>

                    </form>

                    <FaWandMagicSparkles size={150} color="white" className="animate-pulse duration-300 ease-linear mr-5" />
                </div>
              
            </div>

            <h3 className="mt-10 w-full text-xl text-white/80 uppercase mulish-light border-b-2 border-white/30">Cursos <span className="mulish-bold text-white">recomendados</span> pra te</h3>


            <div className="relative flex w-full flex-col my-10 rounded-lg bordwer border-slate-200/20 pq-5 mb-32 shadow-sm">
                <nav className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10">



                    <Item image={img} name="Curso de informatica basica na optica do utilizador" progress={30} />

                    <Item image="/assets/images/prices.jpg" name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={img} name="Curso de informatica basica na optica do utilizador" progress={90} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image="/assets/images/user.png" name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />


                </nav>
            </div>



        </section>
    );
}


export default Journey;