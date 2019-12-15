import React from 'react'
import {NavLink} from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';




const SignedOutLinks =(props)=>{
    return(
        <Box className="container">
            <Button color="inherit" href="/login">Login</Button>
        </Box>
    )
}

export default SignedOutLinks