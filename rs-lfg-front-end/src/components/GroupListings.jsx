import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";
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

const GroupListings = ({ classes, groupListings }) => {
    return(
        <Container className={classes.root} maxWidth="md">
            <Label>Group Listings</Label>
            { groupListings.map( group => { 
                console.log(group)
                return <GroupRow
                            key={group.id}
                            id={group.id} 
                            hostName={group.hostName} 
                            activity={group.activity} 
                            experience={group.experience} />}) 
            }
        </Container>
    )
}

export default withStyles(styles)(GroupListings)