import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import CalenderIcon from '@material-ui/icons/EventNote';
import FileIcon from '@material-ui/icons/FileCopy';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
  stickToBottom: {},
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      className='bottom-nav'
      id='bottom-nav'
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      //   className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to='/'
        label='Home'
        icon={<HomeIcon />}
      />
      <BottomNavigationAction label='Posts' icon={<MailIcon />} />
      <BottomNavigationAction label='Calender' icon={<CalenderIcon />} />
      <BottomNavigationAction
        component={Link}
        label='Documents'
        to='files'
        icon={<FileIcon />}
      />
    </BottomNavigation>
  );
}
