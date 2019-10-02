import React from 'react'
import styled from 'styled-components'

import Box from './Box'
import Label from './Label'
import LinearLayout from './LinearLayout'

const StyledBox = styled(Box)`
    justify-content: center;
`

const StyledLinearLayout = styled(LinearLayout)`
    width: 100%;
`

export default class CreateGroupBox extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Label>Set up a Group</Label>
                <StyledBox>
                    <StyledLinearLayout>
                        <div>
                            <Label>Host:</Label>
                            <input />
                        </div>
                        <div>
                            <Label>Activity:</Label>
                            <input />
                        </div>
                        <div>
                            <Label>Notes:</Label>
                            <input />
                        </div>
                        <div>
                            <Label>Experience:</Label>
                            <div>
                                <Label>Sherpa</Label>
                                <input type="checkbox" name="Sherpa" />
                            </div>
                            <div>
                                <Label>Novice</Label>
                                <input type="checkbox" name="Novice" />
                            </div>
                        </div>
                        <div>
                            LOOKING FOR GROUP / LOOKING FOR MORE
                        </div>
                    </StyledLinearLayout>
                </StyledBox>
            </React.Fragment>
        )
    }
}