import { useState } from "react";
import { Link } from "react-router-dom";





export default function SignIn() {




    const img = "/assets/images/anunso.gif";

    const [emailConfirm, setEmailConfirm] = useState(false);




    return (

        <main className="-screen w-screen ">

            <Link to="/" className="hover:opacity-80">
                <img src={img} className="h-52 w-full object-cover" />
            </Link>

            <section className="w-full flex items-center justify-center bg-white" >

                <div className="max-w-screen-xl max-h-screen px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8  lg:items-center lg:gap-x-16">
                        <div className="flex flex-col">
                            <h2 className="text-3xl mulish-black uppercase mb-10 text-black/85 sm:text-4xl">Login</h2>

                            {

                                !emailConfirm ?
                                    (
                                        <div className="col-span-6">
                                            <label htmlFor="Email" className="block text-base font-medium text-black/90"> Email </label>

                                            <input
                                                type="email"
                                                placeholder="zeninguem@email.com"
                                                name="email"
                                                className="mb-5 w-full rounded-md outline-none border border-indigo-600 bg-white text-sm text-black/90 p-3 shadow-sm"
                                            />
                                        </div>
                                    )

                                    :

                                    (
                                        <div className="col-span-6">
                                            <label htmlFor="Email" className="block text-base font-medium text-black/90"> Senha </label>

                                            <input
                                                type="password"
                                                placeholder="*****************"
                                                className="mb-5 w-full rounded-md outline-none border border-indigo-600 bg-white text-sm text-black/90 p-3 shadow shadow-indigo-600"
                                            />
                                        </div>
                                    )
                            }






                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button onClick={() => setEmailConfirm(!emailConfirm)}
                                    className="inline-block shrink-0 rounded-md px-16 py-3 text-sm font-medium text-white transition bg-gradient-to-r from-purple-600 to-indigo-700 duration-300 ease-in-out hover:scale-95 hover:opacity-80 focus:outline-none"
                                >
                                    {
                                        !emailConfirm ? "Proximo" : "Entrar"
                                    }
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Não tens uma conta?
                                    <Link to="/signup" className="text-black/90 underline"> Criar conta</Link>.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">

                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}