import { ButtonTypeStyleProps, Container } from "./styles";

interface Props {
  title: string;
  type?: any;
}


export function Button({ title, type, ...rest }: Props) {
  return (
    <Container type="PRIMARY">
      {title}
    </Container>
  )
}