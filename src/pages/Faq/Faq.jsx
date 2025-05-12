import React from 'react'
import FieldsStudio from '../../components/FieldsStudio/FieldsStudio'
import Gallery from '../../components/Gallery/Gallery'
import JoinUsNow from '../../components/JoinUsNow/JoinUsNow'
import AnalysisSection from '../../components/AnalysisSection/AnalysisSection'
import AnalysisSection2 from '../../components/AnalysisSection2/AnalysisSection2'

const Faq = () => {
  return (
    <div className="faq">

       <FieldsStudio/>
       <AnalysisSection/>
       <AnalysisSection2/>
       <Gallery/>
        <div style={{ display: 'flex', justifyContent: 'center' ,textAlign:'center' }}>
  <JoinUsNow />
</div>

    </div>
  )
}

export default Faq
