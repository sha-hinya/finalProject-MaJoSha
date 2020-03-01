import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function SimpleCard(props) {
  const classes = useStyles();
  console.log("Test files card", props);

  return (
    <Card className={classes.root}>
      <CardContent>
        <h2>Word of the Day</h2>
        <h2>{this.title}</h2>
        <p>{this.property}</p>
      </CardContent>
    </Card>
  );
}
