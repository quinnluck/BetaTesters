import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import {
    Container
} from "@material-ui/core";
import Label from "./shared-components/Label";
import GroupRow from "./shared-components/GroupRow";
import API from "../utils/API";



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
            errorMessage: undefined,
            groups: undefined
        }
    }


    componentDidMount() {
        this._lookupGroups()
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

    _lookupGroups = () => {
        API.get(`/groups`).then(res => {


            console.log("groups: " + res.data)

            this.setState({ errorMessage: undefined, groups: res.data })
        }).catch(error => {
            this.setState({
                errorMessage: "RsLFG groups had trouble loading",
                groups: undefined
            })
            console.log("error: " + error)
        })
    }
}

export default withStyles(styles)(GroupListings)