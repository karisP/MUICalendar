import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  CardActionArea,
  CardContent
} from "@material-ui/core";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, format, parse, isSameDay, isSameMonth, addDays } from "date-fns";

//See https://github.com/joswong13/material-ui-calendar/blob/master/src/DisplayDailyCalendar.js

const DisplayDailyCalendar = props => {
  const today = new Date();
  const selectedDate = today; //props
  const monthStart = startOfMonth(selectedDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const eachWeek = [];
  let daysOfWeek = [];
  let day = startDate;
  let end = endDate;
  let formattedDate;
  const dateFormat = "d";

  let weekNumber = 1;
  while (day <= end) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;
      daysOfWeek.push(
        <TableCell key={formattedDate} style={{ borderRight: '2px solid #F1F2F5' }}>
          {!eachWeek[0] ?
            <Typography style={{ fontSize: "20px", textAlign: "center", color: '#A1A2AB', marginTop: '20px' }}>
              {weekDays[day.getDay()]}
            </Typography>
            : null}
          <CardActionArea
            onClick={() => props.onDateClick(parse(cloneDay))}
            style={{ height: "100%" }}
          >
            <div
              style={
                isSameDay(day, selectedDate)
                  ? {
                    //backgroundColor: "rgba(128,128,128,0.5)",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }
                  : {
                    //backgroundColor: "rgba(0,0,0,0)",
                    height: "100%",
                  }
              }
            >
              <CardContent
                style={
                  isSameDay(day, selectedDate)
                    ? {
                      padding: '8px',
                    }
                    : {
                      padding: '16px',
                    }
                  }
              >
                {isSameDay(day, today) ? (
                  <Typography
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 36,
                      height: 36,
                      backgroundColor: '#525DE5',
                      color: "#fff",
                      borderRadius: "30%", }}
                  >
                    {formattedDate}
                  </Typography>
                ) : (
                  <Typography
                    style={
                      isSameMonth(day, monthStart)
                        ?
                        {
                          color: "black",
                          textAlign: "center",
                        }
                        : {
                          color: "rgba(128,128,128,1)",
                          textAlign: "center",
                        }
                    }
                  >
                    {formattedDate}
                  </Typography>
                )}
              </CardContent>
            </div>
          </CardActionArea>
        </TableCell>
      );

      day = addDays(day, 1);
    }

    eachWeek.push(<TableRow key={weekNumber}>{daysOfWeek}</TableRow>);
    daysOfWeek = [];
    weekNumber += 1;
  }
  return (
    <Table style={{ height: "100%" }}>
      {/* <TableHead>
        <TableRow>
          {weekdays.map(day => (
            <TableCell key={day.id}>
              <Typography>{day.day}</Typography>
            </TableCell>
          ))}
        </TableRow>
      </TableHead> */}
      <TableBody>{eachWeek}</TableBody>
    </Table>
  );
};

export default DisplayDailyCalendar;