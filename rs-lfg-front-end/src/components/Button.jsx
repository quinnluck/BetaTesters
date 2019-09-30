import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 150px;
    height: 25px;
    cursor: ${props => !props.disabled && 'pointer'};
    font-family: "Lucida Sans Unicode";
    font-variant: small-caps;
`

export default class Button extends React.Component {
    render(){
        return(
            <StyledButton 
                {...this.props} 
                type="button" 
            >
                {this.props.placeholder}
            </StyledButton>
        )
    }
}