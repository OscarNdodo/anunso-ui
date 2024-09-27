import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="flex h-screen flex-col bg-white">
      <img
        src="/assets/images/extra/journey-1.webp"
        alt=""
        className="h-72 w-full object-cover"
      />

      <div className="flex flex-1 items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Houve um erro de rota.
          </h1>

          <p className="mt-4 text-gray-500">
            Volte para o ponto de partida, enquanto resolvemos o problema.
          </p>

          <Link
            to="/"
            className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
          >
            Voltar para partida
          </Link>
        </div>
      </div>
    </div>

  )
}


export default NotFound;