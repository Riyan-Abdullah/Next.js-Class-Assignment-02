import Link from "next/link";
import page from "./page.module.css"
import Header from "./component/header/Header"
import Footer from "./component/footer/Footer";
import Hero_Section from "./component/hero-section/Hero-Section";
const HomePage = ()=>{
  return(
    <div>
      <h1 className={page.main}>This is HomePage</h1>
      <Header></Header>
      <Hero_Section></Hero_Section>
    
    <ol>
      <li className={page.about}><Link href="/about" target="blank">About</Link></li>
      <li className={page.contact}><Link href="/contact" target="blank">Contact</Link></li>
      <li className={page.service}><Link href="/service" target="blank">Service</Link></li>
    </ol>
    <Footer></Footer>
    </div>
  )
}
export default HomePage;