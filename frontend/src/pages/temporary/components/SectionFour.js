import React from 'react'
import styled from 'styled-components'
import SectionText from './SectionText'

import bgSpotlight from '../assets/bg-spotlight.svg'
import breeder from '../assets/breeder.svg'
import gemIcon from '../assets/gem-icon.svg'


export const SectionFour = () => {
  return (
    <Section>
        <BGImg src={bgSpotlight}/>
        <Flex>
            <SectionText
                width='30em'
                icon = {gemIcon}
                title = 'Got Some Paws to Show?'
                pText = {<>If you are seeking to boost your customer base, look no further as we connect you with the largest online community of pet lovers across the United States. <br/> <br/> We offer to take the burden of creating an online presence off your shoulder by providing you with the most modern, user-friendly interface for managing pet content and online transactions, so you can focus on what is obviously more important — giving the animals all the care and attention they deserve.</>}
                centered = {true}
                subtitle = 'To all the responsible breeders'
            />
            <Illustration src={breeder} alt="" />
        </Flex>
    </Section>
  )
}


const Section = styled.section`
    padding: 10vh 0 1em 0;
    position: relative;
    justify-content: center;
`

const BGImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    z-index: -1;
    opacity: 1;
`


const Flex = styled.div`
    /* position: absolute; */
    /* height: 100%; */
    /* padding-top: 5vh; */
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    /* top: 8%; */
    /* left: 50%; */
    /* transform: translate(-50%, 0); */
    gap: 4em;
    align-items: center;
`
const Illustration = styled.img`
    /* transform: translate(-20%,0); */
    width: 35vw;
`