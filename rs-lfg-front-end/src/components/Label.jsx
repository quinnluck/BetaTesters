import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.p`
    font-family: "Lucida Sans Unicode";
    font-size: 25px;
    font-variant: small-caps;
    letter-spacing: 1.5px;
    padding-right: 10px;
    margin: unset;
`

export default class Label extends React.Component {
    render() {
        return(
            <StyledSpan {...this.props}>{this.props.children}</StyledSpan>
        )
    }
}