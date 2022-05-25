import React from 'react'
import styled from 'styled-components'
import SectionText from './SectionText'

import clinic from '../assets/clinic.svg'
import healthcareIcon from '../assets/healthcare-icon.svg'


export const SectionThree = () => {
  return (
    <Section>
        <Flex>
            <Illustration src={clinic} alt="" />
            <SectionText
                width='25em'
                icon = {healthcareIcon}
                title = 'Healthcare Benefits'
                pText= 'We mandate essential vaccinations and basic health examinations for all our kittens before they leave the cattery. In case of emergency, we offer quick checkin at our partnered veterinarians.'
            />
        </Flex>
    </Section>
  )
}


const Section = styled.section`
    padding: 15vh 0;
    position: relative;
    justify-content: start;
    background-image: linear-gradient(to bottom, #ECF0F6, #FFFFFF)
`


const Flex = styled.div`
    display: flex;
    /* width: 70%; */
    gap: 16em;
    align-items: center
`
const Illustration = styled.img`
    /* transform: translate(-20%,0); */
    width: 35vw;
`