import React from 'react'
import styled from 'styled-components'

import CharacterClaimBox from '../components/CharacterClaimBox'
import CreateGroupBox from '../components/CreateGroupBox'
import GroupListings from '../components/GroupListings'
import LinearLayout from '../components/LinearLayout'

const StyledLinearLayout = styled(LinearLayout)`
    grid-gap: 10px;
`

export default class Home extends React.Component{

    render() {
        return(
            <StyledLinearLayout>
                <CharacterClaimBox />
                <CreateGroupBox />
                <GroupListings />
            </StyledLinearLayout>
        )
    }
}