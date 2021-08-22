import React from "react";
import { makeStyles } from "@material-ui/core";
import turntable from '../../assets/turntable-on-desk.jpg'

const useStyles = makeStyles({
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
});

export const Background=()=>{
    const classes = useStyles();

    return(
        <main className={classes.main}>
                <div className={classes.main_scrim}>
                
                </div>
        </main>
    )
}