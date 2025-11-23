import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Section from "./components/Section.jsx";
import Contact from "./components/Contact.jsx";
import useNavScroll from "./hooks/UseNavScroll.jsx";
import useActiveLink from "./hooks/useActiveLink.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    useNavScroll();
    useActiveLink();
    return (
        <div data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabIndex="0">
            <Nav/>
            <Hero/>
            <Section id="about" title="About me">
                <About/>
            </Section>
            <Section id="projects" title="My projects">
                <Projects/>
            </Section>
            <div className="section-divider"></div>
            <Section id="contact" title="Get in touch">
                <Contact/>
            </Section>
            <Footer/>
        </div>
    )
}

export default App
