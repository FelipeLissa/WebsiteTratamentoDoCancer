import { Title } from '../Titles';
import TogglerQuestions from '../TogglerQuestions';
import { BsFillCaretRightFill } from "react-icons/bs"
import { Container } from './styles';


export function TogglerQuestionsAmbient() {
  return (
    <>
      <Container data-aos="fade-left">
        <Title title='Perguntas FREQUENTES'></Title>
        <h3>Estou com câncer, e agora? O que faço?</h3>
        <p>
          Em primeiro lugar, não fique desesperado pois todos os tipos de câncer tem tratamento. Segundo, fale com seus familiares a respeito, pois são eles que vão dar todo o apoio necessário para vencer esta doença.</p>
        <TogglerQuestions title='O TRATAMENTO DO CANCER É UMA URGÊNCIA?' subtitle={undefined}>
          <ul>
            <li><BsFillCaretRightFill />Em geral, não. Porém quanto antes for tratado melhor.</li>
          </ul>
        </TogglerQuestions>

        <TogglerQuestions title='POR QUE DESENVOLVI UM CÂNCER?' subtitle={undefined}>
          <ul >
            <li><BsFillCaretRightFill />Nós podemos desenvolver um câncer por estarmos expostos a fatores de risco externos (p.ex. cigarro)
              e/ou a fatores genéticos hereditários (p.ex. pai ou mãe com história de câncer).</li>
          </ul>
        </TogglerQuestions>

        <TogglerQuestions title='O CÂNCER É CURÁVEL?' subtitle={undefined}>
          <ul>
            <li><BsFillCaretRightFill />Sim, pode ser curável. E esta cura é maior quanto mais cedo for feito o diagnóstico e o tratamento adequado.</li>
          </ul>
        </TogglerQuestions>

        <TogglerQuestions title='QUEM PROCURO SE TENHO O DIAGNÓSTICO DE CÂNCER?' subtitle={undefined}>
          <ul>
            <li>Você deve procurar um médico de sua confiança e/ou procurar um especialista da área como um Cirurgião Oncológico (cirurgia), um Oncologista Clínico (quimioterapia), ou um Radioterapeuta (radioterapia). Os especialistas foram treinados para oferecer o melhor tratamento para cada tipo de carcinoma. A maioria dos casos, em torno de 70%, são tratados com cirugia oncológica e posterior quimioterapia.</li>
          </ul>
        </TogglerQuestions>

        <TogglerQuestions title='QUAIS OS TIPOS DE TRATAMENTO?' subtitle={undefined}>
          <ul>
            <li><BsFillCaretRightFill />Cirurgia oncológica: Modalidade mais usada no tratamento de tumores sólidos. </li>
            <li><BsFillCaretRightFill />Quimioterapia: É utilizada principalmente, após a cirurgia oncológica. Em alguns casos pode ser usada antes de um tratamento cirúrgico, para diminuir o tamanho do tumor.</li>
            <li><BsFillCaretRightFill />Radioterapia: Geralmente utilizada após o tratamento cirúrgico oncológico.</li>
          </ul>
        </TogglerQuestions>


      </Container>
    </>
  );
}