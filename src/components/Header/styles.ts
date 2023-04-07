import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.COLORS.WHITE};
  
  /* height: 100px; */
  /* padding:  */
  box-shadow: 5px 5px 15px -5px #fde4e4;
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

    &+a {
      margin-left: 30px;
    }
    &.active {
      color: ${props => props.theme.COLORS.RED_500};
    }
  }
` 
export const HeaderContentIcons = styled.div`
  .cart-icon {
    margin-right: 20px;
  }
`
;