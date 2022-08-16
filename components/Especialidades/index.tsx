import { Title } from '../Titles';

import { Container } from './styles';

export function ConditionsTreated() {
  return (
  <>
  <Container data-aos="fade-left">
  <Title title='Especialidades'></Title>
          <div className='divelement'>
            <h1>CARCINOMAS DE PELE</h1>
            <img src='melanoma2.png'></img>
            <p>(EPIDERMÓIDE, BASOCELULAR, MELANOMA)</p>
          </div>
    
          <div className='divelement'>
            <h1>CARCINOMAS GASTROINTESTINAIS</h1>
            <img src='colon123.png'></img>
            <p>(ESÔFAGO, ESTÔMAGO, FÍGADO, VESÍCULA BILIAR, PÂNCREAS, INTESTINOS, RETO)</p>
         
        
          </div>
    
          <div className='divelement'>
            <h1>CARCINOMAS GINECOLÓGICOS</h1>
            <img src='cancervag.png'></img>
            <p>(VULVA, VAGINA, ÚTERO, ENDOMÉTRIO, OVÁRIO)</p>
          </div>
        </Container>
        </>
  );
}
