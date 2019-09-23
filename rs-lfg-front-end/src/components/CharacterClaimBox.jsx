import React from 'react'
import styled from 'styled-components'

import Box from './Box'
import Label from './Label'
import LinearLayout from './LinearLayout'
import Button from './Button'
import API from '../utils/API';
import RsApi from "runescape-api"
import Axios from 'axios'


const StyledHr = styled.hr`
    width: 100%;
    border-color: #000;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const StyledBox = styled(Box)`
    justify-content: center;
`

const StyledButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default class Users extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: null
        }
        this._lookupStats = this._lookupStats.bind(this)
        this._onChangeUsername = this._onChangeUsername.bind(this)
    }

    render() {
        return (
            <React.Fragment>
                <Label>Step 1: Lookup Character</Label>
                <StyledBox>
                    <LinearLayout>
                        <div>
                            <Label>Username (In game name):</Label>
                            <input onChange={this._onChangeUsername}></input>
                        </div>
                        <StyledHr />
                        <StyledButtonWrapper>
                            <Button onClick={this._lookupStats} placeholder="Look up stats" />
                        </StyledButtonWrapper>
                    </LinearLayout>
                </StyledBox>
            </React.Fragment>
        )
    }

    _onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    _lookupStats = () => {
        let usernameFormatted = this.state.username.split(' ').join('_')
        // RsApi.rs.hiscores.player(usernameFormatted).then(res => logInfo(res.data))
        Axios.get('https://secure.runescape.com/m=hiscore/index_lite.ws?player=leptu_x').then(res => console.log(res.data))
        API.get('/users').then(res => console.log(res.data))
        // return API.get("/users").then((request, response) => {
        //     console.log(response)
        // })
    }
}


function logInfo(info) {
    var skills = info.skills, activities = info.activities, maxed = info.maxed;

    console.log("skills: " + skills);
    console.log("isMaxed: " + maxed)
    console.log("activities: " + activities)
}
