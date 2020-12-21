import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(() =>
  createStyles({
    cardContent: {
      padding: 16,
      '&:last-child': {
        paddingBottom: 16,
      },
    },
    title: {
      fontWeight: 700,
    },
  })
);
