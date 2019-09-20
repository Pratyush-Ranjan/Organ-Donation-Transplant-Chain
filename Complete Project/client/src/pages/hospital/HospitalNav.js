import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
// import { MemoryRouter as Router } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

const drawerWidth = 180;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const CollisionLink = React.forwardRef((props, ref) => (
  <RouterLink innerRef={ref} to="/" {...props} />
));

export default function PermanentDrawerLeft() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline />
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
         <List>
          {['Profile', 'Approve-Donor', 'Register-Recipient','Transplant-Match', 'Patient-Record'].map((text, index) => (
           
            <ListItem button key={text} component ={CollisionLink} to ={`/hospital/${text}`}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <main className={classes.content}>
        <div className={classes.toolbar} />
           <h2 className="text-center"> Welcome to the Hospital Dashboard.</h2> 
      </main>  */}



    </div>
  );
}
// import {Navbar, Nav, NavItem, Button, Glyphicon} from 'react-bootstrap';
 
// import React, {Component} from 'react';
 
// import Sidebar from 'react-bootstrap-sidebar';
 
// export default class Example extends Component {
 
//     constructor(props) {
//         super(props);
 
//         this.state = {
//           isVisible: false,
//         };
//     }
 
//     updateModal(isVisible) {
//     	this.state.isVisible = isVisible;
//       this.forceUpdate();
//     }
 
//     render() {
//         return (
//               <div>
//                   <Button bsStyle="primary" onClick={ () => this.updateModal(true) }><Glyphicon glyph="menu-hamburger"/></Button>
//                   <Sidebar side='left' isVisible={ this.state.isVisible } onHide={ () => this.updateModal(false) }>
//                     <Nav>
//                       <NavItem href="#">Link 1</NavItem>
//                       <NavItem href="#">Link 2</NavItem>
//                       <NavItem href="#">Link 3</NavItem>
//                       <NavItem href="#">Link 4</NavItem>
//                     </Nav>
//                   </Sidebar>
//               </div>
//         );
//     }
// }
 

