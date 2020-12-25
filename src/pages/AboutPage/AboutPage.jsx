import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";

import MissionSection from "./Sections/MissionSection.jsx"
import ArchitectureSection from "./Sections/ArchitectureSection.jsx"
import TeamSection from "./Sections/TeamSection.jsx";

const aboutRoutes = [];

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          routes={aboutRoutes}
          brand="Cardano Canada"
          brandLogo={require("assets/img/cardano-canada-logo.png")}
          rightLinks={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: 150,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require('assets/img/toronto-skyline/aerial-view-of-toronto.jpg')}>
          <Grid container justify="flex-end" alignItems="center" className={classes.textGrid}>
            <Grid item xs={12}>
              <Typography variant="h1" color="primary" align="right">
                The revolution
              </Typography>
              <Typography variant="h1" color="secondary" align="right">
                will not be centralized
              </Typography>
            </Grid>
          </Grid>
        </Parallax>
        <div className={classes.mainRaised}>
          <MissionSection/>
        </div>
        <Footer />
      </div>
    );
  }
}

const style = theme => ({
  textGrid: {
    height: "100%",
    paddingRight: 60,
  },
  primaryColor: {
    color: theme.palette.primary.main
  },
  mainRaised: {
    background: "#FFFFFF",
    position: "relative",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
});

export default withStyles(style)(AboutPage);
