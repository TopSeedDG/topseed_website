import React from 'react'
import styled from 'styled-components'


import TSLogoHor from '../assets/TSlogo-hor.svg'
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'

export const TempFooter = () => {
  return (
    <Footer>
        <Flex>
            <About>
                <img src={TSLogoHor} alt="" />
                <p>We are a group friends with diverse backgrouds from business to technology to design, bounded together by our shared love for pets.</p>
            </About>
            <Contact>
                <SocialIcons>
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                </SocialIcons>
                <p>
                    info@topseed.co <br/>
                    (123) 456 - 7890 <br/>
                    Copyright © ACG Inc. <br/>
                </p>
            </Contact>
        </Flex>
    </Footer>
  )
}


const Footer = styled.footer`
    display: flex;
    place-content: center;
    padding: 15vh 0;
    width: 100%;
`

const Flex = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;

    & > div {
        width: 25em;
        color: var(--grey-400);
    }
    
`

const About = styled.div`


    img{
        height: 4em;
    }

    p {
        margin-top: 1em;
    }


`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1em;
    width: 25em;
    color: var(--grey-400);
    
    p {
        text-align: right;
        color: var(--grey-200);
    }
`
const SocialIcons = styled.div`
    display: flex;
    height: 4em;
    gap: 1em;

    img {
        height: 80%;
    }



`