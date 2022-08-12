import Aos from "aos"
import Head from "next/head"
import { useEffect } from "react"
import { Header } from "../../components/Header"
import "aos/dist/aos.css"
import { Footer } from "../../components/Footer"
import { TogglerQuestionsAmbient } from "../../components/TogglerQuestionAmbient"


export default function Projetos () {
    useEffect(() => {Aos.init({duration: 500}) },[])
    return (
        <><Head>
            <title> Perguntas Frequentes </title>
         </Head>

            <Header></Header>
            <TogglerQuestionsAmbient></TogglerQuestionsAmbient>
            <Footer></Footer>
            </>
           
    )
}