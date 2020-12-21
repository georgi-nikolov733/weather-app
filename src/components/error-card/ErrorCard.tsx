import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './ErrorCard.styles';

interface ErrorCardProps {
  message: string;
}

export const ErrorCard: React.FC<ErrorCardProps> = ({
  message,
}: ErrorCardProps) => {
  const classes = useStyles();

  return (
    <Card variant="outlined">
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Error
        </Typography>
        <Typography variant="body1">{message}</Typography>
      </CardContent>
    </Card>
  );
};
