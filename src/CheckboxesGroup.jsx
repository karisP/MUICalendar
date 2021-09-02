import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    padding: 0,
  },
  formControl: {
    margin: '24px 0',
  },
  accSummaryRoot: {
    padding: 0,
  }
}));

export default function CheckboxesGroup() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    birthdays: true,
    reminders: false,
    tasks: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { birthdays, reminders, tasks } = state;

  return (
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          classes={{
            root: classes.accSummaryRoot,
          }}
        >
          <Typography className={classes.heading}>My calendars</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={birthdays} onChange={handleChange} name="birthdays" />}
                  label="Birthdays"
                />
                <FormControlLabel
                  control={<Checkbox checked={reminders} onChange={handleChange} name="reminders" />}
                  label="Reminders"
                />
                <FormControlLabel
                  control={<Checkbox checked={tasks} onChange={handleChange} name="tasks" />}
                  label="Tasks"
                />
              </FormGroup>
            </FormControl>
          </div>
        </AccordionDetails>
      </Accordion>
  );
}
