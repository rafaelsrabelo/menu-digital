import { Button } from "../../components/Button";
import { Container, Text, Title, Subtitle, Information, Card } from "./styles";
import { BsCart, BsPerson } from "react-icons/bs"
import delivery from "./../../assets/img/delivery.svg";
import fastDelivery from "./../../assets/img/fast-delivery.svg";

export function Home() {
  return (
    <Container className="container">
      <section className="">
        <div className="">
          <div className="d-flex align-items-center justify-content-center">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xs-12">
                <Text>Lore upsum lore ipsum lore</Text>
                <Title className="mt-2">Lore ipsum, lore ipsum lore lore lore ipsum</Title>
                <Subtitle>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</Subtitle>
                <div className="d-flex mt-4">
                  <Button title="Ver cardápio"/>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xs-12">
                <img src={delivery} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Information className="mb-5">
        <div className="d-flex justify-content-center">
          <Card className="col-md-4 col-xs-12 d-flex align-items-center">
            <div className="rounded-circle me-4">
            </div>
            Informacao <strong>do icon</strong>
          </Card>
          <Card className="col-md-4 col-xs-12 ms-4 d-flex align-items-center">
            <div className="rounded-circle me-4">
            </div>
            Informacao <strong>do icon</strong>
          </Card>
          <Card className="col-md-4 col-xs-12 ms-4 d-flex align-items-center">
            <div className="rounded-circle me-4">
            </div>
            Informacao <strong>do icon</strong>
          </Card>
        </div>
      </Information>

      <div>
        <h4 className="text-center">
          What we serve
        </h4>

        <h3 className="text-center">
        Just sit back at home we will take care
        </h3>

        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor, officiis? <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, eius.
        </p>

        <div className="d-flex">
          <div className="col-md-4 text-center">
            <img src={fastDelivery} alt="" />
            <h4>Quick Delivery</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src={fastDelivery} alt="" />
            <h4>Quick Delivery</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
          </div>
          <div className="col-md-4 text-center">
            <img src={fastDelivery} alt="" />
            <h4>Quick Delivery</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.</p>
          </div>
        </div>
      </div>

    </Container>
  )
}