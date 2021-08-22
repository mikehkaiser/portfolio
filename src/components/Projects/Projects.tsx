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
import turntable from '../../assets/turntable-on-desk.jpg'

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    card_root:{
        maxWidth: 345,
    },
    media: {
    height: 140,
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

export const Projects = () => {
    const classes = useStyles()
    
    return (
        <div>
            <main className={classes.main}>
                <div className={classes.main_scrim}>
                <Navbar />
                <Card className={classes.card_root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                    </Card>
                
                </div>
            </main>
        </div>
    )
}