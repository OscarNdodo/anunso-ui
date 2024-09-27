


import { BsPersonVideo2 } from "react-icons/bs";
import { FaSchoolFlag, FaUserGraduate } from "react-icons/fa6";
import { HiStatusOnline, HiStatusOffline } from "react-icons/hi";
import { TbCertificate } from "react-icons/tb";




function Cover() {

    const img = "/assets/images/anunso.gif";


    return (

        <>
            <img src={img} className="h-96 w-full object-cover" />


            <section className="w-full h-screen flex items-center bg-white" id="down">

                <div className="max-w-screen-xl min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-bold sm:text-4xl">Encontre o melhor pra te!</h2>

                            <p className="mt-4 text-gray-600">
                               Esta plataforma comporta desde estudantes até instituições e pequenos instrutores ou mentores, que possibilitam que o conhecimento siga o seu curso natural... <br />
                               Portanto, não existe lugar melhor para encontrar o curso ideal para aprimorar os seus conhecimentos ou habilidades, com os melhores instrutores, mentores e instituições.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block rounded bg-gradient-to-r from-indigo-700 to-purple-600 px-16 py-4 text-sm font-medium text-white transition hover:scale-90 hover:opacity-80 duration-300 ease-in-out focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Quero experimentar agora
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <FaSchoolFlag className="text-purple-600" size={25} />
                                </span>

                                <h2 className="mt-2 font-bold">Instituições</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 line-clamp-2">
                                    Preparadas para ensinar-te e guiar-te.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                   <FaUserGraduate className="text-purple-600" size={24} />
                                </span>

                                <h2 className="mt-2 font-bold">Estudantes</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 line-clamp-2">
                                    Dedicados e prontos para aprender.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                  <BsPersonVideo2 className="text-purple-600" size={25} />
                                </span>

                                <h2 className="mt-2 font-bold">Mentores</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 line-clamp-2">
                                    Com experiência para compartilhar.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                   <HiStatusOnline  className="text-purple-600"size={25} />
                                </span>

                                <h2 className="mt-2 font-bold">Online</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Participe as aulas sem sair de casa.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <HiStatusOffline className="text-purple-600" size={25} />
                                </span>

                                <h2 className="mt-2 font-bold">Offline</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 line-clamp-2">
                                    Participe as aulas presencialmente.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <TbCertificate className="text-purple-600" size={25} />
                                </span>

                                <h2 className="mt-2 font-bold">Certificados</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600 line-clamp-2">
                                    Certificado ao final de cada  curso.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}



export default Cover;