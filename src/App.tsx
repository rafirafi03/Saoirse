import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Mission from './pages/MissionVison/Mission'
import Services from './pages/Services/Services'
import ContactUs from './pages/Contact/ContactUs'
import FranchiseForm from './pages/FranchiseForm/FranchiseForm'
import ScrollToTop from './utils/ScrollToTop'
import TermsAndCondition from './pages/TermsAndCondition/TermsAndCondition'
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy'

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/ov-om' element={<Mission/>}/>
       <Route path='/services' element={<Services/>}/>
       <Route path='/contact' element={<ContactUs/>}/>
       <Route path='/franchise' element={<FranchiseForm/>}/>
       <Route path='/terms-and-condition' element={<TermsAndCondition/>}/>
       <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>

      </Routes>
    </>
  )
}

export default App
