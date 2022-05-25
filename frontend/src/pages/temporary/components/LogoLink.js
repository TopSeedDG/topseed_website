import React from 'react'
import styled from 'styled-components'

export const LogoLink = ({ logo, logoName, url }) => {
  return (
    <Link href={url} target='_blank'>
        <img src={logo} alt="" />
        <p>{logoName}</p>
    </Link>
  )
}

const Link = styled.a`
    color: initial;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    opacity: 0.4;
    align-items: center;
    cursor: pointer;
    transition: 0.6s;

    &:visited {
        text-decoration: none;
    }

    &:hover {
    opacity: 1;
    }

    img {
        height: 5em;
        width: 5em;
        object-fit: contain;
    }
    p {
        font-weight: 700;
        font-size: 0.9em;
    }

`