




function FeedBack() {
    return (

        <section className="bg-gradient-to-l from-black to-black/85 py-20">
            <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                <div className="mx-auto max-w-lg text-center">
                    <h2 className="text-2xl uppercase font-bold text-gray-100 md:text-3xl">
                        Sua opnião é super valiosa deixe o seu feedback
                    </h2>

                    <p className="hidden text-gray-500 sm:mt-4 sm:block">
                       Através do seu feedback de opnião, avalição e reclamação, é possível construir um Software que seja ideal para todos e, que atenda as necessidades essenciais dentro da plataforma. <br />

                    </p>
                </div>

                <div className="mx-auto mt-8 max-w-xl">
                    <form className="sm:flex sm:gap-4">
                        <div className="sm:flex-1">
                            <label  className="sr-only">Menssagem</label>

                            <input
                                type="text"
                                placeholder="Escrever aqui..."
                                className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-purple-600"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-700 px-10 py-3 text-white transition focus:outline-none focus:ring  sm:mt-0 sm:w-auto hover:scale-90 hover:opacity-80 duration-300 ease-in-out"
                        >
                            <span className="text-sm font-medium"> Enviar </span>

                            <svg
                                className="size-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>

    );
}



export default FeedBack;