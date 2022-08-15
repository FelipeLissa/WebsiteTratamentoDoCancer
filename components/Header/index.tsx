import Image from 'next/image';
import NavLink from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <li><NavLink title="início" path="/"></NavLink></li>
        <li><NavLink title="Sobre o Câncer" path="/sobreocancer" includes></NavLink></li>
        <li><NavLink title="Especialidades" path="/especialidades" includes></NavLink></li>
        <li><NavLink title="Perguntas Frequentes" path="/perguntas" includes></NavLink></li>
        <li><NavLink title="Contatos e Localização" path="/contato" includes></NavLink></li>
        <li><img src="/lgoocerta1.png" alt="logo" ></img></li>
      </ul>
    </Container>
  );
}
