import React from 'react'

import CharacterClaimBox from '../components/CharacterClaimBox'
import CreateGroupBox from '../components/CreateGroupBox'
import GroupListings from '../components/GroupListings'

import { 
    BottomNavigation,
    Container, 
    BottomNavigationAction,
    AppBar,
    Grid,
    withStyles
} from '@material-ui/core'
import OsrsPng from '../images/osrs-logo.png'
import Rs3Png from '../images/runescape3-icon.jpg'
import RSlogo from '../images/RsLogo.png'
import SmallLogo from '../components/SmallLogo'
import Label from '../components/Label'

const styles = ({
    root: {
        flexGrow: 1
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        padding: '5px',
        width: '20%',
        height: '20%'
    },
    content: {
        height: '100%',
        marginTop: '70px',
        backgroundColor: 'rgb(40,44,52,0.8)'
    }
});

const NavBar = withStyles({
    root: {
        backgroundColor: '#282c34',
    }
})(BottomNavigation)

const NavItem = withStyles({
    root: {
        color: 'white',
        '&:hover': {
            backgroundColor: '#3D434F',
        },
        '&.Mui-selected': {
            backgroundColor: '#101010',
            color: 'white',
            fontFamily: 'Lucida Sans Unicode',
        },
        '&.MuiBottomNavigationAction-iconOnly': {
            paddingTop: '14px'
        }
    }
})(BottomNavigationAction)

const AppBarBlack = withStyles({
    root: {
        backgroundColor: '#282c34',
    }
})(AppBar)


class Home extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            tabSelected: "rs3"
        }
    }

    render() {

        const {classes} = this.props

        return (
            <React.Fragment>
                <AppBarBlack defaultValue={this.state.tabSelected} position="absolute" >
                    <Grid container justify="center" alignItems="center" spacing={0}>
                        <Grid className={classes.image} item xs={3}>
                            <img className={classes.img} src={RSlogo} />
                            <Label>Runescape LFG</Label>
                        </Grid>
                        <Grid item xs={6}>
                            <NavBar 
                                value={this.state.tabSelected}
                                onChange={(e, newValue) => {
                                    this.setState({ tabSelected: newValue });
                                }}
                                showLabels
                            >
                                <NavItem value="rs3" icon={<SmallLogo icon={Rs3Png} />} />
                                <NavItem  value="osrs" icon={<SmallLogo icon={OsrsPng} />} />

                            </NavBar>
                        </Grid>
                        <Grid item xs={3}>
                            <Label>RS grouping made easy</Label>
                        </Grid>
                    </Grid>
                </AppBarBlack>
                
                <Container className={classes.content} maxWidth="md">
                    <CharacterClaimBox />
                    <CreateGroupBox />
                    <GroupListings />
                </Container>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(Home)
