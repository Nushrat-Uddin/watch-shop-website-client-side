import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    NavLink
    } from "react-router-dom";

import { Button } from '@mui/material';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../../Homepage/AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import MyOrder from '../../MyOrder/MyOrder';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from './ManageProducts/ManageProducts';

const drawerWidth = 190;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const {admin,logOut}= useAuth();
    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
    };

    const drawer = (
    <div>
        <Toolbar /> 
        <Divider />
        
        <NavLink to={`${url}`} style={{textDecoration:'none',color:'black'}}> <Button color="inherit">Dashboard</Button></NavLink><br/>
        <NavLink to={`${url}/myorder`}style={{textDecoration:'none',color:'black'}}> <Button color="inherit">My Order</Button></NavLink><br/>
        <NavLink to={`${url}/pay`}style={{textDecoration:'none',color:'black'}}> <Button color="inherit">Pay</Button></NavLink><br/>
        <NavLink to={`${url}/review`}style={{textDecoration:'none',color:'black'}}> <Button color="inherit">Review</Button></NavLink><br/>
        

        {admin && <Box>
            <NavLink to={`${url}/makeadmin`}style={{textDecoration:'none',color:'black'}}> <Button color="inherit">Make Admin</Button></NavLink>
            <NavLink to={`${url}/addproduct`}style={{textDecoration:'none',color:'black'}}> <Button color="inherit">Add Product</Button></NavLink>
            <NavLink to={`${url}/manageallorders`}style={{textDecoration:'none',color:'black'}}> <Button color="inherit">Manage All Orders</Button></NavLink>
            <NavLink to={`${url}/manageproducts`}style={{textDecoration:'none',color:'black'}}> <Button color="inherit">Manage Products</Button></NavLink>
            </Box>}
        <Button onClick={logOut} color="inherit">Logout</Button>
        
        
    </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return(
    <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }}
        >
        <Toolbar style={{backgroundColor:'#546e7a'}}>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
            >
            <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
            Dashboard
            </Typography>
        </Toolbar>
        </AppBar>
        <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
        >
        
        <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
            keepMounted: true, 
            }}
            sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            {drawer}
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
        >
            {drawer}
        </Drawer>
        </Box>
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
            <DashboardHome></DashboardHome>
        </Route>
        <AdminRoute  path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addproduct`}>
            <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/manageallorders`}>
            <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
        </AdminRoute>
        <Route path={`${path}/pay`}>
            <Payment></Payment>
        </Route>
        <Route path={`${path}/review`}>
            <Review></Review>
        </Route>
        <Route path={`${path}/myorder`}>
            <MyOrder></MyOrder>
        </Route>
        
        </Switch>
        
        </Box>
    </Box>
    );
}

Dashboard.propTypes = {
    /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
    window: PropTypes.func,
};

export default Dashboard;

