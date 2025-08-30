import Footer from "@/Components/Footer/Footer";
import Homepage from "@/Components/Homepage/Homepage";
import Navbar from "@/Components/Navbar/Navbar";
import Services from "@/Components/Services/Services";
import Order from "@/Components/Order/Order";
import About from "@/Components/About/About";


export default function Home() {
  return (
    <main>
      <Navbar />
      <Homepage />
      <Services/>
      {/*<Order/>*/}
      <About/>
      <Footer/>
    </main>
  );
}

