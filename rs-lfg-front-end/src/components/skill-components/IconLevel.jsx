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

const StyledSpan = styled.span`
    font-family: "Trebuchet MS";
    font-variant: small-caps;
    letter-spacing: 1.5px;
    margin-left: 10px;
    margin-right: 10px;
`


const IconLevel = ({ icon, level }) => (
    <StyledDiv>
        <StyledImg src={icon}></StyledImg>
        <StyledSpan>{level}</StyledSpan>
    </StyledDiv>
);

export default IconLevel