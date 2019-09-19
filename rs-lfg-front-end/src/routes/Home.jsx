import React from 'react'
import Users from './Users'
import Groups from './Groups'

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