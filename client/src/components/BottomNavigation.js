import React from "react";
import { Link } from "react-router-dom";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from "@material-ui/icons/Mail";
import CalenderIcon from "@material-ui/icons/EventNote";
import FileIcon from "@material-ui/icons/FileCopy";
export default function SimpleBottomNavigation() {
 
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      className="bottom-nav"
      id="bottom-nav"
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
   
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        label="Messages"
        to="/posts"
        icon={<MailIcon />}
      />

      <BottomNavigationAction
        component={Link}
        label="Calender"
        to="/calender"
        icon={<CalenderIcon />}
      />

      <BottomNavigationAction
        component={Link}
        label="Documents"
        to="/files"
        icon={<FileIcon />}
      />
    </BottomNavigation>
  );
}
