import React from 'react';
import { Navbar } from '../Navbar';
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

export const Resume = () => {
    const classes = useStyles()
    
    return (
        <div>
            <main className={classes.main}>
                <div className={classes.main_scrim}>
            <Navbar />
            <h1>Resume goes here</h1>
            </div>
            </main>
        </div>
    )
}