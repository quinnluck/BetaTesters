import React from 'react'
import styled from 'styled-components'

import Box from './Box'
import Label from './Label'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Button from 'react-bootstrap/Button'



const StyledBox = styled(Box)`
    justify-content: center;
`

const StyledLfgBox = styled(Box)`
    justify-content: center;
    width: 90vh;
`

const StyledInputGroup = styled(InputGroup)`
    padding: 10px;
    width: 40vh;
    align-items: center;
`

const StyledExperienceGroup = styled(InputGroup)`
    padding: 10px;
    width: 40vh;
    justify-content: center;
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
                    <StyledInputGroup size="sm">
                        <Label>Host:</Label>
                        <FormControl />
                    </StyledInputGroup>

                    <StyledInputGroup size="sm">
                        <Label>Activity:</Label>
                        <FormControl />
                    </StyledInputGroup>

                    <StyledInputGroup size="sm">
                        <Label>Notes:</Label>
                        <FormControl />
                    </StyledInputGroup>

                    <StyledExperienceGroup size="sm">
                        <Label>Experience:</Label>
                        <ToggleButtonGroup type="radio" name="sherpa-novice">
                            <ToggleButton variant="outline-warning" value={1}>Sherpa</ToggleButton>
                            <ToggleButton variant="outline-primary" value={2}>Intermediate</ToggleButton>
                            <ToggleButton variant="outline-success" value={3}>Novice</ToggleButton>
                        </ToggleButtonGroup>
                    </StyledExperienceGroup>
                    
                    <div>
                        <Tabs defaultActiveKey="lfm" variant="tabs">
                            <Tab eventKey="lfm" title="Looking for More">
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

                                <Button
                                    variant="info"
                                    size="sm"
                                >
                                    Post my group
                                </Button>
                            </Tab>
                            <Tab eventKey="lfg" title="Looking for Group">
                                <Label>Character description: </Label>
                                <InputGroup>
                                    <FormControl as="textarea" />
                                </InputGroup>
                                <Button
                                    variant="info"
                                    size="sm"
                                >
                                    Post my character
                                </Button>
                            </Tab>
                        </Tabs>
                    </div>
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