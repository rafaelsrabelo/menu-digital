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
  width: 60px;
  height: 60px;
  object-fit: cover;
`;