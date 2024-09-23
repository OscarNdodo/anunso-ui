import Course from "./Course";

function Related() {
    return (
        <aside className="w-full flex justify-start flex-col py-10 text-gray-200 rounded">
                <h2 className="text-xl uppercase">R<span className="border-b-4 border-purple-600">ecomenda</span>dos para você</h2>

                <ul className="w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-10 my-10 border border-gray-800 p-10 py-20 rounded-lg mb-20 bg-gradient-to-br from-black via-white/10 to-black">
                    <Course />
                    <Course />
                    <Course />
                </ul>
            </aside>
    );
}


export default Related;