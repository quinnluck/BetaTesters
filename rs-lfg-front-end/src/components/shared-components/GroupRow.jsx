import React from 'react'
import { withStyles } from '@material-ui/core/styles';

import {
    Container,
    Grid
} from "@material-ui/core";

const styles = {
    root: {
        marginBottom: '5%',
        marginTop: '5%',
        backgroundColor: '#14161A',
        border: '1px solid #000',
        borderRadius: '5px',
    }
};

class GroupRow extends React.Component {


    render() {
        var { classes } = this.props

        return (
            <Container className={classes.root} maxWidth="md">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={3}>
                        <div>pull group info from DB</div>

                    </Grid>
                    <Grid item xs={9}>
                        <div>notes go here</div>

                    </Grid>
                </Grid>
            </Container>

        )
    }
}

export default withStyles(styles)(GroupRow)