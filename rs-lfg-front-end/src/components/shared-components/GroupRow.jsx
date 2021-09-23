import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    TableRow,
    TableCell,
} from "@material-ui/core";

const WhiteTableCell = withStyles({
    root: {
        borderRight: '1px solid #FFF',
    }
})(TableCell);

const LastCell = withStyles({
    root: {
        fontSize: '16px',
    }
})(TableCell);

const GroupRow = ({ id, hostName, activity, experience }) => {
    return (
        <TableRow key={id}>
            <WhiteTableCell>{id}</WhiteTableCell>
            <WhiteTableCell>{hostName}</WhiteTableCell>
            <WhiteTableCell>{activity}</WhiteTableCell>
            <LastCell>{experience}</LastCell>
        </TableRow>
    )
}

export default GroupRow