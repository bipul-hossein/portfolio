import Contact from "../../components/contactForm/Contact"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"

const Home = () => {

  return (
    <div>

      <Header></Header>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default Home