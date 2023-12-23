import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Pagenotfound from './pages/Pagenotfound.js'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'


function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="*" element={<Pagenotfound />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
