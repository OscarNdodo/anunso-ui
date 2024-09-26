




function Item({ image, name, progress }) {



    return (
        <div
            role="button"
            className="text-white border border-white/10 flex w-full items-center rounded-md p-3 transition-all bg-gradient-to-r from-black hover:scale-95 hover:opacity-80 duration-300 ease-in-out"
        >
            <div className="mr-4 grid place-items-center">
                <img src={image} className="relative inline-block h-16 w-20 !rounded-full  object-cover object-center"
                />
            </div>

            <div className="w-full flex flex-col">
                <h6 className="w-full text-white font-bold text-sm uppercase line-clamp-1">
                    {name}
                </h6>

                <p class="text-slate-500 text-sm line-clamp-1 my-1 w-full overflow-clip">
                    <span className="bg-white rounded-3xl text-xs py-0.5 px-3 text-black/80">Software</span> 
                    <span className="bg-white rounded-3xl text-xs py-0.5 mx-1 px-3 text-black/80">Software</span> 
                </p>

                <div className="w-full flex mt-1">
                    <span id="ProgressLabel" class="sr-only">Loading</span>

                    <span
                        role="progressbar"
                        aria-labelledby="ProgressLabel"
                        className="block w-full rounded-full bg-white/90"
                    >
                        <span class="flex items-center justify-center w-full h-3.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-700 text-center text-xs" style={{ width: progress + "%" }}>
                            <span class="font-bold text-white text-[11px]  line-clamp-1"> {progress}% concluido</span>
                        </span>
                    </span>
                </div>

            </div>
        </div>

    );
}

export default Item;