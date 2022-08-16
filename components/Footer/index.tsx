import { Container } from './styles';
import { AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';

export function Footer() {
   function handleRedirect(url: string) {
      window.open(url);
   }

   function handleScrollTop() {
      window.scroll({
         top: 0,
         behavior: 'smooth',
      });
   }

   return (
      <Container>
         <div className="container">
            <button onClick={handleScrollTop} type="button">
               Voltar ao Topo
            </button>
            <section>
               <AiOutlineWhatsApp
                  onClick={() => handleRedirect('')}
               ></AiOutlineWhatsApp>
               <AiOutlineInstagram
                  onClick={() => handleRedirect('')}
               ></AiOutlineInstagram>
            </section>
         </div>
      </Container>
   );
}
