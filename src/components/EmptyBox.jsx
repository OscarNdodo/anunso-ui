

import { PiRocket } from 'react-icons/pi';


function EmptyBox( {text = "Vamos", link=""} ) {
    return (
        <div className="flex flex-col w-full  items-center justify-center my-10 border border-white/20  rounded-lg mb-32 shadow-sm py-10">
        <div className='flex flex-col items-center justify-center w-4/12 bg-wgradient-to-r from-black/90 via-black/10 via-40% to-black/90 p-10 rounded-lg border border-dashed border-white/50'>
          <PiRocket className='text-9xl text-purple-500/80 animate-pulse'/>
          <small className='text-white/50'>Nenhum conteudo</small>
        </div>
        <button className='w-4/12 py-4 bg-gradient-to-r from-purple-500 to-indigo-700 mt-5 rounded hover:scale-95 hover:opacity-80 duration-300 ease-in-out'>{ text }</button>
      </div>
    );
}



export default EmptyBox;