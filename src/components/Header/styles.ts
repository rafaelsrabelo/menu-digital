import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.COLORS.WHITE};
  
  padding: 20px 40px;
  height: 100px;
  width: 100%;
`;

export const Image = styled.img`
  width: 54px;
  height: 54px;
  object-fit: cover;
`
export const HeaderContentLinks = styled.div`

  a {
    color: ${props => props.theme.COLORS.TEXT};
    font-weight: 700;
  }

  .products-link {
    margin: 0 25px;
  }
` 
export const HeaderContentIcons = styled.div`
  .cart-icon {
    margin-right: 20px;
  }
`
;