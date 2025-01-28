import TCliente from "../minimundo/TCliente";

/** Superconjunto informacional para componente
*   de dados do cliente */
type TClienteCard = {
  cliente?: TCliente,
  tipo: "vazio" | "dados"
};

export default TClienteCard;
