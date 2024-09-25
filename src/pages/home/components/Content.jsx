import Start from "./Start";
import Related from "./Related";
import InProgress from "./InProgress";

const Content = () => {
    return (
        <section className="w-full h-screen flex flex-col overflow-y-scroll bg-black/95 gradient-to-br from-black via-black/80 to-black bo p-10">

            {/* Start */}
            <Start />

            {/* related */}
            <Related />

            {/* in progress */}
            <InProgress />

        </section>
    )
}

export default Content;