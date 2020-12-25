import React from "react"

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class ArchitectureSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Grid container justify="center">
          <Grid item xs={12} style={{paddingBottom: 40}}>
            <Typography variant="h2" color="primary">
              Stake pool architecture
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const style = {
  section: {
    paddingTop: 40,
    paddingBottom: 100,
    textAlign: "center",
  },
};

export default withStyles(style)(ArchitectureSection);
