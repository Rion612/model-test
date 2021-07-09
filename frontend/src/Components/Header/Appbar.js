import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useStyles } from '../Styles/styles';
import Avatar from '@material-ui/core/Avatar'

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, DropdownButton, Row, Col } from 'react-bootstrap';
import { logout } from '../../Actions';

const Appbar = (props) => {
    const classes = useStyles();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    <Link to='/' ><Button color="inherit" className="text-white" style={{ textDecoration: 'none' }}>Online Model Test</Button></Link>
                    </Typography>
                    {
                        user.authenticate ?
                            <Row>
                                <Col>
                                    <Avatar alt="Remy Sharp" src={user.user.userImage} />

                                </Col>
                                <Col><DropdownButton variant="light" title={(user.user.fullname).toUpperCase()}>
                                    <Dropdown.Item><Link to='/myProfile'>My profile</Link></Dropdown.Item>
                                    <Dropdown.Item><Link to='/enrolled/courses'>Enrolled courses</Link></Dropdown.Item>       
                                    <Dropdown.Item><Link to={`/all/model-tests/result/${user.user._id}`}>Result</Link></Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={()=>{dispatch(logout())}}><Link>Logout</Link></Dropdown.Item>
                                </DropdownButton></Col>
                            </Row>


                            : <div>
                                <Button color="inherit" ><Link to='/login' className="text-white" style={{ textDecoration: 'none' }} >Login</Link></Button>
                                <Button color="inherit"><Link to='/signup' className="text-white" style={{ textDecoration: 'none' }} >Register</Link></Button>
                            </div>

                    }



                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Appbar;