import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    min-width: 100%;
`

const StyledImg = styled.img`
    align-self: center;
`

const StyledSpan = styled.p`
    font-family: "Trebuchet MS";
    font-variant: small-caps;
    font-size: 20px;
    letter-spacing: 1.5px;
    margin-left: 10px;
    margin-bottom: unset;
`


const IconLevel = ({ icon, level }) => (
    <StyledDiv>
        <StyledImg src={icon}></StyledImg>
        <StyledSpan>{level}</StyledSpan>
    </StyledDiv>
);

export default IconLevel