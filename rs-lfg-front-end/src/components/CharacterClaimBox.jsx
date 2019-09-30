import React from 'react'
import styled from 'styled-components'

import Box from './Box'
import Label from './Label'
import LinearLayout from './LinearLayout'
import Button from './Button'
import API from '../utils/API';

import SkillTemplate from './skill-components/SkillTemplate'


const StyledHr = styled.hr`
    width: 100%;
    border: 1px solid #000;
    background-color: #000;
    margin-right: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
`

const StyledBox = styled(Box)`
    justify-content: center;
`

const StyledSpacer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
`

const StyledLinearLayout = styled(LinearLayout)`
    width: 100%;
`

const StyledSkillTemplate = styled(SkillTemplate)`
    display: flex;
    justify-content: center;
    width: 80%;
`

const StyledErrorMessage = styled(Label)`
    font-size: 16px;
`

export default class CharacterClaimBox extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            usernameInput: '',
            username: '',
            playerStats: undefined,
            errorMessage: undefined,
        }

        this._lookupStats = this._lookupStats.bind(this)
        this._onChangeUsername = this._onChangeUsername.bind(this)
    }

    render() {
        return (
            <React.Fragment>
                <Label>Step 1: Lookup Character</Label>
                <StyledBox>
                    <StyledLinearLayout>
                        <div>
                            <Label>Username (In game name):</Label>
                            <input onChange={this._onChangeUsername}></input>
                        </div>
                        <StyledHr />
                        <StyledSpacer>
                            <Button onClick={this._lookupStats} disabled={this.state.usernameInput === ''} placeholder="Look up stats" />
                        </StyledSpacer>

                        {this.state.playerStats && this.state.username &&
                            <StyledSpacer>
                            <StyledSkillTemplate
                                characterName={this.state.username.charAt(0).toUpperCase() + this.state.username.slice(1)}
                                combatlvl={this._calculateCombat(
                                    this.state.playerStats[1][1],
                                    this.state.playerStats[3][1],
                                    this.state.playerStats[2][1],
                                    this.state.playerStats[7][1],
                                    this.state.playerStats[5][1],
                                    this.state.playerStats[4][1],
                                    this.state.playerStats[24][1],
                                    this.state.playerStats[6][1]
                                )}
                                characterTotal={parseInt(this.state.playerStats[0][1]).toLocaleString()}
                                characterXp={parseInt(this.state.playerStats[0][2]).toLocaleString()}
                                attacklvl={this.state.playerStats[1][1]}
                                defencelvl={this.state.playerStats[2][1]}
                                strengthlvl={this.state.playerStats[3][1]}
                                hplvl={this.state.playerStats[4][1]}
                                rangedlvl={this.state.playerStats[5][1]}
                                prayerlvl={this.state.playerStats[6][1]}
                                magiclvl={this.state.playerStats[7][1]}
                                cookinglvl={this.state.playerStats[8][1]}
                                wclvl={this.state.playerStats[9][1]}
                                fletchinglvl={this.state.playerStats[10][1]}
                                fishinglvl={this.state.playerStats[11][1]}
                                fmlvl={this.state.playerStats[12][1]}
                                craftinglvl={this.state.playerStats[13][1]}
                                smithinglvl={this.state.playerStats[14][1]}
                                mininglvl={this.state.playerStats[15][1]}
                                herblorelvl={this.state.playerStats[16][1]}
                                agilitylvl={this.state.playerStats[17][1]}
                                thievinglvl={this.state.playerStats[18][1]}
                                slayerlvl={this.state.playerStats[19][1]}
                                farminglvl={this.state.playerStats[20][1]}
                                rclvl={this.state.playerStats[21][1]}
                                hunterlvl={this.state.playerStats[22][1]}
                                constructionlvl={this.state.playerStats[23][1]}
                                summoninglvl={this.state.playerStats[24][1]}
                                dunglvl={this.state.playerStats[25][1]}
                                divlvl={this.state.playerStats[26][1]}
                                inventionlvl={this.state.playerStats[27][1]}
                            />
                        </StyledSpacer>
                        }
                        {this.state.errorMessage &&
                            <StyledErrorMessage>{this.state.errorMessage}</StyledErrorMessage>
                        }

                    </StyledLinearLayout>
                </StyledBox>
            </React.Fragment>
        )
    }

    _onChangeUsername(e) {
        this.setState({
            usernameInput: e.target.value
        })
    }

    _lookupStats = () => {
        API.get(`/player/${this.state.usernameInput}`).then(res => {

            var stats = res.data.split('\n')
            var splitStats = stats.map(stat => stat.split(','))

            console.log("stats: " + splitStats)

            this.setState({ errorMessage: undefined, playerStats: splitStats, username: this.state.usernameInput })
        }).catch(error => {
            this.setState({ 
                errorMessage: "User not found!  Membership is needed for hiscores, or user was misspelled.",
                username: '',
                playerStats: undefined
            })
            console.log("error: " + error)
        })
    }

    _calculateCombat = (atk, str, def, mage, range, hp, summ, prayer) => {
        return Math.floor(((1.3 * Math.max((parseInt(atk) + parseInt(str)), (2*parseInt(mage)), (2*parseInt(range)))) + parseInt(def) + parseInt(hp) + Math.floor(.5 * parseInt(summ)) + Math.floor(.5 * parseInt(prayer))) / 4)
    }
}
