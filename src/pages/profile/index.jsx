import Head from "./components/Head";
import Content from "./components/Content";
import { GiTrophyCup } from "react-icons/gi";



export default function Profile() {
    return (
        <main className="pb-40">
            <Head />

            <h2 className="w-full flex items-center justify-between my-10 border-b-4 border-white/30 uppercase text-2xl mulish-light">
                <span>Minhas conquistas</span>
                <GiTrophyCup />
            </h2>

            <section className="w-full grid grid-cols-2 bg-gradient-to-t from-black rounded">
                <Content />
                <Content />
            </section>
        </main>
    )
}