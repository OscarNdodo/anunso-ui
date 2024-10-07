import { useState } from "react";
import { Link } from "react-router-dom";





function Explain() {




    const cover = "/assets/images/cover.gif";
    const video = "/assets/videos/anunso.mp4";

    const [hover, setHover] = useState(false);


    const playVideo = (event) => {
        // setHover(false);
        const currentVideo = event.target;
        currentVideo.paused ? currentVideo.play() : currentVideo.pause();
    }




    return (
        <section className="w-full h-screen flex bg-gradient-to-tl from-black via-black/90 to-black pt-10">

            <div className="max-w-screen-xl min-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="flex w-full items-center justify-between">


                    <div className="w-8/12 h-full relative border border-purple-600 shadow-lg shadow-purple-600 overflow-hidden rounded">
                        <video onClick={playVideo} className="min-w-full min-h-full rounded" src="/assets/videos/anunso.mp4" buffered poster={cover}></video>

                        {
                            hover && (

                                <div onClick={playVideo} className="w-full h-full absolute top-0 left-0 bg-transparent rounded flex items-center justify-center animate-pulse text-xl text-white mulish-bold cursor-pointer">
                                    Clique
                                </div>



                            )
                        }

                    </div>


                    <div className="w-4/12 ml-10 flex flex-col items-center justify-center">
                        <h2 className="text-xl font-bold sm:text-4xl text-white/90 w-full text-center uppercase">Clique no video <br /> saiba mais</h2>

                        <p className="my-5 text-gray-500 w-full text-center">
                            Esta plataforma comporta desde estudantes até instituições e pequenos instrutores ou mentores, que possibilitam que o conhecimento siga o seu curso natural... Com a crescente procura por habilidades formações que possiblitam a adaptação de sobrevivência através num mundo cada vez mais autonómo, nasceu o <strong>anunso!</strong>
                        </p>

                        <Link
                            to="/overview"
                            className="mt-8 inline-block rounded bg-gradient-to-r from-indigo-600 to-purple-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
                        >
                            Quero fazer parte da família
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    );
}


export default Explain;