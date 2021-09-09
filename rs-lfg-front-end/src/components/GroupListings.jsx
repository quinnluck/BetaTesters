import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    unstable_createMuiStrictModeTheme
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
    },
    table: {
        marginBottom: '2.5%',
        // marginTop: '2.5%',
        // backgroundColor: '#14161A',
        backgroundColor: '#1F1F1F',
        border: '1px solid lightGray',
        borderRadius: '7px',
        minHeight: '100%',
        color: 'gray'
    },
    table_container: {
        backgroundColor: 'unset'
    }
};

const HeaderTableCell = withStyles({
    root: {
        color: 'white',
        fontSize: '16px',
        borderRight: '1px solid lightGray',
    }
})(TableCell);

const LastCell = withStyles({
    root: {
        color: 'white',
        fontSize: '16px',
    }
})(TableCell);

const GroupListings = ({ classes, groupListings }) => {
    return(
        <Container className={classes.root} maxWidth="md">
            <Label>Group Listings</Label>
            <TableContainer className={classes.table_container}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <HeaderTableCell width={50}>ID</HeaderTableCell>
                            <HeaderTableCell align="center">Host Name</HeaderTableCell>
                            <HeaderTableCell align="center">Activity</HeaderTableCell>
                            <LastCell align="center" width={150}>Experience</LastCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    { groupListings.map( group => { 
                        console.log(group)
                        return <GroupRow
                            key={group.id}
                            id={group.id} 
                            hostName={group.hostName} 
                            activity={group.activity} 
                            experience={group.experience} />}) 
                    }
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default withStyles(styles)(GroupListings)