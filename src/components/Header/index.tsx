import { Container, Image } from "./styles";
import logo from "./../../assets/img/logomarca.png";

export function Header() {
  return (
    <Container>
      <div>
        <Image src={logo} />
      </div>

      <div>
        links
      </div>

      <div>
        icons
      </div>
    </Container>
  )
}