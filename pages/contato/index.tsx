import Aos from "aos"
import Head from "next/head"
import { useEffect } from "react"
import { Header } from "../../components/Header"
import "aos/dist/aos.css"
import { Footer } from "../../components/Footer"
import { Contact } from "../../components/Contact"


export default function Projetos () {
    useEffect(() => {Aos.init({duration: 500}) },[])
    return (
        <><Head>
        <title> Contato e Localização</title>
     </Head>

            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
            </>
           
    )
}