import React from 'react';
import { Navbar } from '../../components';
import { makeStyles,
        ListItem,
        Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl'
import turntable from '../../assets/turntable-on-desk.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CreateIcon from '@material-ui/icons/Create';

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
    contactContainer:{
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "''"
    },
    contactList:{
        display: 'flex',
        listStyle: 'none'
    },
    listItem:{
        margin: '0 2vw',
    },
    contactLink:{
        textDecoration: 'none'
    },
    button:{
        textTransform: 'none',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        width: 'fit-content',
        fontFamily: "'Lato', sans-serif"
    },
    contactText:{
        textAlign: 'center',
        margin: '1vw',
        fontFamily: "'Marcellus', serif"
    },
    contactHead:{
        textAlign: 'center',
        margin: '1vw',
        fontFamily: "'Poiret One', cursive"
    }
})

export const Connect =()=>{
    const classes = useStyles()
    
    return(
        <div>
            <main className={classes.main}>
                <div className={classes.main_scrim}>
                <Navbar />
                    <div className={classes.mainContainer}>
                        <div className={classes.contactHead}>
                            <h1>Let's connect</h1>
                        </div>
                        <div className={classes.contactText}>
                            <p>I'd love to talk about my work, my process, and how I can help create custom solutions to meet your needs.</p>
                        </div>                
                        <div className={classes.contactContainer}>
                            <ul className={classes.contactList}>
                                <li className={classes.listItem}>
                                    <a href="mailto:mikehkaiser@gmail.com" className={classes.contactLink} target="_top">
                                    <Button variant="contained" className={classes.button} startIcon={<CreateIcon />}>Send me an email</Button>
                                    </a>
                                </li>
                                
                                <li className={classes.listItem}>
                                    <a className={classes.contactLink} href="https://www.linkedin.com/in/mike-kaiser-603aa129/">
                                    <Button variant="contained" className={classes.button} startIcon={<LinkedInIcon />}>Connect on LinkedIn</Button>
                                    </a>
                                </li>
                                
                                <li className={classes.listItem}>
                                    <a href="https://github.com/mikehkaiser" className={classes.contactLink}>
                                    <Button variant="contained" className={classes.button} startIcon={<GitHubIcon />}>View on Github</Button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}