import styled from "styled-components";

export const Content = styled.div`
  
  h1 {
    font-size: 1.925rem;
    line-height: 45px;
    font-weight: 700;
    padding: 30px 0;
  }
`

export const Product = styled.div`
  border: 1px solid #fde4e4;
    text-align: center;
    padding: 30px;
    cursor: pointer;
    margin-bottom: 10px;
  h4 {
    text-align: center;
    font-weight:600;
    font-size: 1.05rem;
    margin-top: 20px;
  }

  span {
    margin-right: auto;
    font-weight: 600;
    font-size: 0.925rem;
  }

  button {
    border: 1px solid ${props => props.theme.COLORS.RED_500};
    background: ${props => props.theme.COLORS.RED_500};
    color: ${props => props.theme.COLORS.WHITE};
    padding: 3px 6px;
    border-radius: 5px;
    font-size: 1rem;
  }
`