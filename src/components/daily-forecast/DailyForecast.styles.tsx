import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    list: {
      padding: 0,
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    weekday: {
      flexBasis: '40%',
    },
    weather: {
      flexBasis: '30%',
      display: 'flex',
      alignItems: 'center',
    },
    weatherIcon: {
      height: 48,
      width: 48,
      marginLeft: -12,
      marginRight: 2,
    },
    weatherDescription: {
      flexBasis: '30%',
      textAlign: 'right',
    },
  })
);
