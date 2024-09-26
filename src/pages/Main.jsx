import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import Menu from "../components/Menu";




function Main() {

    const [menu, setMenu] = useState(true);
    const toggleMenu = () => {
        setMenu(!menu);
    }


    return (
        <main className='w-full flex flex-col fixed top-0 left-0'>

            <Header toggle={toggleMenu} showMenu={menu} />

            <section className="flex">


                {
                    menu && (
                        <Menu />
                    )
                }

                <aside className="w-full h-screen flex flex-col text-white overflow-y-scroll bg-gradient-to-tl from-black via-black/90 to-black p-5 ">

                    <Outlet />


                </aside>

            </section>


        </main>
    )
}

export default Main;