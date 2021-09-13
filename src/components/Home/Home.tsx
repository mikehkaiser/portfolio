import React from 'react';
import '../../styles.css';
import { makeStyles, Button } from '@material-ui/core';
import turntable from '../../assets/turntable-on-desk.jpg';
import { Navbar } from '../../components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn'

interface Props{
    title: string;
}

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    title_text:{
        fontFamily: "'Poiret One', cursive",
    },
    main: {
        // background: `url(${turntable})`,
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'absolute',
    },
    main_text:{
        textAlign: 'center',
        backgroundColor: 'rgb(237, 237, 237)',
        borderRadius: '5px',
        position: 'relative',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        fontFamily: "'Marcellus', serif",
        width: 'fit-content',
        padding: '3vw'
    },
    // main_scrim:{
    //     backgroundColor: 'rgba(255, 255, 255, 0.5)',
    //     backgroundSize: 'cover',
    //     width: '100%',
    //     height: '100%',
    // },
    contactLink:{
        textDecoration: 'none'
    },
    button:{
        textTransform: 'none',
        color: 'white',
        backgroundColor: 'rgba(38, 38, 38, 0.9)',
        width: 'fit-content',
        fontFamily: "'Lato', sans-serif",
        margin: '2vw 1vw 0 1vw',
    },
})

export const Home = ( props:Props) => {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <main className={classes.main}>
                {/* <div className={classes.main_scrim}> */}
                    <Navbar />
                    <div className={classes.main_text}>
                    <h1 className={classes.title_text}>{ props.title }</h1>
                    <h3>Functional, Beautiful Web Applications</h3>
                    <a className={classes.contactLink} href="https://www.linkedin.com/in/mike-kaiser-603aa129/">
                        <Button variant="contained" className={classes.button} startIcon={<LinkedInIcon />}>LinkedIn</Button>
                    </a>
                    <a href="https://github.com/mikehkaiser" className={classes.contactLink}>
                        <Button variant="contained" className={classes.button} startIcon={<GitHubIcon />}>Github</Button>
                    </a>
                    </div>
                    
                {/* </div> */}
            </main>
        </div>
    )
}
