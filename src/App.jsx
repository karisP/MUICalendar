import React from 'react';
import useStyles from './styles';
import { Button, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';
import { Add, ChevronLeft, ChevronRight, KeyboardArrowDown } from '@material-ui/icons';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MiniCalendar from './MiniCalendar';
import CheckboxesGroup from './CheckboxesGroup';
//import BigCalendar from './BigCalendar';
import DisplayDailyCalendar from './DisplayDailyCalendar';

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Grid container className={classes.gridContainer}>
                <Grid item className={classes.box1}>
                    <Grid container direction="column" className={classes.sidebarContainer}>
                        <Grid item>
                            <div className={classes.container}>
                                <img className={classes.image} src="https://images.unsplash.com/photo-1630327064614-4e74d61f2a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80" alt="user profile" />
                                <Typography variant="h6" style={{ flex: 1 }}>Susanna Mills</Typography>
                                <KeyboardArrowDown style={{ fill: '#525DE5' }} />
                            </div>
                            <Button
                                variant="outlined"
                                startIcon={<Add className={classes.addIcon} />}
                                classes={{
                                    root: classes.createButtonRoot,
                                    outlined: classes.createButtonOutlined,
                                }}
                            >Create Event
                            </Button>
                        </Grid>
                        <Grid item>
                            <MiniCalendar />
                        </Grid>
                        <Grid item>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon style={{ fill: '#525DE5' }} />
                                </div>
                                <InputBase
                                    placeholder="Meet With..."
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </Grid>
                        <Grid item>
                            <CheckboxesGroup />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.box2}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.container}>
                            <Typography variant="h6">September 2021</Typography>
                            <div className={classes.chevron}>
                                <ChevronLeft style={{ fill: '#525DE5' }} />
                                <ChevronRight style={{ fill: '#525DE5' }} />
                            </div>
                            <Button
                                variant="outlined"
                                classes={{
                                    root: classes.buttonRoot,
                                    outlined: classes.buttonOutlined,
                                }}>Today</Button>
                        </div>
                        <div className={classes.container}>
                            <SettingsIcon style={{ fill: '#A1A2AB', marginRight: '8px' }} />
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon style={{ fill: '#525DE5' }} />
                                </div>
                                <InputBase
                                    placeholder="Find Events & Contacts"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </div>
                        </div>
                    </Toolbar>
                    <Grid container className={classes.bigCalendarCont}>
                        <Grid item xs={12}>
                            <DisplayDailyCalendar />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default App;