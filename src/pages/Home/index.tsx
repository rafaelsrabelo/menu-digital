import { Button } from "../../components/Button";
import { Container, Text, Title, Subtitle, Information, Card } from "./styles";
import { BsCart, BsPerson } from "react-icons/bs";
import delivery from "./../../assets/img/delivery.svg";
import fastDelivery from "./../../assets/img/fast-delivery.svg";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <Container className="">
      <section className="">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <Text>
                  Combinando sabores autênticos e feito com muito carinho, desde
                  2016
                </Text>
                <Title className="my-4">
                  Conheca nosso <strong>cardápio</strong> e faça seu pedido
                  agora mesmo
                </Title>
                <Subtitle>
                  Desde 2016 com a missão de proporcionar refeições deliciosas e
                  memoráveis para todos os nossos clientes.
                </Subtitle>
                <div className="d-flex mt-4">
                  <NavLink to="/products">
                    <Button
                      title="Ver cardápio"
                      onClick={() => console.log("oi")}
                    />
                  </NavLink>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <img
                  src={delivery}
                  className="img-fluid d-none d-sm-block"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Information className="container">
        <h4 className="text-center subtitle">Nosso diferencial</h4>

        <h3 className="text-center title">
          Just sit back at home we will take care
        </h3>

        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          officiis
        </p>

        <div className="d-flex align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-4 col-xs-12">
              <div className="text-center">
                <img src={fastDelivery} alt="" />
                <h4>Combine a entrega</h4>
                <p>Faca seu pedido no nosso cardapio e combine a entrega</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="text-center">
                <img src={fastDelivery} alt="" />
                <h4>Produtos Caseiro</h4>
                <p>Produtos feitos com muito amor</p>
              </div>
            </div>
            <div className="col-md-4 col-xs-12">
              <div className="text-center">
                <img src={fastDelivery} alt="" />
                <h4>Desde 2016</h4>
                <p>Algum texto sobre ser desde 2016</p>
              </div>
            </div>
          </div>
        </div>
      </Information>
    </Container>
  );
}
