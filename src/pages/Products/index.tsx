import { Product, Content } from "./styles";
import nutella from "../../assets/img/nutella.jpg";
import { Button } from "../../components/Button";

export function Products() {
  const products = [
    { name: "Ninho com nutella", price: "3,50" },
    { name: "Ninho com Morango", price: "3,50" },
    { name: "Chocolate", price: "3,50" },
    { name: "Chicabom", price: "3,50" },
    { name: "Mouse de Maracuja", price: "3,50" },
    { name: "Delicia de abacaxi", price: "3,50" },
    { name: "Coco", price: "3,50" },
    { name: "Coco queimado", price: "3,50" },
    { name: "Kit Kat", price: "3,50" },
    { name: "Castanha", price: "3,50" },
    { name: "Pacoquinha", price: "3,50" },
    { name: "Ovomaltine", price: "3,50" },
  ];

  return (
    <Content className="container">
      <h1>Cardapio Online - Produtos</h1>
      <div className="d-flex align-items-center justify-content-center">
        <div className="row">
          {products.map((product) => (
            <div className="mb-4 col-6 col-sm-6 col-md-4 col-lg-3">
              <Product>
                <img src={nutella} className="img-fluid rounded" alt="" />
                <h4 className="mb-4">{product.name}</h4>
                <div className="d-flex align-items-center">
                  <span>R$ {product.price}</span>
                  <Button title="Adicionar" />
                </div>
              </Product>
            </div>
          ))}
        </div>
      </div>
    </Content>
  );
}
