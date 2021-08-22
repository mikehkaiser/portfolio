import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import turntable from '../../assets/turntable-on-desk.jpg';
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0',
    },
    navbar_container:{
        display: 'flex',
        backgroundColor: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        //boxShadow: '0 2px 5px rgb(0 0 0 / 100%)',
        fontFamily: "'Lato', sans-serif",
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'white',
    },
    logo_navigation:{
        listStyle: 'none',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamiliy: "'Lato', sans-serif"
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        margin: '0 2em',
        color: 'black',
        textDecoration: 'none'
    },
    selected:{
        fontWeight: 'bold',
        marginTop: '0.5vw',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderRadius: '3px',
        boxShadow: '0 1px 3px rgb(0 0 0 / 70%)'
    }
});

export const Navbar = () =>{
    const classes = useStyles();
    
    return(
        <div>
            <nav>
                <div className={classes.navbar_container}>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <NavLink exact to="/" className={classes.nav_a} activeClassName={classes.selected}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/projects" className={classes.nav_a} activeClassName={classes.selected}>Projects</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/resume" className={classes.nav_a} activeClassName={classes.selected}>Résumé</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/connect" className={classes.nav_a} activeClassName={classes.selected}>Connect</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
};