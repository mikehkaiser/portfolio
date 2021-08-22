import React from 'react';
import { Navbar } from '../../components';
import { makeStyles } from '@material-ui/core';
import turntable from '../../assets/turntable-on-desk.jpg'

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    main: {
        background: `url(${turntable})`,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_scrim:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    },
})

export const Connect =()=>{
    const classes = useStyles()
    
    return(
        <div>
            <main className={classes.main}>
                <div className={classes.main_scrim}>
            <Navbar />
            <h1>Contact form goes here</h1>
            <div>
                <ul>
                    <li>Phone # w/ icon</li>
                    <li>Email address w/ icon</li>
                </ul>
            </div>
            <h2>Snackbar to confirm message sent</h2>
            </div>
            </main>
        </div>
    )
}