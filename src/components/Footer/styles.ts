import styled from "styled-components";

export const Container = styled.footer`
  background: ${props => props.theme.COLORS.RED_100};
  padding: 50px 0;

  h5 {
    font-size: 1.1rem;
    color: #212245;
    font-weight: 600;
  }

  .day {
    font-size: 0.925rem;
    color: #212245;
    font-weight: 600;
    margin: 0;
  }
  .hours {
    margin: 0;
    font-size: 0.925rem;
    color: #212245;
    font-weight: 400;
  }
`
export const Image = styled.img`
  width: 54px;
  height: 54px;
  object-fit: cover;
`