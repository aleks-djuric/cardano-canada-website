import React from "react";
import { Link } from "gatsby";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default () => (
  <div style={{textAlign: "center", paddingTop: 200}}>
    <Grid container justify="center">
      <Grid item xs={12} style={{paddingBottom: 40}}>
        <Typography variant="h1" color="primary">
          404 Error :(
        </Typography>
      </Grid>
      <Grid item xs={7} style={{paddingBottom: 30}}>
        <Typography variant="h3" color="textSecondary">
          Maybe this page moved? Got deleted? Is hiding out in quarantine?
          Never existed in the first place?
        </Typography>
      </Grid>
      <Grid item xs={7} style={{paddingBottom: 30}}>
        <Typography variant="h3" color="textSecondary">
          Let's go <Link to="/">home</Link> and try from there.
        </Typography>
      </Grid>
    </Grid>
  </div>
);
