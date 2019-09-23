import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    width: 150px;
    height: 25px;
    cursor: pointer;
    font-family: "Lucida Sans Unicode";
    font-variant: small-caps;
`

export default class Button extends React.Component {
    render(){
        return(
            <StyledButton 
                {...this.props} 
                type="button" 
                disabled={this.props.disabled}
            >
                {this.props.placeholder}
            </StyledButton>
        )
    }
}