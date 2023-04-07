import { ButtonTypeStyleProps, Container } from "./styles";

interface Props {
  title: string;
  type?: any;
  onClick?: () => void;
}

export function Button({ title, type, ...rest }: Props) {
  return (
    <Container type="PRIMARY" {...rest}>
      {title}
    </Container>
  );
}
