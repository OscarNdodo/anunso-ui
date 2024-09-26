


import { GrMoney } from "react-icons/gr";

function Item({ image, name, progress }) {



    return (
        <div
            role="button"
            className="text-white border border-white/10 flex w-full items-center rounded-md p-3 transition-all bg-gradient-to-r from-black hover:scale-95 hover:opacity-80 duration-300 ease-in-out"
        >
            <div className="mr-4 grid place-items-center">
                <img src={image} className="relative inline-block h-28 w-52 !rounded-xl  object-cover object-center"
                />
            </div>

            <div className="w-full flex flex-col">
                <h6 className="w-full text-white font-bold text-base uppercase line-clamp-1">
                    {name}
                </h6>

                <p className="text-slate-500 text-sm line-clamp-1 my-1 w-full overflow-clip">
                    <span className="bg-white rounded-3xl text-xs py-0.5 px-3 text-black/80">Software</span>
                    <span className="bg-white rounded-3xl text-xs py-0.5 mx-1 px-3 text-black/80">Software</span>
                </p>


                {progress >= 0 && (
                    <div className="w-full flex mt-1">
                        <span id="ProgressLabel" className="sr-only">Loading</span>

                        <span
                            role="progressbar"
                            aria-labelledby="ProgressLabel"
                            className="block w-full rounded-full bg-white/90"
                        >
                            <span className="flex items-center justify-center w-full h-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 text-center text-xs" style={{ width: progress + "%" }}>
                                <span className="font-bold text-white text-[10px]  line-clamp-1"> {progress}%</span>
                            </span>
                        </span>
                    </div>

                )}

                <div className="w-full flex items-center justify-between mt-2">
                    <h4 className="flex items-center text-2xl text-white/80">
                        <GrMoney className="text-xl text-purple-600 mr-1" />
                        <strong className="mulish-black text-white">500</strong><small className="text-sm mt-1">MZN</small>
                    </h4>
                    <button className="bg-white px-5 py-1 text-base rounded text-black">Increver-se</button>
                </div>

            </div>
        </div>

    );
}

export default Item;