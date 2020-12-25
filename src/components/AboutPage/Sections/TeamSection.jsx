import React from "react";

import classNames from "classnames";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent"
import Typography from "@material-ui/core/Typography"

import logo from "assets/img/cardano-canada-logo.png"

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <Grid container justify="center">
          <Grid item xs={12} style={{paddingBottom: 40}}>
            <Typography variant="h2" color="primary">
              Our Team
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={12} md={4}>
            <Card elevation={0} style={{padding: 10}}>
              <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={logo} alt="..." className={imageClasses} />
              </Grid>
              <Typography variant="h4" color="primary">
                Gigi Hadid
                <br />
                <small className={classes.smallTitle}>Model</small>
              </Typography>
              <CardContent>
                <p className={classes.description}>
                  You can write here details about one of your team members.
                  You can give more details about what they do. Feel free to
                  add some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card elevation={0} style={{padding: 10}}>
              <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={logo} alt="..." className={imageClasses} />
              </Grid>
              <Typography variant="h4" color="primary">
                Gigi Hadid
                <br />
                <small className={classes.smallTitle}>Model</small>
              </Typography>
              <CardContent>
                <p className={classes.description}>
                  You can write here details about one of your team members.
                  You can give more details about what they do. Feel free to
                  add some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Card elevation={0} style={{padding: 10}}>
              <Grid item xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={logo} alt="..." className={imageClasses} />
              </Grid>
              <Typography variant="h4" color="primary">
                Gigi Hadid
                <br />
                <small className={classes.smallTitle}>Model</small>
              </Typography>
              <CardContent>
                <p className={classes.description}>
                  You can write here details about one of your team members.
                  You can give more details about what they do. Feel free to
                  add some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const style = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  smallTitle: {
    color: "#6c757d"
  },
  description: {
    color: "#999"
  },
  justifyCenter: {
    justifyContent: "center !important"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  imgFluid: {
    maxWidth: "100%",
    height: "auto"
  },
  imgRoundedCircle: {
    borderRadius: "50% !important"
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
};

export default withStyles(style)(TeamSection);
