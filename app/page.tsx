import image from "next/image"
import Nevbar from "./Components/nevbar/Nevbar";
import  link  from "next/link";
import Link from "next/link";
import Hero from "./Components/hero/Hero";
import footer from "./Components/footer/Footer"
import Footer from "./Components/footer/Footer";


export default function Home() {
  return(
    <div>

      <Nevbar/>
      
        <Hero/>
       <Footer></Footer>


    </div>
  );
};

