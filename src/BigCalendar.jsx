import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    week: {
        borderBottom: '2px solid #F1F2F5',
        height: '20%',
    },
    day: {
        flex: 1,
        borderRight: '2px solid #F1F2F5',
        padding: 20,
        textAlign: 'center',
    },
    daysOfWeek: {
        color: '#A1A2AB',
        paddingBottom: 20,
    },
    date: {
        fontWeight: 700,
        fontSize: 20,
    }
}));

const BigCalendar = () => {
    const classes = useStyles();

    const weekArray = [0, 1, 2, 3, 4];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <>
            {
                weekArray.map((weekIndex) => (
                    <Grid container xs={12} className={classes.week} key={weekIndex}>
                        {
                            daysOfWeek.map((day, index) => (
                                <Grid item className={classes.day} key={index}>
                                    {weekIndex === 0 ? <Typography className={classes.daysOfWeek}>{day}</Typography> : null}
                                    <Typography className={classes.date}>{index}</Typography>
                                </Grid>
                            ))
                        }
                    </Grid>
                ))
            }
        </>
    );
}

export default BigCalendar;