import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Container
} from "@material-ui/core";
import Label from "./shared-components/Label";
import GroupRow from "./shared-components/GroupRow";



const styles = {
    root: {
        marginBottom: '5%',
        marginTop: '5%',
        backgroundColor: '#2D323B',
        border: '1px solid #000',
        borderRadius: '5px',
    }
};


class GroupListings extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }



    render() {
        const { classes } = this.props

        return(
            <Container className={classes.root} maxWidth="md">
                <Label>Group Listings</Label>
                <GroupRow />
            </Container>
        )
    }
}

export default withStyles(styles)(GroupListings)