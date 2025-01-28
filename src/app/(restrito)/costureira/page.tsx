"use client"
import Link from "next/link";
import { useState } from "react";

export default function Page()
{

  const [ senha, setSenha ] = useState<string>("");

  return (
    <div className="h-screen">
      <h1 className="text-4xl text-center px-4"> Área gerencial da Costureira </h1>
      <div className="flex flex-col items-center justify-center h-full w-full">
        <input className="bg-gray-500 w-64 h-16 text-4xl text-center" id="senha" value={senha} onChange={ev => setSenha( ev.target.value )} type="password" placeholder="Senha" />
        <input className="bg-blue-200 w-64 h-16 text-4xl active:bg-gray-500 border-solid" type="button" value="Autenticar"/>
      </div>
    </div>
  )
}
