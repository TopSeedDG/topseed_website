import React from 'react'
import styled from 'styled-components'
import SectionText from './SectionText'
import { LogoLink } from './LogoLink'

import bgMountains from '../assets/bg-mountains.svg'
import certificate from '../assets/certificate.svg'
import certifiedIcon from '../assets/certified-icon.svg'
import ticaLogo from '../assets/tica-logo.png'



export const SectionTwo = () => {
  return (
    <Section>
        <BGImg src={bgMountains}/>
        <Flex>
            <div>
                <SectionText
                    width = '22em'
                    icon = {certifiedIcon}
                    title = 'Certified Breeders'
                    pText = 'We take extra steps to ensure all of our kittens are bred healthily and ethically by only accepting breeders certified by the most reputable international feline associations.'
                />
                <LogoWrapper>
                    <LogoLink
                        logo={ticaLogo}
                        logoName='TICA'
                        url='https://tica.org/'
                    />
                </LogoWrapper>
            </div>


            <Illustration src={certificate} alt="" />
        </Flex>

    </Section>
  )
}


const Section = styled.section`
    padding: 15vh 0;
    position: relative;
`
const BGImg = styled.img`
    position: absolute;
    width: 50%;
    /* height: 100%; */
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 1;
`

const Flex = styled.div`
    display: flex;
    width: 70%;
    gap: 5em;
    align-items: center;
`
const Illustration = styled.img`
    width: 35vw;
    position: absolute;
    right: -5%;
`
const LogoWrapper = styled.div`
    display: flex;
    margin-top: 1em;
`