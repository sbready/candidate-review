import React from 'react'

//Material-UI
import { AppBar, IconButton, Drawer, RaisedButton } from 'material-ui'
import Menu from 'material-ui/svg-icons/navigation/menu';
import MenuList from './MenuList';

class MatAppBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false
        }
    }

    gotoAuth = () => window.location.replace(process.env.REACT_APP_LOGIN)
    

    openDrawer = () => this.setState({ open: !this.state.open });
    closeDrawer = () => this.setState({ open: false });

    render() {

        const rightButtons = (
            <div style={{padding: '10px'}}>
                <RaisedButton label="Login" onClick={this.gotoAuth}/>
                <IconButton onClick={this.openDrawer}><Menu/></IconButton>
            </div>
        )

        return (
            <div>
                <Drawer
                    docked={false}
                    width={300}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                    openSecondary={true}
                >
                <MenuList/>
                </Drawer>
                <AppBar
                    // style={{backgroundColor: 'rgba(250, 150, 0, 0.3'}}
                    iconElementRight={rightButtons} // Shows the delete icon next to the title
                    showMenuIconButton={false} // Shows the hamburger menu on the left of the title
                    // iconElementRight={}
                    // onRightIconButtonClick={this.openDrawer}
                    
                />
            </div>
        )
    }
}

export default MatAppBar