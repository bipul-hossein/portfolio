import ContactForm from "../../components/contactForm/ContactForm"
import Header from "../../components/header/Header"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"

const Home = () => {

   

    return (
      <div>
        <Header></Header>
        <Skills></Skills>
        <Projects></Projects>
        <ContactForm></ContactForm>
      </div> 
    )
}

export default Home