import React from "react";
import styled from "styled-components";

function SectionText({ icon, title, pText, width }) {
  return (
    <Wrapper width={width}>
        <Icon src={icon} />
        <h2>{title}</h2>
        <p>{pText}</p>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    width: ${({ width }) => width};
`
const Icon = styled.img`
    width: 4em;
    height: 4em;
`

export default SectionText