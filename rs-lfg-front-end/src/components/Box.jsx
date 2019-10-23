import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const FlexContainer = withStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid #000',
        borderRadius: '5px',
        alignContent: 'center',
        width: '100%'
    }
})(Container);

export default class Box extends React.Component{
    render() {
        return(
            <FlexContainer maxWidth="md" {...this.props}>{this.props.children}</FlexContainer>
        )
    }
}
