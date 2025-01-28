"use client"

import { useState } from "react";
import TCliente from "../../structures/minimundo/TCliente";
import TClienteCard from "../../structures/tecnico/TClienteCard";

/** Representa um cliente graficamente
*   Com Dados -> Read, Update
*   Vazio -> Create (fim de lista)
*   Subcomponente de "GerenciadorClientes"
*/
export default function Cliente( props: TClienteCard )
{

  //variáveis para estado vazio:
  const [ novoCliente, setNovoCliente ] = useState<boolean>(false);

  return (
    <div>
      (props.tipo == "vazio" ?
        (
          <div>
            (novoCliente ?
              (
                <div>
                  <div>
                    <input type="text" placeholder="nome"/>
                    <input type="text" placeholder="endereco"/>
                    <input type="text" placeholder="contato"/>
                  </div>
                  <input type="button" value={"salvar"} onClick={ev => {console.log("POST request createClient")}} />
                  <input type="button" value={"cancelar"} onClick={ev => setNovoCliente(false)} />
                </div>
              )
              :
              (
                <input type="button" value={"cadastrar novo cliente"} onClick={ev => setNovoCliente( true )}/>
              )
            )
          </div>
        )
          :
        (
          <div>
            <h3> {props.cliente.nome} </h3>
            <div>
              <p>  {props.cliente.endereco} </p>
              <p>  {props.cliente.contato} </p>
            </div>
          </div>
        )
      )
    </div>
  )
}

