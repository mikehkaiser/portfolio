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
    contactHead:{
        textAlign: 'center',
        margin: '1vw',
        fontFamily: "'Poiret One', cursive"
    },
    mainContainer:{
        display: 'block',
        position: 'relative',
        margin: 'auto',
        width: 'fit-content',
        top: '20%',
        padding: '3vw',
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: '5px'

    },
    
})

export const Resume = () => {
    const classes = useStyles()
    
    return (
        <div>
            <main className={classes.main}>
                <div className={classes.main_scrim}>
            <Navbar />

            <div className={classes.mainContainer}>
                        <div className={classes.contactHead}>
                            <h1>My résumé</h1>
                        </div>
                    </div>
            </div>
            </main>
        </div>
    )
}