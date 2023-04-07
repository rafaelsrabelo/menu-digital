import { Container, Image } from "./styles";
import logo from "./../../assets/img/logomarca.png";
export function Footer() {
  return (
    <Container>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <Image src={logo} />
            <h5 className="mt-2">Dindin da Leia</h5>
          </div>
          <div className="col-md-4">
            <h5>Horario de atendimento</h5>
            <p className="day">Segunda a Sexta</p>
            <p className="hours">11:00 as 21:00</p>
            <p className="day">Sabado e Domingo</p>
            <p className="hours">11:00 as 22:00</p>
          </div>
          <div className="col-md-4">
            <h5>Contato</h5>
            <p className="hours">(85) 99682-6836</p>
            <p className="hours">
              <strong>dindindaleiadmin@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
