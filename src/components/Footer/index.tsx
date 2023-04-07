import { Container, Image } from "./styles";
import logo from "./../../assets/img/logomarca.png"
export function Footer() {
  return (
    <Container>
      <div className="container text-center">
        <div className="d-flex">
          <div className="col-md-3">
            <Image src={logo} />
          </div>
          <div className="col-md-3">
            <h4>Horário</h4>
            Todos os dias das 11 as 22
          </div>
          <div className="col-md-3">
            <h4>Contato</h4>
            dindindaleia@gmail.com
          </div>
          <div className="col-md-3">
            <h4>Rede social</h4>
            instagram/dindin.daleia
          </div>
        </div>
      </div>
    </Container>
  )
}