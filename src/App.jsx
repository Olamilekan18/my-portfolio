
import './App.css'
import Navbar from "./Components/Navbar";
import Resume from './Components/Resume';
import About from './Components/About';
import Projects from './Components/Projects'
function App() {

  return (
    <div className='flex flex-col'>
    <Navbar />
    <Resume />
    <About />
    <Projects />

   </div>
  )
}

export default App
