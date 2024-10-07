
import EmptyBox from '../../components/EmptyBox';
import Item from '../journey/components/Item';
import Start from './components/Start';

function OverView() {


  const img = "/assets/images/extra/journey-1.webp";
  const image = "/assets/images/rocket-3.webp";

  return (
    <>
      <Start />
      <h3 className="mt-6 w-full text-xl text-white/90 uppercase mulish-light border-b-4 border-white/70">O progresso das suas <span className='mulish-bold text-white'>jornada</span>s</h3>


      <div className="relative flex w-full flex-col my-10 mt-10 rounded-lg mb-32 shadow-sm">
        <nav className="w-full grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-3 gap-10">



          <Item image={img} name="Curso de informatica basica na optica do utilizador" progress={30} />

          <Item image={image} name="Confeitaria de criacao de bolod massasu" progress={63} />


        </nav>
      </div>



      {/* If journies empty */}
      <EmptyBox text='Comecar uma jornada' />


    </>
  )
}

export default OverView;
