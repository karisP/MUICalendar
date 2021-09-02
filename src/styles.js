import { alpha, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    gridContainer: {
      backgroundColor: "#fff",
    },
    container: {
        display: "flex",
        alignItems: "center",
    },
    toolbar: {
        justifyContent: "space-between",
        borderBottom: '2px solid #F1F2F5',
    },
    box1: {
        padding: '20px',
        height: '100vh',
        borderRight: '2px solid #F1F2F5',
    },
    box2: {
        height: '100vh',
    },
    sidebarContainer: {
        height: '100%',
        '& >div': {
          marginBottom: '30px',
        }
    },
    chevron: {
        display: 'inherit',
        padding: '0 35px 0 20px',
    },
    buttonRoot: {
        textTransform: 'none',
    },
    buttonOutlined: {
        padding: '5px 35px'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha('#F1F2F5', 0.50),
        '&:hover': {
          backgroundColor: '#F1F2F5',
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '20ch',
        },
      },
      image: {
          width: '35px',
          height: '35px',
          borderRadius: '50%',
          marginRight: '10px',
      },
      createButtonRoot: {
        color: '#525DE5',
        textTransform: 'none',
        width: '100%',
        '&:hover': {
            backgroundColor: "#525DE5",
            color: "#fff",
            addIcon: {
                fill: "#fff",
            }
        },
      },
      createButtonOutlined: {
        border: '2px solid #525DE5',
        marginTop: '20px',
        height: '50px',
      },
}));

export default useStyles;