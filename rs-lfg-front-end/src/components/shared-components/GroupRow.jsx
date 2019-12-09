import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import {
    Container,
    Grid
} from "@material-ui/core";
import API from "../../utils/API";
import Label from "./Label";
import Moment from "moment";

const styles = {
    root: {
        marginBottom: '2.5%',
        marginTop: '2.5%',
        backgroundColor: '#14161A',
        border: '1px solid #000',
        borderRadius: '5px',
        height: '100px'
    },
    groupSection: {
        textAlign: 'left'
    },
    dateSection: {
        textAlign: 'right'
    },
    hostText: {
        fontSize: '20px'
    },
    dateText: {
        fontSize: '15px'
    }
};

class GroupRow extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            groups: undefined,
            errorMessage: undefined
        }

        this.pullGroupsFromBackend()
    }


    render() {
        var { classes } = this.props

        return (
            <Container className={classes.root} maxWidth="md">
                <Grid container direction="row" justify="center" alignItems="center">
                    { this.state.groups && this.state.groups.map( group => {
                        return (
                            <React.Fragment>
                                <Grid item xs={3} className={classes.groupSection}>
                                    <Label>{group.name}</Label>
                                    <Label className={classes.hostText}>Host: {group.host_username}</Label>
                                </Grid>

                                <Grid item xs={7}>
                                    <Label>{group.notes}</Label>
                                </Grid>

                                <Grid item xs={2} className={classes.dateSection}>
                                    <Label className={classes.dateText}>{group.date_created}</Label>
                                </Grid>
                            </React.Fragment>
                        )
                    })
                    }
                </Grid>
            </Container>
        )
    }



    pullGroupsFromBackend() {
        API.get(`/groups/`).then(res => {

            var groupData = res.data

            groupData.map( group => {
                group.date_created = Moment(group.date_created).fromNow()
            })

            console.log("groups: " + groupData)

            this.setState({ errorMessage: undefined, groups: groupData })
        }).catch(error => {
            this.setState({
                errorMessage: "Problem loading groups!",
                groups: undefined
            })
            console.log("error: " + error)
        })
    }
}

export default withStyles(styles)(GroupRow)