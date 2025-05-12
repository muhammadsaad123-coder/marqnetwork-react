import React from 'react'
import './About.css'

import AboutPageIntro from '../../components/AboutPageIntro/AboutUsSection'
import ClassicSkillSection from '../../components/ClassicSkillSection/ClassicSkillSection'
import WorkSmarterSection from '../../components/WorkSmarterSection/WorkSmarterSection'
import TeamMembersSection from '../../components/TeamMembersSection/TeamMembersSection'
import TeamSection from '../../components/TeamSection/TeamSection'
import AwardsSection from '../../components/AwardsSection/AwardsSection'
import ToolsSection from '../../components/ToolsSection/ToolsSection'
import IntegrationCards from '../../components/IntegrationCards/IntegrationCards'
import FAQSection from '../../components/FAQSection/FAQSection'
import JoinUsNow from '../../components/JoinUsNow/JoinUsNow'


const About = () => {
  return (
    <div className="about_container">

      <AboutPageIntro/>
      <ClassicSkillSection />
      <WorkSmarterSection />
      < TeamMembersSection />
      < TeamSection/>
      <AwardsSection/>
      <ToolsSection/>
      <IntegrationCards/>
      <FAQSection/>
      <div style={{ display: 'flex', justifyContent: 'center' ,textAlign:'center' }}>
  <JoinUsNow />
</div>
     

        
    </div>
  )
}

export default About