import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Home';
import Services from './components/Pages/Services';
import About from './About';
import Contact from './Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    
    <BrowserRouter>
    <Header className="App-header"/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer className="App-Footer"/>
    </BrowserRouter>
   
  );
}

export default App;
