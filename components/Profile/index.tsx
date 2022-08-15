import Link from 'next/link';
import { Container, Container0, Container1, Container2} from './styles';
import {IoIosArrowDropright } from "react-icons/io"

export function Perfil() {
  return (
    <>
    <Container0 
    //data-aos="fade-left"
    >


    <Container>
     <img src="/imgpai.png" alt="foto-de-perfil"></img>

      <div>
        <h1><a className='a1'>Dr.</a> <a className='a2'>Fernando Lissa</a></h1>
        <h2>Cirurgião Oncológico - CRM 10118</h2>
        <ul>
          <li>-Graduado pela Universidade Federal do Rio Grande do Sul (UFRGS)</li>
          <li>-Residência Médica Cirurgia Geral – Hospital Conceição (POA)</li>
          <li>-Residência Médica Cirurgia Oncológica – Hospital do Câncer Santa Rita (POA)</li>
          <li>-Mestre em Ciências da Saúde – PPG UNESC (SC)</li>
          <br/>
          <li>-Membro da Sociedade Americana de Cirurgia Oncológica</li>
          <li>-Membro da Sociedade Europeia de Cirurgia Oncológica</li>
          <li>-Membro da Sociedade Brasileira de Cirurgia Oncológica</li>
          <li>-Membro da Sociedade Brasileira e Mundial de Câncer Gástrico</li>
        </ul>
        </div>
    </Container>


    <Container1>
  
    <a href='https://sbco.org.br/' target="blank">
    <img src='./sbco_logo.jpg' ></img>
    </a>
    <a href='https://www.surgonc.org/' target="blank">
    <img src='./logo-esso.png'></img>
    </a>
    <a href='https://www.nccn.org/' target="blank">
    <img src='./nccn-logo.jpg'></img>
    </a>
    <a href='https://www.mdanderson.org/' target="blank">
    <img src='./md_anderson_logo.png'></img>
    </a>
    <a href='https://www.oncolink.org/' target="blank">
    <img src='./logo1.png'></img>
    </a>

    </Container1>


    <Container2>
    <h1 className='title'>Especialidades</h1>
        <div className='content'>


          <div className='content-children'>
            <h1>CARCINOMAS <br/> DE PELE</h1>
            <p>(EPIDERMÓIDE, BASOCELULAR, MELANOMA)</p>
          <Link href='/especialidades'>
          <a><IoIosArrowDropright /></a>
          </Link>
          </div>


          <div className='content-children'>
            <h1>CARCINOMA GASTROINTESTINAL</h1>
            <p>(ESÔFAGO, ESTÔMAGO, FÍGADO, VESÍCULA BILIAR, PÂNCREAS, INTESTINOS, RETO)</p>
          <Link href='/especialidades'>
          <a><IoIosArrowDropright/></a>
          </Link>
          </div>

          <div className='content-children'>
            <h1>CARCINOMAS GINECOLÓGICOS</h1>
            <p>(VULVA, VAGINA, ÚTERO, ENDOMÉTRIO, OVÁRIO)</p>
          <Link href='/especialidades'>
            <a><IoIosArrowDropright/></a>
          </Link>
          </div>


          </div>
        </Container2>


    </Container0>
</>

  );
}
