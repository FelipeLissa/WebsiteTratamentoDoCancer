import Aos from "aos"
import Head from "next/head"
import { useEffect } from "react"
import { Header } from "../../components/Header"
import "aos/dist/aos.css"
import { Footer } from "../../components/Footer"
import { ConditionsTreated } from "../../components/ConditionsTreated"


export default function Projetos () {
    useEffect(() => {Aos.init({duration: 500}) },[])
    return (
        <><Head>
        <title> Especialidades </title>
     </Head>

            <Header></Header>
            <ConditionsTreated ></ConditionsTreated>
            <Footer></Footer>
            </>
           
    )
}