import Link from "next/link";

export default function Page()
{
  return (
    <div className="h-screen">
      <h1 className="text-8xl text-center px-4"> Área gerencial da Costureira </h1>
      <form className="flex flex-col items-center justify-center h-full w-full">
        <label className="text-8xl"> Senha de acesso:</label>
        <input className="w-64 h-16 text-4xl text-center" id="senha" type="password" placeholder="Senha" />
        <input className="w-64 h-16 text-4xl active:bg-gray-500" type="button" value="Autenticar"/>
      </form>
    </div>
  )
}
