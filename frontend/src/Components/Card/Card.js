import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    content:{
        height:250,
    },
    media: {
        height: 140,
    },
    typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 18,
        textAlign : 'center',
        marginTop :'5px',
        fontWeight:'bold'
        
    }
});

const CardComponent = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea className={classes.content}>
                <CardMedia
                    className={classes.media}
                    image={props.image}
                    title={props.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h2" component="h2" className={classes.typography}>
                        {(props.name).toUpperCase()}
            </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.typography}>
                        {props.text}
            </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default CardComponent;