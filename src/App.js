import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Pagenotfound from './pages/Pagenotfound.js'


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Pagenotfound />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
