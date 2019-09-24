import React from 'react'
import CharacterClaimBox from '../components/CharacterClaimBox'
import CreateGroupBox from '../components/CreateGroupBox'

export default class Home extends React.Component{

    render() {
        return(
            <React.Fragment>
                <CharacterClaimBox />
                <CreateGroupBox />
            </React.Fragment>
        )
    }
}