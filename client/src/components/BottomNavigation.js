import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import CalenderIcon from "@material-ui/icons/EventNote";
import FileIcon from "@material-ui/icons/FileCopy";

const useStyles = makeStyles({
  root: {
    width: 500
  },
  stickToBottom: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    zIndex: 100
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      className={classes.stickToBottom}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      //   className={classes.root}
    >
      <Link to="/">
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      </Link>
      <BottomNavigationAction label="Posts" icon={<MailIcon />} />
      <BottomNavigationAction label="Calender" icon={<CalenderIcon />} />
      <Link to="/files">
        <BottomNavigationAction icon={<FileIcon />} />
      </Link>
    </BottomNavigation>
  );
}
