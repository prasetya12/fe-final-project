import React from 'react'
import {NavLink} from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';




const SignedOutLinks =(props)=>{
    return(
        <Box className="container" display="flex">
             <Box p={1} order={3} style={{color:'red'}}>
             <Button variant="contained" href="/login" color="primary">Login</Button>
            </Box>
        </Box>
    )
}

export default SignedOutLinks