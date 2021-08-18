import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import Layout from '../../Components/Layout/Layout'
import { useSelector } from 'react-redux'
import axios from '../../helpers/axios'
import { Alert } from 'react-bootstrap'






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
    width: '100%',
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const Register = () => {
  const user = useSelector(state => state.user);
  const [show, setShow] = useState(false);
  const [fnmessage, setFnmessage] = useState("");
  const [lnmessage, setLnmessage] = useState("");
  const [cmessage, setCmessage] = useState("");
  const [pmessage, setPmessage] = useState("");
  const [emessage, setEmessage] = useState("");

  const [message, setMessage] = useState("");

  const classes = useStyles()
  const [info, setInfo] = useState({
    fname: '',
    lname: '',
    contact: '',
    email: '',
    password: ''
  })



  const signUp = async (event) => {
    event.preventDefault()
    const signupInfo = {
      firstname: info.fname,
      lastname: info.lname,
      email: info.email,
      password: info.password,
      contact: info.contact,
      gender: "",
      institutionName: "",
      userImage: ""
    }
    if (info.fname === "") {
      setFnmessage("Firstname is required!");
      setLnmessage("")
      setCmessage("")
      setPmessage("")
      setEmessage("")
    }
    else if (info.lname === "") {
      setFnmessage("");
      setLnmessage("Lastname is required!")
      setCmessage("")
      setPmessage("")
      setEmessage("")
    }
    else if (info.contact === "") {
      setFnmessage("");
      setLnmessage("")
      setCmessage("Contact is required!")
      setPmessage("")
      setEmessage("")
    }
    else if (info.email === "") {
      setFnmessage("");
      setLnmessage("")
      setCmessage("")
      setPmessage("")
      setEmessage("Email is required!")
    }
    
    else if (info.password === "") {
      setFnmessage("");
      setLnmessage("")
      setCmessage("")
      setPmessage("Password is required!")
      setEmessage("")
    }
    else if ((info.password).length < 6) {
      setFnmessage("");
      setLnmessage("")
      setCmessage("")
      setPmessage("Password length should be greater than 6 character!")
      setEmessage("")
    }
    else {
      await axios.post('/user/signup', signupInfo)
        .then((res) => {
          console.log(res);
          setMessage("Registration successful ! Please go to login and do login.");
          setShow(true);
          setInfo({
            fname: '',
            lname: '',
            contact: '',
            email: '',
            password: ''
          })

        }).catch((error) => {
          setMessage("Invalid information!");
          setShow(true);
        })

    }



  }

  return (
    <Layout>
      <Container>
        {
          show ?
            <Alert variant="success" onClose={() => setShow(false)} dismissible style={{ width: '100%', marginTop: '100px' }}>
              <Alert.Heading style={{ textAlign: 'center' }}>{message}</Alert.Heading>
            </Alert>
            : null
        }
      </Container>

      <Container component='main' maxWidth='xs' style={{ minHeight: "100vh", marginTop: '100px' }}>

        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={signUp}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name='firstName'
                  variant='outlined'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                  value={info.fname}
                  onChange={event =>
                    setInfo({
                      ...info,
                      fname: event.target.value
                    })
                  }
                />
                <span className="text-danger">{fnmessage ? fnmessage : null}</span>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='lastName'
                  label='Last Name'
                  name='lastName'
                  value={info.lname}
                  onChange={event =>
                    setInfo({
                      ...info,
                      lname: event.target.value
                    })
                  }
                />
                 <span className="text-danger">{lnmessage ? lnmessage : null}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  id='contact'
                  label='Contact No'
                  name='contact'
                  value={info.contact}
                  onChange={event =>
                    setInfo({
                      ...info,
                      contact: event.target.value
                    })
                  }
                />
                <span className="text-danger">{cmessage ? cmessage : null}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  type="email"
                  required
                  fullWidth
                  id='email'
                  label='Email Address'
                  name='email'
                  value={info.email}
                  onChange={event =>
                    setInfo({
                      ...info,
                      email: event.target.value
                    })
                  }
                />
                <span className="text-danger">{emessage ? emessage : null}</span>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='password'
                  label='Password'
                  type='password'
                  id='password'
                  value={info.password}
                  onChange={event =>
                    setInfo({
                      ...info,
                      password: event.target.value
                    })
                  }
                />
                <span className="text-danger">{pmessage ? pmessage : null}</span>
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link to='/login' variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Layout>
  )
}
export default Register
