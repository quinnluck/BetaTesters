import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.span`
    font-family: "Lucida Sans Unicode";
    font-size: 25px;
    font-variant: small-caps;
    letter-spacing: 1.5px;
    margin-left: 10px;
    margin-right: 10px;
`

export default class Label extends React.Component {
    render() {
        return(
            <StyledSpan>{this.props.children}</StyledSpan>
        )
    }
}