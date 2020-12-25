import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";

const aboutRoutes = [];

class DashboardPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="whiteLined"
          routes={aboutRoutes}
          brand="Cardano Canada"
          brandLogo={require("assets/img/cardano-canada-logo.png")}
          rightLinks={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: -1,
            color: "whiteLined"
          }}
          {...rest}
        />
        <div className={classes.container}>
          <Grid container>
            <Grid item align="center" xs={12}>
              <Typography gutterBottom variant="h1" color="primary" align="center">
                Stakepool Dashboard
              </Typography>
              <Typography gutterBottom variant="h1" color="primary" align="center">
                Coming Soon!
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

const style = {
  container: {
    background: "#FFFFFF",
    width: "100%",
    marginTop: "60px",
    paddingTop: "200px",
    paddingBottom: "400px",
    paddingLeft: "60px"
  },
};

export default withStyles(style)(DashboardPage);
