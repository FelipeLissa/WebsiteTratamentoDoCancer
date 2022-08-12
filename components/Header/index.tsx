import Link from 'next/link';
import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="início" path="/"></NavLink>
        <NavLink title="Sobre o Câncer" path="/sobreocancer" includes></NavLink>
        <NavLink title="Especialidades" path="/especialidades" includes></NavLink>
        <NavLink title="Perguntas Frequentes" path="/perguntas" includes></NavLink>
        <NavLink title="Contatos e Localização" path="/contato" includes></NavLink>
        <Link href='/'><img src="/lgoocerta1.png" alt="logo" ></img></Link>
      </ul>
    </Container>
  );
}
