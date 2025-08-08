import Header from "./components/header";
import Footer from "./components/Footer";
import{Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";


// start coding
function App() {
  return (
    <>
    {/* navbar link */}
    <Header/>
    {/* links of pages */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    {/* footer link */}
    <Footer/>
    </>
  );
}
export default App;