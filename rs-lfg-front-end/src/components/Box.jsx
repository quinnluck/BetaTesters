import React from 'react'
import styled from 'styled-components'

const StyledBox = styled.div`
    display: flex;
    width: 100vh;
    border: 1px solid #000;
    border-radius: 5px;
`

export default class Box extends React.Component{
    render() {
        return(
            <StyledBox {...this.props}>{this.props.children}</StyledBox>
        )
    }
}
