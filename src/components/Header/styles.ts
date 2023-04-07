import styled from "styled-components";

export const Container = styled.div`
  background-color: ${props => props.theme.COLORS.WHITE};
  padding: 30px 0;
  span {
    background: ${props => props.theme.COLORS.RED_500};
    color: ${props => props.theme.COLORS.WHITE};
    padding: 1px;
    border-radius: 50%;
  }
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
      border-bottom: 1px solid ${props => props.theme.COLORS.RED_500};
    }
  }
` 

;