import React from 'react'
import styled from 'styled-components'
import SectionText from './SectionText'

import bgConnections from '../assets/bg-connections.svg'
import polarChart from '../assets/polarchart.svg'
import imgIcon from '../assets/img-icon.svg'


export const SectionOne = () => {
  return (
    <Section>
        <BGImg src={bgConnections}/>
        <Flex>
            <Illustration src={polarChart} alt="" />
            <SectionText
                icon = {imgIcon}
                title = 'Extensive Detail'
                pText = 'From photos to videos, to ancestral tracing, to personality charts, TopSeed offers rich, systematized information of every pet available on our site. We aim to bring you the ultimate pet browsing experience.'
            />
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
    width: 100%;
    /* height: 100%; */
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 1;
`

const Flex = styled.div`
    display: flex;
    width: 70%;
    gap: 8em;
    align-items: center;
`
const Illustration = styled.img`
    width: 35vw;
`