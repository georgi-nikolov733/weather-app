import { createStyles, fade, makeStyles, Theme } from '@material-ui/core';
import { COLOR_DARK_GREY } from '../../constants/colors.constants';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: COLOR_DARK_GREY,
    },
    appBarContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
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
    inputField: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '14ch',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
      },
    },
    selectRoot: {
      fontWeight: 500,
      color: theme.palette.common.white,
      '&:focus': {
        backgroundColor: 'inherit',
      },
    },
    selectIcon: {
      color: theme.palette.common.white,
    },
  })
);
