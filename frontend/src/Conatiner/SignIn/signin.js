import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { Link, Redirect } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Layout from '../../Components/Layout/Layout'
import { Alert } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { userSignIn } from '../../Actions'
import axios from '../../helpers/axios'


const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}))

export default function SignIn() {

    const classes = useStyles();
    const user = useSelector(state => state.user);
    const [message, setMessage] = useState("");
    const [message1, setMessage1] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const signIn = async (event) => {
        event.preventDefault();
        if (email === "") {
            setMessage("Email is rquired!")
            setMessage1("")
        }
        else if (password === "") {
            setMessage("");
            setMessage1("password is rquired!")
        }
        else {
            const loginInfo = { email, password };
            await axios.post('/user/signin', loginInfo)
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(userSignIn(loginInfo));
                    }
                    else {
                        setShow(true);
                    }

                })
                .catch((error) => {
                    setShow(true);
                });

        }



        // console.log(bodyData);

        // try {
        //   const { data } = await signin({email,contact,password});
        //   console.log(data);
        // } catch (error) {
        //   console.log(error);
        // }
    }
    if (user.authenticate) {
        return <Redirect to={'/'} />
    }

    return (
        <Layout>
            <Container component='main' maxWidth='xs' style={{ minHeight: "500px", marginTop: '100px', height: '100vh' }}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component='h1' variant='h5'>
                        Sign in
                    </Typography>
                    {
                        show ?
                            <Alert variant="danger" onClose={() => setShow(false)} dismissible style={{ width: '100%', marginTop: '100px' }}>
                                <Alert.Heading style={{ textAlign: 'center' }}>{'Invalid info!'}</Alert.Heading>
                            </Alert>
                            : null
                    }
                    <form className={classes.form} noValidate onSubmit={signIn}>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            id='email'
                            label='Email Address'
                            name='email'
                            autoComplete='email'
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="text-danger">{message ? message : null}</span>
                        <TextField
                            variant='outlined'
                            margin='normal'
                            required
                            fullWidth
                            name='password'
                            label='Password'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            value={password}
                            onChange={(e) => setPass(e.target.value)}
                        />
                        <span className="text-danger">{message1 ? message1 : null}</span>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to='#' variant='body2'>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" variant='body2'>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                {/* <Box mt={8}>
        <Copyright />
      </Box> */}
            </Container>
        </Layout>
    )
}