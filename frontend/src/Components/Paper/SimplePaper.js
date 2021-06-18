import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(5),
      width: theme.spacing(120),
    },
  },
}));

export default function SimplePaper(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5} style={{minHeight:"500px"}}>
          {props.children}
      </Paper>
    </div>
  );
}