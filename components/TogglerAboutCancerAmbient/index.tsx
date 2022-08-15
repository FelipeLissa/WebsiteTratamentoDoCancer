import { Title } from '../Titles';
import TogglerAboutCancer  from '../TogglerAboutCancer';
import { BsFillCaretRightFill} from "react-icons/bs"
import { Container } from './styles';


export function TogglerAboutCancerAmbient() {
  return (
    <>
    <Container 
    data-aos="fade-left"
    >
    <Title title='Entendendo o Câncer'></Title>
       <h3>O QUE É O CÂNCER?</h3>
       <p>&nbsp;&nbsp;&nbsp;Normalmente, as células do nosso corpo crescem e se dividem para formar novas células e tecidos, dependendo das necessidades do nosso corpo. No processo normal, as células envelhecidas e lesadas (machucadas), morrem e novas células normais tomam o seu lugar. Às vezes, este processo natural “vai mal”, células anormais se formam e se multiplicam, tornando-se uma massa de tecido chamada tumor. Os tumores podem ser benignos ou malignos:</p>
      <TogglerAboutCancer title='TUMOR BENIGNO' subtitle='(NÃO É CÂNCER)'>
          <ul>
        <li><BsFillCaretRightFill/> As células dos tumores benignos não invadem os tecidos ao seu redor e não se espalham para outras partes do corpo.</li>
        <li><BsFillCaretRightFill/> Em geral, os tumores benignos podem ser removidos e normalmente não voltam a crescer.</li>
        <li><BsFillCaretRightFill/> Tumores benignos raramente são fatais.</li>
          </ul>
      </TogglerAboutCancer>

    <TogglerAboutCancer title='TUMOR MALIGNO' subtitle='(É CÂNCER)'>
    <ul >
        <li><BsFillCaretRightFill/> As células de tumores malignos podem invadir e danificar tecidos adjacentes.</li>
        <li><BsFillCaretRightFill/> As células cancerosas podem se espalhar para outras partes do corpo através do sangue e sistema linfático (”ínguas”).</li>
        <li><BsFillCaretRightFill/> A propagação do câncer é chamada de metástase.</li>
        <li><BsFillCaretRightFill/> Os tumores malignos podem ser removidos cirurgicamente.</li>
        <li><BsFillCaretRightFill/> Os tumores malignos podem ser fatais.</li>
      </ul>
    </TogglerAboutCancer>

    <h3>SINAIS E SINTOMAS DO CÂNCER</h3>
        <p>&nbsp;&nbsp;&nbsp;Os carcinomas podem apresentar sinais e/ou sintomas durante o seu desenvolvimento. Geralmente estes aparecem quando o câncer
         esta em um estádio mais avançado.</p>

    <TogglerAboutCancer title='SAIBA QUAIS SÃO:' subtitle={undefined}>
    <ul>
        <li><BsFillCaretRightFill/> Perda de peso inexplicável;</li>
        <li><BsFillCaretRightFill/> “Inchaço” na barriga;</li>
        <li><BsFillCaretRightFill/> Fadiga (cansaço) constante;</li>
        <li><BsFillCaretRightFill/> Anemia;</li>
        <li><BsFillCaretRightFill/> Perda do apetite ou constante sensação de plenitude;</li>
        <li><BsFillCaretRightFill/> Dor e/ou dificuldade para engolir;</li>
        <li><BsFillCaretRightFill/> Vômito com sangue;</li>
        <li><BsFillCaretRightFill/> Icterícia (”amarelão”);</li>
        <li><BsFillCaretRightFill/> Dor e/ou cólica abdominal;</li>
        <li><BsFillCaretRightFill/> Dor nas costas;</li>
        <li><BsFillCaretRightFill/> Fezes com sangue / Alteração do hábito intestinal;</li>
        <li><BsFillCaretRightFill/> Sangramento vaginal anormal;</li>
        <li><BsFillCaretRightFill/> Perna inchada unilateral;</li>
        <li><BsFillCaretRightFill/> Adenopatia (íngua) nas regiões inguinais (virilha), axilar e cervical (pescoço);</li>
        <li><BsFillCaretRightFill/> Feridas na pele que não cicatrizam e/ou sangram;</li>
        <li><BsFillCaretRightFill/> Sinal de pele com coloração preta;</li>
        <li><BsFillCaretRightFill/> Tumores debaixo da pele maiores que 5cm;</li>
      </ul>
    </TogglerAboutCancer>

    <TogglerAboutCancer title='LEMBRE-SE' subtitle={undefined}>
    <ul>
        <li>Tendo um ou mais destes sinais e/ou sintomas não significa que você tem câncer,
           mas se eles se mantêm presentes nas últimas duas semanas ou mais, consulte um médico. 
            O câncer, mesmo em estádios mais avançados, tem tratamento e pode ser curado.</li>
      </ul>
    </TogglerAboutCancer>

    <h3>FATORES DE RISCO:</h3>
        <p>&nbsp;&nbsp;&nbsp;A medicina muitas vezes não consegue explicar porque uma pessoa desenvolve câncer e outra não. Pesquisas mostram que determinados
           fatores de risco aumentam a probabilidade de uma pessoa vir a desenvolver um câncer.</p>
           
    <TogglerAboutCancer title='SAIBA QUAIS SÃO:' subtitle={undefined}>
    <ul>
        <li><BsFillCaretRightFill/> Idade acima de 50 anos;</li>
        <li><BsFillCaretRightFill/> Álcool e Tabaco;</li>
        <li><BsFillCaretRightFill/> Luz solar;</li>
        <li><BsFillCaretRightFill/> Radiação ionizante;</li>
        <li><BsFillCaretRightFill/> Certos produtos químicos e outras substâncias;</li>
        <li><BsFillCaretRightFill/> Alguns vírus e bactérias;</li>
        <li><BsFillCaretRightFill/> Certos hormônios;</li>
        <li><BsFillCaretRightFill/> Histórico familiar de câncer;</li>
        <li><BsFillCaretRightFill/> Má alimentação, falta de atividade física, ou estar acima do peso;</li>
    </ul>
    </TogglerAboutCancer>

    <TogglerAboutCancer title='LEMBRE-SE' subtitle={undefined}>
    <ul>
          <li>Nem tudo causa câncer. O carcinoma não é causado por um machucado, como uma pancada ou uma contusão.
           O câncer não é contagioso. Apesar de infecções com determinados vírus ou bactérias poderem aumentar 
           o risco de alguns tipos de câncer, ninguém pode “pegar” câncer de outra pessoa.
           Ter um ou mais fatores de risco não significa que você vai ter câncer.
           A maioria das pessoas que tem fatores de risco nunca desenvolvem câncer.
           Algumas pessoas são mais sensíveis do que outras para os fatores de risco conhecidos.
           </li>
      </ul>
    </TogglerAboutCancer>


    </Container>
    </>
  );
}