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
    },
    today: {
        width: 36,
        height: 36,
        backgroundColor: '#525DE5',
        color: "#fff",
        borderRadius: "30%",
    }
}));

const BigCalendar = () => {
    const classes = useStyles();

    const today = new Date();
    const todayCalendarNum = today.getDate();
    const weekArray = [1, 2, 3, 4, 5, 6, 16];
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    return (
        <>
            {
                weekArray.map((week, weekIndex) => (
                    <Grid container xs={12} className={classes.week} key={weekIndex}>
                        {
                            daysOfWeek.map((day, index) => (
                                <Grid item className={classes.day} key={index}>
                                    {weekIndex === 0 ? <Typography className={classes.daysOfWeek}>{day}</Typography> : null}
                                    <Typography className={todayCalendarNum === weekArray[index] ? `${classes.date} ${classes.today}` : classes.date}>{weekArray[index]}</Typography>
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