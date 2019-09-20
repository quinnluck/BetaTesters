import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 150px;
    height: 25px;
    
`

export default class Button extends React.Component {
    render(){
        return(
            <StyledButton type="button"/>
        )
    }
}