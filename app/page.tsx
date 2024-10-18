import Nevbar from "./Components/nevbar/Nevbar";
import Link from "next/link";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/hero/Hero";


export default function Home() {
  return(
    <div className=''>

      <Nevbar/>
        <Hero/>
       <Footer/>


    </div>
  );
};

