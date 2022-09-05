import Logo from "./components/Logo";
import "./css/App.css";
// import Loading from './views/Loading';
import Accesorios from "./views/Accesorios";
import Casa from "./views/Casa";
import Baños from "./views/Baños"
import Cocina from "./views/Cocina";
import Home from "./views/Home";
import Patio from "./views/Patio";
import Productos from "./views/Productos";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./views/Login";


function App() {
  return (
    <div className="App">
      <Router>
      <Logo />
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/BathRoom" element={<Baños />} />
        </Routes>
        <Routes>
          <Route path="/kitchen" element={<Cocina />} />
        </Routes>
        <Routes>
          <Route path="/patio" element={<Patio />} />
        </Routes>
        <Routes>
          <Route path="/house" element={<Casa />} />
        </Routes>
        <Routes>
          <Route path="/Accesory" element={<Accesorios />} />
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/BathRoom/Productos/:id" element={<Productos />}/>
        </Routes>
        <Routes>
          <Route path="/kitchen/Productos/:id" element={<Productos />}/>
        </Routes>
        <Routes>
          <Route path="/patio/Productos/:id" element={<Productos />}/>
        </Routes>
        <Routes>
          <Route path="/house/Productos/:id" element={<Productos />}/>
        </Routes>
        <Routes>
          <Route path="/Accesory/Productos/:id" element={<Productos />}/>
        </Routes>
        {/* <Routes>
          <Route path="login" element={<Login/>} />
        </Routes>
        <Routes>
          <Route path="*" element={<Default/>} />
        </Routes> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
