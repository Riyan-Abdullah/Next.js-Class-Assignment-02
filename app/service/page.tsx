import service from "./service.module.css"
import Header from "../component/header/Header"
import Footer from "../component/footer/Footer";
import Hero_Section from "../component/hero-section/Hero-Section";
import CTA from "../component/CTA/CTA"
const ServicePage = ()=>{
    return(
      <div>
      <h1 className={service.main}>This is ServicePage</h1>
      <Header></Header>
       <Hero_Section></Hero_Section>
       <CTA></CTA>
       <Footer></Footer>
      </div>
    )
  }
  export default ServicePage;