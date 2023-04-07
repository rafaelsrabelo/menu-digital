import styled from "styled-components";

export const Container = styled.div`
  padding: 100px 0px;
  .hero-content {
    
  } 
`

export const Text = styled.h5`
  font-size: 1.25rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 55px;
`

export const Subtitle = styled.p`
  font-size: 1rem;
  line-height: 30px;
  color: #777;
`

export const Information = styled.section`
  margin-top: 100px;
`

export const Card = styled.div`
  padding: 30px 20px;
  border-radius: 8px;
  background: ${props => props.theme.COLORS.RED_100};

  .rounded-circle {
    background: ${props => props.theme.COLORS.RED_500};
    height: 75px;
    width: 75px;
  }
`