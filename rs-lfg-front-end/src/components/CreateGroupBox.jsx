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

                        <Tabs defaultActiveKey="lfg" variant="tabs">
                            <Tab eventKey="lfg" title="Looking for Group">
                                Looking For Group
                            </Tab>
                            <Tab eventKey="lfm" title="Looking for More">
                                Looking for More
                            </Tab>
                        </Tabs>
                </StyledBox>
            </React.Fragment>
        )
    }
}