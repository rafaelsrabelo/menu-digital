import { Button } from "../../components/Button";

export function Cart() {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Produto Titulo</th>
            <th scope="col">Preco</th>
            <th scope="col">Quantidade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2"></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="d-block my-4">
        <p className="m-0">subtotal R$ 1000,00</p>
        <Button className="mt-2" title="Fechar pedido" />
      </div>
    </div>
  );
}
