import React,{Component,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {signIn} from '../store/actions/authAction' 
import {connect} from 'react-redux'
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

  

 function Login(props) {
  const classes = useStyles();
  const [email,setEmail] = useState('')
  const [password,setPassword]=useState('')
  const [open, setOpen] = useState(false);


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email,password)
    props.signIn(email,password)
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  console.log(props.auth,'auth')
  if(props.auth.auth.isSuccess) return <Redirect to="/" />
  return (
    <Container component="main" maxWidth="xs">
      {props.auth.auth.isSuccess==true?(
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
          message='New User Created ,Please Login'
        />
      </Snackbar>
        ):props.auth.auth.isSuccess==false?(
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
            message='Failed Login'
          />
        </Snackbar>
          ):null} 

      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            autoComplete="email"
            autoFocus
            onChange={event=>setEmail(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={password}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={event=>setPassword(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
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
    signIn:(email,password)=>dispatch(signIn(email,password))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
