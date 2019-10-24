import React from 'react'
import { withStyles } from '@material-ui/styles'


const styles = ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        minWidth: '100%'
    },
    img: {
        alignSelf: 'center'
    },
    label: {
        fontFamily: 'Trebuchet MS',
        fontVariant: 'small-caps',
        fontSize: '20px',
        letterSpacing: '1.5px',
        marginLeft: '10px',
        marginBottom: 'unset',
        marginTop: '5px'
    }
});

function IconLevel({ icon, level, classes }){
    return (
        <div className={classes.root}>
            <img className={classes.img} src={icon}></img>
            <p className={classes.label}>{level}</p>
        </div>
    )
}

export default withStyles(styles)(IconLevel)
