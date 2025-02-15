
import HomePage from "./homepage/page";
import About from "./about/page";
import NeuralCapabilities from "./neuralcapabilities/page";
import Pricing from "./pricing/page";
import Services from "./services/page";


export default function Home() {
  return (
    <div className="space-y-4"> {/* Reduced spacing */}
      <HomePage />
      <About />
      <NeuralCapabilities />
      <Pricing/>
      <Services/>
    
    </div>
  );
}
   