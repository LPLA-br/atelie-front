"use client"
import { useState } from "react";

export default function Page()
{

  const [ idAcesso, setIdAcesso ] = useState<string>("");

  return (
    <div>
      <h2> Acesso via ID fornecido pela costureira: </h2>
      <input className="bg-gray-500" id={"idacesso"} value={idAcesso} onChange={ ev => setIdAcesso( ev.target.value ) } type="password" ></input>
    </div>
  )
}
