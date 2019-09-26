import React from 'react'
import styled from 'styled-components'
import IconLevel from './IconLevel'


const StyledTemplate = styled.div`
    background-color: darkblue;
`

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`

const StyledColumn = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`

const SkillColumn = props => (
    <StyledColumn>
        <StyledRow>{props.row1}</StyledRow>
        <StyledRow>{props.row2}</StyledRow>
        <StyledRow>{props.row3}</StyledRow>
        <StyledRow>{props.row4}</StyledRow>
        <StyledRow>{props.row5}</StyledRow>
    </StyledColumn>
)

export default SkillColumn