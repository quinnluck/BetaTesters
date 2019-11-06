import React from 'react'
import { withStyles } from '@material-ui/core/styles';


const styles = ({
    root: {
        height: '25%',
        width: '25%'
    }
});

function SmallLogo({ icon, classes }){

    return(<img className={classes.root} src={icon} alt=""></img>)
}

export default withStyles(styles)(SmallLogo)