import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './screens/HomePage'
import PrinciplesPage from './screens/PrinciplesPage'
import SupportPage from './screens/SupportPage'
import ProjectsPage from './screens/ProjectsPage'
import OurEquipmentsPage from './screens/OurEquipmentsPage'
import AboutPage from './screens/AboutPage'
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import MarginTop from './components/MarginTop';

function App() {
  return (
    <Router>
      <Navigation/>
      <MarginTop />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/principles' element={<PrinciplesPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
        <Route path='/projects' element={<ProjectsPage/>}/>
        <Route path='/our-equipments' element={<OurEquipmentsPage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
