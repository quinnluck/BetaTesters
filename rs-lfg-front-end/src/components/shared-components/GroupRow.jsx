import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import {
    Container,
    Grid
} from "@material-ui/core";
import Label from "./Label";
// import Moment from "moment";

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

const GroupRow = ({ classes, id, hostName, activity, experience }) => {
    return (
        <Container className={classes.root} maxWidth="md">
            <Grid container direction="row" justify="center" alignItems="center">
                <React.Fragment>
                    <Grid item xs={3} className={classes.groupSection}>
                        <Label>Id:</Label>
                        <Label className={classes.hostText}>{id}</Label>
                    </Grid>

                    <Grid item xs={3} className={classes.groupSection}>
                        <Label>Host Name:</Label>
                        <Label className={classes.hostText}>{hostName}</Label>
                    </Grid>

                    <Grid item xs={3} className={classes.groupSection}>
                        <Label>Activity:</Label>
                        <Label className={classes.hostText}>{activity}</Label>
                    </Grid>

                    <Grid item xs={3} className={classes.groupSection}>
                        <Label>Experience:</Label>
                        <Label className={classes.hostText}>{experience}</Label>
                    </Grid>
                </React.Fragment>                    
            </Grid>
        </Container>
    )
}

export default withStyles(styles)(GroupRow)