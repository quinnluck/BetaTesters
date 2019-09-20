import React from 'react'
import styled from 'styled-components'

import Box from './Box'
import Label from './Label'
import LinearLayout from './LinearLayout'
import Button from './Button'

const StyledHr = styled.hr`
    width: 100%;
    border-color: #000;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const StyledLinearLayout = styled(LinearLayout)`
    grid-auto-rows: minmax(50px, 60px);
`

export default class Users extends React.Component{
    render() {
        return(
            <Box>
                <LinearLayout>
                    <div>
                        <Label>Username (In game name):</Label>
                        <input></input>
                    </div>
                    <Button />
                </LinearLayout>
            </Box>
        )
    }
}
