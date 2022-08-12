import { Container } from './styles';

interface TitlesProps {
  title: string;
}

export function Title({ title }: TitlesProps) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}
