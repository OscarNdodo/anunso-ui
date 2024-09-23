
import Content from './components/Content'
import Header from '../../components/Header'
import Menu from './components/Menu'
import { useState } from 'react'

function App() {

  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <main className='w-full flex flex-col fixed top-0 left-0'>

      <Header toggle={toggleMenu} showMenu={menu} />


      <section className='flex justify-between '>
        {
          menu && (
            <Menu />
          )
        }
        <Content />
      </section>


    </main>
  )
}

export default App
