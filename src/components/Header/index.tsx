import { Container, Image, HeaderContentLinks, HeaderContentIcons } from "./styles";
import { NavLink, NavLinkProps  } from "react-router-dom";
import logo from "./../../assets/img/logomarca.png";
import { BsCart, BsPerson } from "react-icons/bs"


export function Header() {
  return (
    <Container className="">
      <div className="container d-flex justify-content-between align-items-center py-4">
        <div>
          <Image src={logo} />
        </div>

        <HeaderContentLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products" className="products-link">Products</NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </HeaderContentLinks>

        <HeaderContentIcons>
          <BsCart size={24} className="cart-icon"/>
          <BsPerson size={24} />
        </HeaderContentIcons>
      </div>
    </Container>
  )
}