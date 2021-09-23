import React from 'react'

import { withStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    TextField,
    Radio,
    RadioGroup,
    Select
} from '@material-ui/core';

import Label from './shared-components/Label'
import GroupListings from './GroupListings';


const CssTextField = withStyles({
    root: {
        borderRadius: 4,
        backgroundColor: 'white',
        color: '#0092DB',
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiFilledInput-underline:after': {
            borderBottomColor: '#0092DB',
        },
        '& .MuiFilledInput-root': {
            '& fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#0092DB',
            },
        },
    },
})(TextField);

const NoviceFormControlLabel = withStyles({
    root: {
        color: 'green'
    }
})(FormControlLabel)

const IntermediateFormControlLabel = withStyles({
    root: {
        color: 'red'
    }
})(FormControlLabel)

const SherpaFormControlLabel = withStyles({
    root: {
        color: 'yellow'
    }
})(FormControlLabel)

const ExpertFormControlLabel = withStyles({
    root: {
        color: 'darkcyan'
    }
})(FormControlLabel)

const NoviceButton = withStyles({
    root: {
        color: 'green',
        '&:hover': {
            backgroundColor: 'rgb(0,200,0,0.2)',
        }
    }
})(props => <Radio color="default" {...props} />)

const IntermediateButton = withStyles({
    root: {
        color: 'red',
        '&:hover': {
            backgroundColor: 'rgb(255,64,64,0.2)',
        }
    }
})(props => <Radio color="default" {...props} />)

const SherpaButton = withStyles({
    root: {
        color: 'yellow',
        '&:hover': {
            backgroundColor: 'rgb(255,255,160,0.2)'
        }
    }
})(props => <Radio color="default" {...props} />)

const ExpertButton = withStyles({
    root: {
        color: 'darkcyan',
        '&:hover': {
            backgroundColor: 'rgb(0,139,139,0.2)'
        }
    }
})(props => <Radio color="default" {...props} />)


const styles = {
    root: {
        marginTop: '5%',
        marginBottom: '5%',
        backgroundColor: '#2D323B',
        border: '1px solid #000',
        borderRadius: '5px',
    },
    button_group: {
        border: '1px solid #000',
        borderRadius: '5px',
        marginBottom: '10px'
    },
    experience_group: {
        color: 'white',
    },
    legend_label: {
        color: 'white'
    },
    grid_height: {
        placeSelf: 'flex-start'
    },
    stats_button: {
        backgroundColor: "#005580",
        marginBottom: '10px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#00699E',
        },
        '&.Mui-disabled': {
            color: '#747474',
            backgroundColor: '#A6A6A6'
        }
    },
};

class CreateGroupBox extends React.Component{
    state = {
        currentGroupId: 1,
        hostName: '',
        activity: '',
        notes: '',
        experience: '',
        groups: []
    }

    render(){
        const { classes } = this.props
        var { currentGroupId, hostName, activity, notes, experience, groups } = this.state

        return(
            <Container className={classes.root} maxWidth="md">
                <Label className={classes.legend_label}>Group Setup</Label>

                <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
                    <Grid item xs={8}>
                        <Grid container>
                            <Grid item xs={12}>
                                <Grid container direction="row" justify="center" alignItems="center" spacing={0}>
                                    <Grid item xs={6}>
                                        <CssTextField
                                            id="standard-host"
                                            label="Host*"
                                            value={hostName}
                                            onChange={(e) => this.setState({ hostName: e.target.value })}
                                            margin="normal"
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Select
                                            id="activity-select"
                                            value={activity}
                                            onChange={(e) => this.setState({ activity: e.target.value })}
                                            label="Activity*"
                                        >
                                    
                                        </Select>
                                        <CssTextField
                                            id="standard-activity"
                                            label="Activity*"
                                            value={activity}
                                            onChange={(e) => this.setState({ activity: e.target.value })}
                                            margin="normal"
                                            variant="filled"
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <Grid container direction="row" justify="center" alignItems="center">
                                    <Grid item xs={12}>
                                        <FormControl className={classes.button_group} component="fieldset">
                                            <FormLabel key="exp_label" className={classes.experience_group} component="legend">
                                                <Label className={classes.legend_label}>Experience*</Label>
                                            </FormLabel>
                                            <RadioGroup
                                                key="radio_Btn_Group"
                                                value={experience}
                                                onChange={(e) => this.setState({ experience: e.target.value })}
                                                row
                                            >
                                                <NoviceFormControlLabel
                                                    key="novice_button"
                                                    value="Novice"
                                                    control={<NoviceButton />}
                                                    label="Novice"
                                                    labelPlacement="bottom"
                                                />
                                                <IntermediateFormControlLabel
                                                    key="int_button"
                                                    value="Intermediate"
                                                    control={<IntermediateButton />}
                                                    label="Intermediate"
                                                    labelPlacement="bottom"
                                                />
                                                <ExpertFormControlLabel
                                                    key="expert_button"
                                                    value="Expert"
                                                    control={<ExpertButton />}
                                                    label="Expert"
                                                    labelPlacement="bottom"
                                                />
                                                <SherpaFormControlLabel
                                                    key="sherpa_button"
                                                    value="Sherpa"
                                                    control={<SherpaButton />}
                                                    label="Sherpa"
                                                    labelPlacement="bottom"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        
                    </Grid>
                    <Grid className={classes.grid_height} item xs={4}>
                        <Grid container direction="row" justify="center" alignItems="center">
                            <Grid item xs={12}>
                                <CssTextField
                                    id="standard-notes"
                                    label="Notes"
                                    rowsMax="6"
                                    multiline
                                    rows="6"
                                    className={classes.textField}
                                    value={notes}
                                    onChange={(e) => this.setState({ notes: e.target.value })}
                                    margin="normal"
                                    variant="filled"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12}>
                        <Button
                            className={classes.stats_button}
                            variant="contained"
                            color="primary"
                            onClick={() => this._addGroup(groups, currentGroupId, hostName, activity, experience)}
                            disabled={hostName && activity && experience ? false : true}
                        >
                            List Group
                        </Button>
                    </Grid>
                </Grid>

                <GroupListings groupListings={groups} />

            </Container>
        )
    }

    _addGroup = (currentGroups, currentGroupId, hostName, activity, experience) => {
        this.setState(
            {
                groups: [ 
                    ...currentGroups, 
                    { id: currentGroupId,
                    hostName,
                    activity,
                    experience }
                ],
                currentGroupId: this.state.currentGroupId + 1
            }
        )
    }
}

export default withStyles(styles)(CreateGroupBox)