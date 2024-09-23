import { Link } from "react-router-dom";
import Header from "../../components/Header";

export default function SignUp(){
    return(
        <>
            <Header />
        
            <section className="bg-white">
                <div className="lg:grid h-full lg:grid-cols-12">
                    <section className="relative flex  items-end  lg:col-span-5 lg:h-full xl:col-span-6">
                        {/* <img
                            alt=""
                            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        /> */}

                        <div className="hidden lg:relative lg:block lg:p-12">
                            <a className="block text-black" href="#">
                                <span className="sr-only">Home</span>
                               
                            </a>

                            <h2 className="mt-6 text-2xl font-bold text-black sm:text-3xl md:text-4xl">
                                Welcome to Squid 🦑
                            </h2>

                            <p className="mt-4 leading-relaxed text-black/90">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                quibusdam aperiam voluptatum.
                            </p>
                        </div>
                    </section>

                    <main
                        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div className="max-w-xl lg:max-w-3xl">
                            <div className="relative -mt-16 block lg:hidden">
                                <a
                                    className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                    href="#"
                                >
                                    <span className="sr-only">Home</span>
                                   
                                </a>

                                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                    Welcome to Squid 🦑
                                </h1>

                                <p className="mt-4 leading-relaxed text-gray-500">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
                                    quibusdam aperiam voluptatum.
                                </p>
                            </div>

                            <form action="#" className="mt-8 grid grid-cols-6 gap-6 ">
                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>

                                    <input
                                        type="text"
                                        id="FirstName"
                                        name="first_name"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>

                                    <input
                                        type="text"
                                        id="LastName"
                                        name="last_name"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
                                        Password Confirmation
                                    </label>

                                    <input
                                        type="password"
                                        id="PasswordConfirmation"
                                        name="password_confirmation"
                                        className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <label htmlFor="MarketingAccept" className="flex gap-4">
                                        <input
                                            type="checkbox"
                                            id="MarketingAccept"
                                            name="marketing_accept"
                                            className="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />

                                        <span className="text-sm text-gray-700">
                                            I want to receive emails about events, product updates and company announcements.
                                        </span>
                                    </label>
                                </div>

                                <div className="col-span-6">
                                    <p className="text-sm text-gray-500">
                                        By creating an account, you agree to our
                                        <a href="#" className="text-gray-700 underline"> terms and conditions </a>
                                        and
                                        <a href="#" className="text-gray-700 underline">privacy policy</a>.
                                    </p>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className="rounded-md bg-black/90 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                    >
                                        Create an account
                                    </button>

                                    <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                        Already have an account?
                                        <Link to="/login" className="text-gray-700 underline">Log in</Link>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>

        
        </>
    )
}