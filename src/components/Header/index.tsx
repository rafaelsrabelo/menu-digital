import { Container, Image, HeaderContentLinks } from "./styles";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/img/logomarca.png";
import { BsCart } from "react-icons/bs";

export function Header() {
  return (
    <Container className="navbar">
      <div className="container">
        <div className="d-flex align-items-center">
          <NavLink to="/" className="me-4">
            <Image src={logo} />
          </NavLink>
          <HeaderContentLinks>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Produtos</NavLink>
            <NavLink to="/cart">Carrinho</NavLink>
          </HeaderContentLinks>
        </div>
        <div className="d-flex align-items-center">
          <BsCart size={24} />
          <span className="badge text-bg-danger">0</span>
        </div>
      </div>
    </Container>
  );
}
