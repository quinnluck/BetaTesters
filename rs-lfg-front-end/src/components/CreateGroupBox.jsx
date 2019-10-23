import React from 'react'
import styled from 'styled-components'

import Box from './Box'
import Label from './Label'
import Button from '@material-ui/core/Button';
import './CreateGroupStyles.css'


const StyledBox = styled(Box)`
    justify-content: center;
`


const StyledHr = styled.hr`
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid #000;
    background-color: #000;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 10px;
`



const StyledButton = styled(Button)`
    margin-bottom: 10px;
`

export default class CreateGroupBox extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            counterValue: 1
        }
    }

    render(){
        return(
            <React.Fragment>
                <Label>Group Setup</Label>
                <StyledBox>
                        <Label>Host:</Label>
                        <input />

                        <Label>Activity:</Label>
                        <input />

                        <Label>Notes:</Label>
                        <input />

                        <Label>Experience:</Label>
                        <Button />
                        {/* <ToggleButtonGroup type="radio" name="sherpa-novice">
                            <ToggleButton variant="outline-warning" value={1}>Sherpa</ToggleButton>
                            <ToggleButton variant="outline-primary" value={2}>Intermediate</ToggleButton>
                            <ToggleButton variant="outline-success" value={3}>Novice</ToggleButton>
                        </ToggleButtonGroup> */}

                    <StyledHr />
                    
                    {/* <StyledTabs id="myClass" className="myClass" defaultActiveKey="lfm" variant="tabs">
                        <StyledTab eventKey="lfm" title="Looking for More">
                                <Label>Members needed: </Label>
                                <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                        <Button 
                                            variant="info" 
                                            size="sm"
                                            onClick={() => this._addToCounter(1)}
                                        >
                                            +
                                        </Button>
                                    </InputGroup.Prepend>
                                    <FormControl value={this.state.counterValue} aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Append>
                                        <Button 
                                            variant="info" 
                                            size="sm"
                                            onClick={() => this._addToCounter(-1)}
                                        >
                                            -
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>

                                <StyledButton
                                    variant="info"
                                    size="sm"
                                >
                                    Post my group
                                </StyledButton>
                        </StyledTab>
                        <StyledTab eventKey="lfg" title="Looking for Group">
                            <Label>Character description: </Label>
                            <InputGroup>
                                <FormControl as="textarea" />
                            </InputGroup>

                            <StyledButton
                                variant="info"
                                size="sm"
                            >
                                Post my character
                            </StyledButton>
                        </StyledTab>
                        </StyledTabs> */}
                </StyledBox>
            </React.Fragment>
        )
    }

    _addToCounter = (value) => {
        if(value < 0) {
            if(this.state.counterValue > 1) {
                this.setState({ counterValue: this.state.counterValue + value })
            }
        } else {
            if(this.state.counterValue < 10) {
                this.setState({ counterValue: this.state.counterValue + value })
            }
        }
    }
}