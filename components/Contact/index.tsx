import { BsBuilding, BsMap, BsTelephonePlus } from 'react-icons/bs';
import { Title } from '../Titles';
import Form from './Form';
import { Container } from './styles';


export function Contact() {
  return (
    <Container 
    data-aos="fade-left"
    >
      <Title title={'Contatos e localização'} ></Title>


      <section>

      <Form></Form>


      <div>
      <h1> Contato e Endereço</h1>
      <ul>
        <li><BsBuilding/>Centro Clínico Luiz Zanette</li>
        <li><BsMap/>Rua Antônio de Lucca 91, sala 301 <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;Centro Criciúma/SC - CEP 88801-503</li>
        <li><BsTelephonePlus/> <a href="tel:04834371572"> (48) 3437-1572 </a>&nbsp;/ <a href="tel:048991332338">(48) 99133-2338 </a></li>
        <li><BsTelephonePlus/> <a className='a1' href='https://api.whatsapp.com/send?l=pt&phone=5548991332338' target='blank'>Agendar pelo Whatsapp</a></li>
      </ul>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7000.951296414455!2d-49.364389!3d-28.675415000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521787f6e67d28d%3A0xf762bd05f0520640!2sRua%20Ant%C3%B4nio%20de%20Lucca%2C%2091%20-%20Pio%20Corr%C3%AAa%2C%20Crici%C3%BAma%20-%20SC%2C%2088811-503%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1660169923154!5m2!1spt-BR!2sus" width="400" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      </section>


    </Container>
    
  );
}
