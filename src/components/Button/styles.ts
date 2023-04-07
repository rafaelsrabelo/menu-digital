import styled from "styled-components";


export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: any;
}

export const Container = styled.button<Props>`
  background: ${props => props.type === 'PRIMARY' ? props.theme.COLORS.RED_500 : props.theme.COLORS.WHITE};
  color: ${props => props.theme.COLORS.WHITE};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.COLORS.RED_500};
  padding: 8px 20px;
  &:hover {
    background: ${props => props.theme.COLORS.WHITE};
    color: ${props => props.theme.COLORS.RED_500};
    border: 1px solid ${props => props.theme.COLORS.RED_500};
  }
`