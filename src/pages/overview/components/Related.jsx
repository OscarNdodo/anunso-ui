import Course from "./Course";

function Related() {
    return (
        <aside className="w-full flex justify-start flex-col mb-20 text-white/80 ">
                <h2 className="text-xl uppercase">R<span className="border-b-4 border-purple-600">ecomenda</span>dos para você</h2>

                <ul className="w-full grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3 gap-10 my-10 ">
                    <Course type="Online" name="Logica de programacao" price={750} duration={30} />
                    <Course type="Online" name="Algoritmos" price={1250} duration={45} />
                    <Course type="Offline" name="Curso front-end com HTML, CSS & JavaScript (UI/UX)" price={2250} duration={60} />
                    <Course type="Offline" name="Back-End com PHP" price={5550} duration={120} />
                </ul>
            </aside>
    );
}


export default Related;