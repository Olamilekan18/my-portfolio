
import './App.css'
import Navbar from "./Components/Navbar";
import Resume from './Components/Resume';
import About from './Components/About';
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {

  return (
    <div className='flex flex-col'>
    <Navbar />
    <Resume />
    <About />
    <Projects />
    <Contact />

   </div>
  )
}

export default App
