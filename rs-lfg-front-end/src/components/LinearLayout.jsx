import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: grid;
    grid-gap: 5px;
`

export default class LinearLayout extends React.Component {
    render(){
        return(
            <StyledDiv>{this.props.children}</StyledDiv>
        )
    }
}