import React from "react";
import styled from "styled-components";

function SectionText({ icon, title, pText, subtitle, width, centered}) {
  return (
    <Wrapper width={width} centered={centered} subtitle={subtitle}>
        <Icon src={icon} />
        <h2>{title}</h2>
        {subtitle === undefined? null : <Subtitle>{subtitle}</Subtitle>}
        <LargeP>{pText}</LargeP>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: ${({ centered }) => centered? 'center' : 'flex-start'};
    width: ${({ width }) => width};

    p {
        color: var(--grey-500);
    }
`
const Icon = styled.img`
    width: 4em;
    height: 4em;
`
const Subtitle = styled.h6`
    color: var(--heather-400);
    margin-top: -0.5em;
`
const LargeP = styled.p`
    font-size: 1.1em;
`

export default SectionText