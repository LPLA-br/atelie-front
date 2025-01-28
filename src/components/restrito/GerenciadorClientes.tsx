"use client"

import { useState } from react;
import TCliente from "../../structures/minimundo/TCliente";
import Cliente from "./Cliente";

/** Elemento de cartões com dados dos clientes e suas ações. */
export default function GerenciadorClientes()
{
  //Dados requisitaturos
  const [ clientes, setClientes ] = useState<TCliente[]>([ {nome:"Fulano", endereco: "rua Lepidodendron 123", contato: "(84) 999999999"} ]);

  return (
    <div>
      ((clientes.length > 0) ?
        (
          clientes.map( (cliente)=>(<Cliente cliente={cliente} tipo="dados" />) )
        )
        :
        (
          clientes.map( (cliente)=>(<Cliente cliente={undefined} tipo="vazio" />) )
        )
      )
    </div>
  )
}

