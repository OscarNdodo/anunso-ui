import Item from "./components/Item";





function Journey() {

    const img = "/assets/images/extra/journey-1.webp";
    const image = "/assets/images/rocket-3.webp";
    return (
        <section className="">

            <div className="w-full relative flex flex-col text-black/90 rounded-xl overflow-hidden">
                <div className="min-w-full h-[200px] fill-current rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 via-50% from-10% via-indigo-600"></div>
              
            </div>

            <h3 className="mt-10 w-full text-xl text-white/80 uppercase mulish-light border-b-4 border-white/50">Cursos <span className="mulish-bold text-white">recomendados</span> pra te</h3>


            <div className="relative flex w-full flex-col my-10 rounded-lg bordwer border-slate-200/20 pq-5 mb-32 shadow-sm">
                <nav className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10">



                    <Item image={img} name="Curso de informatica basica na optica do utilizador" progress={30} />

                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={img} name="Curso de informatica basica na optica do utilizador" progress={90} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
                    <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-1} />
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