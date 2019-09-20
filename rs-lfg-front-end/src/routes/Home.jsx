import React from 'react'
import Users from '../components/CharacterClaimBox'
import Groups from '../components/CreateGroupBox'

export default class Home extends React.Component{

    render() {
        return(
            <React.Fragment>
                <div>HOME</div>
                <Users />
                <Groups />
            </React.Fragment>
        )
    }
}