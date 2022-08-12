import Aos from "aos"
import Head from "next/head"
import { useEffect } from "react"
import { Header } from "../../components/Header"
import "aos/dist/aos.css"
import { Footer } from "../../components/Footer"
import { TogglerAboutCancerAmbient } from "../../components/TogglerAboutCancerAmbient"


export default function Projetos () {
    useEffect(() => {Aos.init({duration: 500}) },[])
    return (
        <><Head>
            <title> Sobre o Câner </title>
        </Head>

            <Header></Header>
            <TogglerAboutCancerAmbient></TogglerAboutCancerAmbient>
            <Footer></Footer>
            </>
           
    )
}