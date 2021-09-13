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
import routeMapper from '../../assets/route-mapper.png'

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    card_root:{
        maxWidth: 300,
        // margin: 'auto',
        marginTop: '1vw',
        backgroundColor: 'rgb(237, 237, 237)',
        color: 'white'
    },
    media: {
        height: 200
    },
    main: {
        // background: `url(${turntable})`,
        backgroundColor: 'rgb(237, 237, 237)',

    },
    card_holder:{
        display: 'flex',
        justifyContent: 'space-around',
        marginLeft: '10vw',
        marginRight: '10vw',
        marginTop: '1vw',
        marginBottom: '1vw'
    },
    card_a:{
        textDecoration: 'none'
    },
    typographyTitle:{
        fontFamily: "'Marcellus', serif",
        color: "rgb(38, 38, 38)"
    },
    button:{
        textTransform: 'none',
        backgroundColor: "rgb(38, 38, 38)",
        border: '1px solid black',
        color: "rgb(237, 237, 237)",
        borderRadius: '3px',
        padding: '8px',
        fontFamily: "'Lato', sans-serif"
    }
})

export const Projects = () => {
    const classes = useStyles()
    
    return (
        <div>
            <main className={classes.main}>

                    <Navbar />
                    <div className={classes.card_holder}>
                    <Card className={classes.card_root}>
                        <CardMedia
                        className={classes.media}
                        image={routeMapper}
                        title="React Bike Shop"
                        />
                        <CardContent>
                        <Typography className={classes.typographyTitle} gutterBottom variant="h5" component="h2">
                            Route Mapper
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <p>Bring your Strava routes front and center, compare distances and paces, and see the status of your gear.</p>
                            <p>...</p>
                            <p>React || JavaScript/TypeScript || Firebase || Strava API || Leaflet</p>
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <a className={classes.card_a} href="https://route-mapper-ee0ff.web.app/" target="_blank">
                                <Button className={classes.button} size="small" color="primary">
                                View App
                                </Button>
                                </a>
                                <a className={classes.card_a} href="https://github.com/mikehkaiser/strava-app.git" target="_blank">
                                <Button className={classes.button} startIcon={<GitHubIcon />} size="small" color="primary">
                                View on Github
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                    
                    <Card className={classes.card_root}>
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
                        <CardActions>
                            <a className={classes.card_a} href="https://your-bike-shop.web.app/" target="_blank">
                                <Button className={classes.button} size="small" color="primary">
                                View App
                                </Button>
                                </a>
                                <a className={classes.card_a} href="https://github.com/mikehkaiser/react-week-project.git" target="_blank">
                                <Button className={classes.button} startIcon={<GitHubIcon />} size="small" color="primary">
                                View on Github
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                    </div>
                    <div className={classes.card_holder}>
                    <Card className={classes.card_root}>
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
                        <CardActions>
                                <a className={classes.card_a} href="https://weather-check-3fd18.web.app/" target="_blank">
                                <Button className={classes.button} size="small" color="primary">
                                View App
                                </Button>
                                </a>
                                <a className={classes.card_a} href="https://github.com/mikehkaiser/js-weather-app" target="_blank">
                                <Button className={classes.button} startIcon={<GitHubIcon />} size="small" color="primary">
                                View on Github
                                </Button>
                                </a>
                        </CardActions>
                    </Card>
                    <Card className={classes.card_root}>
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
                        <CardActions>
                            <a className={classes.card_a} href="https://bikes-inventory.herokuapp.com/" target="_blank">
                                <Button className={classes.button} size="small" color="primary">
                                View App
                                </Button>
                                </a>
                                <a className={classes.card_a} href="https://github.com/mikehkaiser/wk5-d1-flask-setup" target="_blank">
                                <Button className={classes.button} startIcon={<GitHubIcon />} size="small" color="primary">
                                View on Github
                                </Button>
                            </a>
                        </CardActions>
                    </Card>
                    </div>
            </main>
        </div>
)}