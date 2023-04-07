import styled from "styled-components";

export const Container = styled.div`
  padding: 70px 0px;
  .hero-content {
    
  } 
`

export const Text = styled.h5`
  font-size: 1rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 45px;
  font-weight: 700;

  strong {
    color: ${props => props.theme.COLORS.RED_500};
  }
`

export const Subtitle = styled.p`
  font-size: 0.975rem;
  line-height: 25px;
  color: #777;
`

export const Information = styled.section`
  margin-top: 100px;

  .subtitle {
    color: ${props => props.theme.COLORS.RED_500};
    font-weight: 700;
    font-size: 1.25rem;
  }

  .title {
    font-size: 2.1rem;
    font-weight: 600;
    color: #212245;
  }

  p {
    font-size: .8rem;
    color: #777
  }
`

export const Card = styled.div`
  /* padding: 20px 10px; */
  border-radius: 8px;
  background: ${props => props.theme.COLORS.RED_100};
  .rounded-circle {
    background: ${props => props.theme.COLORS.RED_500};
    height: 45px;
    width: 45px;
  }
`