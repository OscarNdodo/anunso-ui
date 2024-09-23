import Start from "./Start";
import Related from "./Related";
import InProgress from "./InProgress";

const Content = () => {
    return (
        <section className="w-full h-screen flex flex-col overflow-y-scroll bg-black  opacity-95 p-5">

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