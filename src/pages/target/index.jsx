
import Certificate from "../../components/Certificate";
import EmptyBox from "../../components/EmptyBox";



function Target() {
    return (
        <main>



            <div className="w-full relative flex flex-col text-black/90 rounded-xl overflow-hidden">
                <div className="min-w-full h-[200px] fill-current rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 via-50% from-10% via-indigo-600"></div>

            </div>

            <h3 className="mt-10 w-full text-xl text-white/80 uppercase mulish-light border-b-4 border-white/50"><span className="mulish-bold text-white">Certifiacados</span> conquistados</h3>

            
            <div className="w-full grid grid-cols-3 gap-10 b  my-10">
                <Certificate />
                <Certificate />
                <Certificate />
                <Certificate />
                <Certificate />
                <Certificate />
            </div>





            {/* If journies empty */}
            <EmptyBox text='Comecar uma jornada' />
        </main>
    )
}


export default Target;