import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createTheme({
    palette: {
        primary: {
            main: '#525DE5',
        },
        seconday: {
            main: '#FFE2F9',
        },
        success: {
            main: '#D7F9F5'
        }
    },
    overrides: {
        MuiPickersBasePicker: {
            pickerViewLandscape: {
                padding: 0,
            }
        },
        MuiPickersStaticWrapper: {
            staticWrapperRoot: {
                backgroundColor: 'none',
                minWidth: 'none',
            }
        },
        MuiPickersToolbar: {
            toolbar: {
                display: 'none',
            },
        },
        MuiPickersCalendarHeader: {
            transitionContainer: {
                order: -1,
            },
            iconButton: {
                backgroundColor: 'none',
            },
            daysHeader: {
                justifyContent: 'space-between'
            }
        },
        MuiPickersCalendar: {
            week: {
                justifyContent: 'space-between',
            }
        },
        MuiTypography: {
            alignCenter: {
                textAlign: 'left',
            },
            body1: {
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '1.6rem',
            },
            body2: {
                fontWeight: '700',
            },
            caption: {
                fontWeight: '500',
            }
        },
        MuiIconButton: {
            root: {
                borderRadius: '30%',
            },
        },
        MuiPickersDay: {
            day: {
                color: '#57515E',
            },
            daySelected: {
                backgroundColor: '#525DE5',
            },
        },
    },
});

function MiniCalendar() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <ThemeProvider theme={materialTheme}>
            <DatePicker
                autoOk
                leftArrowButtonProps={{
                    color: "primary",
                }}
                rightArrowButtonProps={{
                    color: "primary",
                }}
                orientation="landscape"
                variant="static"
                openTo="date"
                value={selectedDate}
                onChange={handleDateChange}
            />
        </ThemeProvider>
    );
}

export default MiniCalendar;