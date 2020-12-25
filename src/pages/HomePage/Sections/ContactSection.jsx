import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ContactSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Grid container justify="center">
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h2" color="primary" align="center" style={{ margin: "50px" }}>
              Questions?
            </Typography>
            <Typography variant="h4" color="textSecondary" align="center" style={{ margin: "35px" }}>
              Send us an email and we'll get back to you as soon as we can!
            </Typography>
            <form id="contact" action="https://getform.io/f/078ccd61-8159-4f6e-92d5-432f79a85ff2" method="POST">
              <Grid container style={{padding: 15}}>
                <Grid item xs={12} sm={12} md={6} style={{paddingRight: 5}}>
                  <TextField id="name" name="text" label="Your Name" fullWidth/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} style={{paddingLeft: 5}}>
                  <TextField id="email" name="email" label="Your Email" fullWidth/>
                </Grid>
                <Grid item xs={12} style={{paddingTop: 15}}>
                  <TextField id="message" name="text" label="Your Message" fullWidth multiline rows={5}/>
                </Grid>
                <Grid container justify="center" style={{paddingTop: 50}}>
                  <Grid item xs={12} sm={12} md={4} align="center">
                    <Button type="submit" form="contact" variant="contained" color="primary">
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const style = {
  section: {
    paddingTop: 60,
    paddingBottom: 100,
  }
}

export default withStyles(style)(ContactSection);
