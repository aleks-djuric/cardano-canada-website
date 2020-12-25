import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { FileCopy } from "@material-ui/icons";
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';


class CopyBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  copyToClipboard() {
    navigator.clipboard.writeText("MAPLE");
    this.setState({open: true});
  };

  render() {
    const { classes, label, textToCopy, popUpText } = this.props;
    const transition = (props) => {
      return <Slide {...props} direction="up" />;
    }
    return (
      <Grid container alignItems="center">
        <Grid item style={{width: 75}}>
          <Typography variant="body1" color="textPrimary">
            {label}
          </Typography>
        </Grid>
        <Grid item style={{paddingLeft: 10, flexGrow: 1}}>
          <Paper variant="outlined" className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item style={{paddingLeft: 10, paddingRight: 10, flexGrow: 1}}>
                <Typography variant="h5" color="primary" align="center">
                  {textToCopy}
                </Typography>
              </Grid>
              <Divider orientation="vertical" flexItem className={classes.divider}/>
              <Grid item>
                <Button
                  onClick={() => this.copyToClipboard()}
                  color="white"
                  className={classes.navLink}
                >
                  <FileCopy color="textPrimary"/>
                </Button>
                <Snackbar
                  open={this.state.open}
                  onClose={() => this.setState({open: false})}
                  TransitionComponent={transition}
                  message={popUpText}
                  autoHideDuration={3000}
                  anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    )
  }
}

const style = theme => ({
  paper: {
    background: "white",
    borderColor: theme.palette.text.primary,
    margin: 10,
  },
  divider: {
    backgroundColor: theme.palette.text.primary
  }
})
export default withStyles(style)(CopyBox);
