import Link from "next/link";

export default async function NotFound()
{
  return (
    <div className="h-screen bg-red-200 flex flex-row items-center justify-center">
      <div className="bg-green-900 w-3/4 h-2/4 text-center ">
        <h2 className="text-8xl">Não encontrado!</h2>
        <p className="text-8xl">O recurso requisitado não foi encontrado</p>
        <Link className="text-8xl text-blue-100" href="/">clique aqui para voltar para o início</Link>
      </div>
    </div>
  )
}

