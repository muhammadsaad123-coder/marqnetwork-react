import React from 'react'
import ExplorePortfolio from '../../components/ExplorePortfolio/ExplorePortfolio'
import FAQSection from '../../components/FAQSection/FAQSection'
import JoinUsNow from '../../components/JoinUsNow/JoinUsNow'
import Gallery from '../../components/Gallery/Gallery'

const Portfolio = () => {
  return (
    <div className='portfolio'>

        <ExplorePortfolio/>
        <Gallery/>
        <FAQSection/>
           <div style={{ display: 'flex', justifyContent: 'center' ,textAlign:'center' }}>
  <JoinUsNow />
</div>

    </div>
  )
}

export default Portfolio