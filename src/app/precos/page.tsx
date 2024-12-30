
export default function Page()
{
  return (
    <div className="bg-green-500 flex flex-row items-center justify-center h-screen">
      <div className="bg-green-200 text-4xl h-3/4 w-3/4">
        <h2> Tabela de preços aproximados (Demonstração) </h2>
        <table>
          <tbody>
            <tr>
              <th>Vestido</th>
              <td>55.00</td>
            </tr>
            <tr>
              <th>Calção</th>
              <td>65.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
