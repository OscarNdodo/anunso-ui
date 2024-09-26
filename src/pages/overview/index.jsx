
import Item from '../journey/components/Item';
import Start from './components/Start';
import { PiRocket } from 'react-icons/pi';

function OverView() {


  const img = "/assets/images/extra/journey-1.webp";
  const image = "/assets/images/rocket-3.webp";

  return (
    <>
      <Start />
      <h3 className="mt-6 w-full text-xl text-white/90 uppercase mulish-light border-b-4 border-white/70">O progresso das suas <span className='mulish-bold text-white'>jornada</span>s</h3>


      <div className="hidden relative flex w-full flex-col my-10 mt-5 rounded-lg mb-32 shadow-sm">
        <nav className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10">



          <Item image={img} name="Curso de informatica basica na optica do utilizador" progress={30} />

          <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={-63} />


        </nav>
      </div>



      {/* If journies empty */}
      <div className="flex flex-col w-full  items-center justify-center my-10 mt-5 border border-white/20  rounded-lg mb-32 shadow-sm py-10">
        <div className='flex items-center justify-center w-4/12 bg-wgradient-to-r from-black/90 via-black/10 via-40% to-black/90 p-10 rounded-lg border border-dashed border-white/50'>
          <PiRocket className='text-9xl text-purple-500/80 animate-pulse'/>
        </div>
        <button className='w-4/12 py-4 bg-gradient-to-r from-purple-500 to-indigo-700 mt-5 rounded hover:scale-95 hover:opacity-80 duration-300 ease-in-out'>Comecar nova jornada</button>
      </div>
    </>
  )
}

export default OverView;
