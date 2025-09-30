import SiteHeader from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ServiceHeroSection from '../../components/Services/ServiceHeroSection'
import ServicesListing from '../../components/Services/ServiceListing'
import EPISection from '../../components/Services/EpiSection'

export default function Services() {
  return (
    <>
    <SiteHeader/>
    <ServiceHeroSection/>
    <ServicesListing/>
    <EPISection/>
    <Footer/>
    </>
  )
}
