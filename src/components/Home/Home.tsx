import React from 'react';
import { makeStyles } from '@material-ui/core';
import turntable from '../../assets/turntable-on-desk.jpg';
import { Navbar } from '../../components'

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    title_text:{
        fontFamily: "'Kaushan Script', serif",
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
    main_text:{
        textAlign: 'center',
        position: 'relative',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: "'Lato', sans-serif",
        color: 'black'
    },
    main_scrim:{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        backgroundSize: 'cover',
        width: '100%',
        height: '100%',
    },
})

export const Home = ( props:Props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <main className={classes.main}>
                <div className={classes.main_scrim}>
                    <Navbar />
                    <div className={classes.main_text}>
                    <h1 className={classes.title_text}>{ props.title }</h1>
                    <p>Functional, Beautiful Web Applications</p>
                    </div>
                </div>
            </main>
        </div>
    )
}