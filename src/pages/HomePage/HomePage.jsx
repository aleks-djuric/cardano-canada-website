import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Divider from '@material-ui/core/Divider';

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import Footer from "components/Footer/Footer.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import PoolMetadataSection from "./Sections/PoolMetadataSection.jsx"
import FeaturedArticlesSection from "./Sections/FeaturedArticlesSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";

const dashboardRoutes = [];

class HomePage extends React.Component {
  render() {
    const { classes, data, ...rest } = this.props;

    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Cardano Canada"
          brandLogo={require("assets/img/cardano-canada-logo.png")}
          rightLinks={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/toronto-skyline-white-cardano-white.png")}>
          <Grid container style={{paddingLeft: 60}}>
            <Grid item xs={12} sm={12} md={6}>
              <Typography gutterBottom variant="h1" color="primary">
                Cardano Canada
              </Typography>
              <Typography gutterBottom variant="h3" color="primary">
                Secure, reliable staking for everyone.
              </Typography>
            </Grid>
          </Grid>
        </Parallax>
        <div className={classes.mainRaised}>
          <ProductSection/>
          <Divider className={classes.divider}/>
          <PoolMetadataSection/>
          <Divider className={classes.divider}/>
          <FeaturedArticlesSection data={data}/>
          <Divider className={classes.divider}/>
          <ContactSection/>
        </div>
        <Footer />
      </div>
    );
  }
}

const style = theme => ({
  mainRaised: {
    background: "#FFFFFF",
    position: "relative",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  divider: {
    width: 40,
    height: 4,
    background: theme.palette.primary.main,
    marginLeft: "auto",
    marginRight: "auto",
  }
});

export default withStyles(style)(HomePage);
