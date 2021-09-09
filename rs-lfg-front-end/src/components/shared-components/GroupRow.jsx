import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    TableRow,
    TableCell,
} from "@material-ui/core";

const WhiteTableCell = withStyles({
    root: {
        color: "#FFF",
        borderRight: '1px solid #FFF',
    }
})(TableCell);

const LastCell = withStyles({
    root: {
        color: 'white',
        fontSize: '16px',
    }
})(TableCell);

const GroupRow = ({ id, hostName, activity, experience }) => {
    return (
        <TableRow>
            <WhiteTableCell>{id}</WhiteTableCell>
            <WhiteTableCell>{hostName}</WhiteTableCell>
            <WhiteTableCell>{activity}</WhiteTableCell>
            <LastCell>{experience}</LastCell>
        </TableRow>
    )
}

export default GroupRow