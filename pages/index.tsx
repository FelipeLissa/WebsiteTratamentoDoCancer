import { useEffect } from "react";
import "aos/dist/aos.css"
import Aos from "aos";
import Head from "next/head"
import { HomeContainer } from "../styles/HomeStyles";
import { Header } from "../components/Header";
import { Perfil } from "../components/Profile";
import { Footer } from "../components/Footer";



export default function Home() {
  useEffect(() => {Aos.init({duration: 600}) },[])
  
  return ( 
    
    <HomeContainer>

    <Head>
              <title>Tratamento do Cancer</title>
    </Head>

    <Header />

    <main>
      <Perfil></Perfil>
      <Footer></Footer>
    </main>

        </HomeContainer>
  );
}