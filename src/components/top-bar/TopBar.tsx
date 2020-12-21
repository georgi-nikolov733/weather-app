import { Container, MenuItem, Select } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { DEFAULT_CITY } from '../../constants/defaults.constants';
import { Units } from '../../constants/units.constants';
import { cityState, unitsState } from '../../recoil/atoms';
import { useStyles } from './TopBar.styles';

export const TopBar: React.FC = () => {
  const classes = useStyles();
  const [inputText, setInputText] = useState('');
  const [, setCity] = useRecoilState(cityState);
  const [units, setUnits] = useRecoilState(unitsState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCity(inputText || DEFAULT_CITY);
  };

  const handleSelectChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    setUnits(event.target.value as Units);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Container className={classes.appBarContainer} maxWidth="sm">
            <form onSubmit={handleFormSubmit} spellCheck="false">
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="Search for a city…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputField,
                  }}
                />
              </div>
            </form>
            <Select
              value={units}
              onChange={handleSelectChange}
              disableUnderline
              classes={{
                root: classes.selectRoot,
                icon: classes.selectIcon,
              }}
            >
              <MenuItem value={Units.Metric}>Metric: °C</MenuItem>
              <MenuItem value={Units.Imperial}>Imperial: °F</MenuItem>
            </Select>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};
