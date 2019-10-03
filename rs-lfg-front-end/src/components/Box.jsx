import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100vh;
    border: 1px solid #000;
    border-radius: 5px;
`

export default class Box extends React.Component{
    render() {
        return(
            <StyledDiv {...this.props}>{this.props.children}</StyledDiv>
        )
    }
}
