import React from 'react'
import './Contact.css'
import ExplorePortfolio from '../../components/ExplorePortfolio/ExplorePortfolio'
import ContactSection from '../../components/ContactSection/ContactSection'
import FAQSection from '../../components/FAQSection/FAQSection'
import JoinUsNow from '../../components/JoinUsNow/JoinUsNow'

const Contact = () => {
  return (
    <div className='Contactt'>
        <ExplorePortfolio/>
        <ContactSection/>
        <FAQSection/>
         <div style={{ display: 'flex', justifyContent: 'center' ,textAlign:'center' }}>
  <JoinUsNow />
</div>
    </div>
  )
}

export default Contact