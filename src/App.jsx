import React from 'react';
import useStyles from './styles';
import { Accordion, AccordionSummary, AccordionDetails, Button, CssBaseline, Container, Grid, Toolbar, Typography } from '@material-ui/core';
import { Add, ChevronLeft, ChevronRight, KeyboardArrowDown } from '@material-ui/icons';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import MiniCalendar from './MiniCalendar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item xs={3} className={classes.box1}>
                    <Grid container direction="column" justifyContent="space-between" className={classes.sidebarContainer}>
                        <Grid item>
                            <div className={classes.container}>
                                <img className={classes.image} src="https://images.unsplash.com/photo-1630327064614-4e74d61f2a24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1525&q=80" alt="user profile" />
                                <Typography variant="h6" style={{flex: 1}}>Susanna Mills</Typography>
                                <KeyboardArrowDown style={{ fill: '#525DE5' }} />
                            </div>
                            <Button
                                variant="outlined"
                                startIcon={<Add className={classes.addIcon}/>}
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
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>My calendars</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={9} className={classes.box2}>
                    <Toolbar className={classes.toolbar}>
                        <div className={classes.container}>
                            <Typography variant="h6">July 2020</Typography>
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
                    <main>
                        <Grid container>
                            <Grid item ></Grid>
                        </Grid>
                    </main>
                </Grid>
            </Grid>
        </>
    );
}

export default App;