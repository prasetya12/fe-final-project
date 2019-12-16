import React,{useState,useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux'
import {signUp} from '../store/actions/authAction' 
import {Redirect} from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import MySnackbarContentWrapper from '../components/MySnackbarContentWrapper'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Signup(props) {
  const classes = useStyles();
  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName]= useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [open, setOpen] = useState(false);
  const [variant,setVariant] = useState('success');
  const [message,setMessage] = useState('New User Created');

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(firstName,'firstname')
    console.log(lastName,'lastname')
    console.log(email,'email')
    props.signUp(firstName,lastName,email,password)

  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // useEffect(()=>{
  //   console.log(props.auth,"auth")

  //   if(props.auth.auth.signupsuccess==true){
  //     setVariant('success')
  //     setMessage('New User Created')
  //     setOpen(true)
  //   }else if(props.auth.auth.signupsuccess==false){
  //     setVariant('error')
  //     setMessage('New User failed to creted try again')
  //     setOpen(open)
  //   }
  // })
  if(props.auth.auth.signupsuccess==true) return <Redirect to="/login" />
  return (
    <Container component="main" maxWidth="xs" onSubmit={handleSubmit}>
      {props.auth.auth.signupsuccess==true?(
        <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open='true'
        autoHideDuration={120}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant='success'
          message='New User Created'
        />
      </Snackbar>
        ):props.auth.auth.signupsuccess==false?(
        <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open='true'
        autoHideDuration={120}
        onClose={handleClose}
      >
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant='error'
          message='New User failed to creted try again'
        />
      </Snackbar>
        ):null}  

       
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
        <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="firstname"
            label="First Name"
            name="firstname"
            autoFocus
            value={firstName}
            onChange={event=>setFirstName(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="lastname"
            label="Last Name"
            name="lastname"
            value={lastName}
            onChange={event=>setLastName(event.target.value)}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={event=>setEmail(event.target.value)}
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={event=>setPassword(event.target.value)}
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container>
            
            <Grid item>
              <Link href="/login" variant="body2">
                {"Do you have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>

    </Container>
  );
}

const mapStateToProps = (state)=>{
  console.log(state)
  return{
    auth:state
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    signUp:(firstName,lastName,email,password)=>dispatch(signUp(firstName,lastName,email,password))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Signup)