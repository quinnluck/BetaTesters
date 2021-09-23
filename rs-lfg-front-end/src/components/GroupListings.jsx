import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Paper
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
        //backgroundColor: '#14161A',
        backgroundColor: '#1F1F1F',
        border: '1px solid lightGray',
        borderRadius: '7px',
        minHeight: '100%',
        color: 'gray'
    }
};

const HeaderTableCell = withStyles({
    root: {
        fontSize: '16px',
        borderRight: '1px solid lightGray',
    }
})(TableCell);

const LastCell = withStyles({
    root: {
        fontSize: '16px',
    }
})(TableCell);


const GroupListings = ({ classes, groupListings }) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - groupListings.length) : 0;

    return(
        <Container className={classes.root} maxWidth="md">
            <Label>Group Listings</Label>
            <Paper variant="outlined" sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <HeaderTableCell width={50}>ID</HeaderTableCell>
                                <HeaderTableCell align="center">Host Name</HeaderTableCell>
                                <HeaderTableCell align="center">Activity</HeaderTableCell>
                                <LastCell align="center" width={150}>Experience</LastCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {groupListings.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(group => {
                                console.log(group)
                                return <GroupRow
                                    key={group.id}
                                    id={group.id}
                                    hostName={group.hostName}
                                    activity={group.activity}
                                    experience={group.experience} />
                            })
                            }
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 20]}
                    rowsPerPage={rowsPerPage}
                    component="div"
                    count={groupListings.length}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Container>
    )
}



export default withStyles(styles)(GroupListings)