import React from 'react';
import { Navbar } from '../../components';
import { 
    makeStyles,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button } from '@material-ui/core';
import turntable from '../../assets/turntable-on-desk.jpg';
import weather from '../../assets/weather-check.png';
import reactBikes from '../../assets/react-bikes.png';
import flaskBikes from '../../assets/flask-bikes.png';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    card_root:{
        maxWidth: 300,
        margin: 'auto',
        marginTop: '1vw',
    },
    media: {
        height: 200
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
    card_holder:{
        display: 'flex',
    },
    card_a:{
        textDecoration: 'none'
    },
    typographyTitle:{
        fontFamily: "'Marcellus', serif"
    },
    button:{
        textTransform: 'none',
        border: '1px solid black',
        borderRadius: '3px',
        color: 'black',
        padding: '8px',
        fontFamily: "'Lato', sans-serif"
    }
})

export const Projects = () => {
    const classes = useStyles()
    
    return (
        <div>
            <main className={classes.main}>
                <div className={classes.main_scrim}>
                    <Navbar />
                    <div className={classes.card_holder}>
                        <Card className={classes.card_root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={reactBikes}
                                title="React Bike Shop"
                                />
                                <CardContent>
                                <Typography className={classes.typographyTitle} gutterBottom variant="h5" component="h2">
                                    React project
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Using React to make calls to a PostgreSQL database built with Flask.</p>
                                    <p>...</p>
                                    <p>React || TypeScript || Firebase</p>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a className={classes.card_a} href="https://your-bike-shop.web.app/">
                                    <Button className={classes.button} size="small" color="primary">
                                    View App
                                    </Button>
                                    </a>
                                    <a className={classes.card_a} href="https://github.com/mikehkaiser/react-week-project.git">
                                    <Button className={classes.button} startIcon={<GitHubIcon />} size="small" color="primary">
                                    View on Github
                                    </Button>
                                </a>
                            </CardActions>
                        </Card>
                        <Card className={classes.card_root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={weather}
                                title="Weather Check Application"
                                />
                                <CardContent>
                                <Typography className={classes.typographyTitle} gutterBottom variant="h5" component="h2">
                                    Weather Check
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Clean weather app accessing the OpenWeather API.</p>
                                    <p>...</p>
                                    <p>JavaScript || BootStrap || Firebase || OpenWeather API</p>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                    <a className={classes.card_a} href="">
                                    <Button className={classes.button} size="small" color="primary">
                                    View App
                                    </Button>
                                    </a>
                                    <a className={classes.card_a} href="https://github.com/mikehkaiser/js-weather-app">
                                    <Button className={classes.button} startIcon={<GitHubIcon />} size="small" color="primary">
                                    View on Github
                                    </Button>
                                    </a>
                            </CardActions>
                        </Card>
                        <Card className={classes.card_root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={flaskBikes}
                                title="Bikes API with Flask"
                                />
                                <CardContent>
                                <Typography className={classes.typographyTitle} gutterBottom variant="h5" component="h2">
                                    Bikes API with Flask
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <p>Created a PostgreSQL database and simple API with Flask. Hosted on Heroku.</p>
                                    <p>...</p>
                                    <p>Flask || PostgreSQL || Insomnia || Heroku</p>
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <a className={classes.card_a} href="https://bikes-inventory.herokuapp.com/">
                                    <Button className={classes.button} size="small" color="primary">
                                    View App
                                    </Button>
                                    </a>
                                    <a className={classes.card_a} href="https://github.com/mikehkaiser/wk5-d1-flask-setup">
                                    <Button className={classes.button} startIcon={<GitHubIcon />} size="small" color="primary">
                                    View on Github
                                    </Button>
                                </a>
                            </CardActions>
                        </Card>
                    </div>
                    <div className={classes.card_holder}>
                        
                        
                    </div>
                </div>
            </main>
        </div>
    )
}