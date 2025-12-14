import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () =>{
  return (
    <div className="flex flex-col h-screen w-full px-8 md:px-28 gap-16 mt-2">
      <Navbar/>
      <HeroSection/>
    </div>
  )
}

export default App;