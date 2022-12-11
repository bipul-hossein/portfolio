import ContactForm from "../../components/contactForm/ContactForm"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Projects from "../../components/Projects/Projects"
import Navbar from "../../components/Share/navbar/Navbar"

import Skills from "../../components/Skills/Skills"

const Home = () => {

  return (
    <div>
     
      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  )
}

export default Home