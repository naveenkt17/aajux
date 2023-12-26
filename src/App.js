import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Home';
import Services from './components/Pages/Services';
import About from './About';
import Contact from './Contact';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserExperience } from './components/Pages/UserExperience';
import { Company } from './components/Pages/Company';
import { Projects } from './components/Pages/Projects';
import { Heuristic } from './components/Pages/HeuristicAnalysis';
import { ProductResearch } from './components/Pages/ProductResearch';
import { PersonaDevelopment } from './components/Pages/PersonaDevelopment';
import { CompetitiveAnalysis } from './components/Pages/CompetitiveAnalysis';
import { SwotAnalysis } from './components/Pages/SwotAnalysis';
import { Userjourney } from './components/Pages/UserJourney';
import { InformationArchitecture } from './components/Pages/InformationArchitecture';
import { UsabilityTesting } from './components/Pages/UsabilityTesting';
import { UXUIAaudit } from './components/Pages/UxUiAudit';
import { BrandDesign } from './components/Pages/BrandDesign';
import { MotionAnimation } from './components/Pages/MotionAnimation';
import { DesignSystem } from './components/Pages/DesignSystem';
import { UserInterfaceDesign } from './components/Pages/UserInterfaceDesign';
import { IllustrationsIconography } from './components/Pages/IllustrationsIconography';
import { Prototyping } from './components/Pages/Prototyping';
import { GraphicDesign } from './components/Pages/GraphicDesign';
import { FrontEndDevelopment } from './components/Pages/FrontEndDevelopment';
import { MobileApplications } from './components/Pages/MobileApplications';
import { LyefX } from './components/Pages/LyefX';
import { Tig } from './components/Pages/Tig';
import { Mesha } from './components/Pages/Mesha';
import { Jobrocks } from './components/Pages/Jobrockes';
import { Esg } from './components/Pages/Esg';
import { Xchainge } from './components/Pages/Xchainge';




function App() {
  return (
    
    <BrowserRouter>
    <Header className="App-header"/>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/company' element={<Company />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/projects/lyfex' element={<LyefX />}/>
      <Route path='/projects/tig' element={<Tig/>}/>
      <Route path='/projects/mesha' element={<Mesha/>}/>
      <Route path='/projects/jobrocks' element={<Jobrocks/>}/>
      <Route path='/projects/esg' element={<Esg/>}/>
      <Route path='/projects/xchainge' element={<Xchainge/>}/>
      <Route path='/services/user-experince' element={<UserExperience />}/>
      <Route path='/services/heuristic-analysis' element={<Heuristic />}/>
      <Route path='/services/product-research' element={<ProductResearch />}/>
      <Route path='/services/persona-development' element={<PersonaDevelopment />}/>
      <Route path='/services/competitive-analysis' element={<CompetitiveAnalysis />}/>
      <Route path='/services/swot-analysis' element={<SwotAnalysis />}/>
      <Route path='/services/user-journey-evaluation' element={<Userjourney />}/>
      <Route path='/services/information-architecture-analysis' element={<InformationArchitecture />}/>
      <Route path='/services/usability-testing' element={<UsabilityTesting />}/>
      <Route path='/services/ux-ui-audit' element={<UXUIAaudit />}/>
      <Route path='/services/brand-design' element={<BrandDesign />}/>
      <Route path='/services/motion-and-animation' element={<MotionAnimation />}/>
      <Route path='/services/user-experience-design' element={<UserExperience />}/>
      <Route path='/services/design-system' element={<DesignSystem />}/>
      <Route path='/services/user-interface-design' element={<UserInterfaceDesign />}/>
      <Route path='/services/illustrations-and-iconography' element={<IllustrationsIconography />}/>
      <Route path='/services/prototyping-and-interaction-design' element={<Prototyping />}/>
      <Route path='/services/graphic-design' element={<GraphicDesign />}/>
      <Route path='/services/front-end-development' element={< FrontEndDevelopment/>}/>
      <Route path='/services/mobile-applications' element={<MobileApplications />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer className="App-Footer"/>
    </BrowserRouter>
   
  );
}

export default App;
