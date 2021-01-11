import React from "react";
import { navigate } from 'gatsby';

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MoneyOff from "@material-ui/icons/MoneyOff";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import SentimentSatisfiedAlt from "@material-ui/icons/SentimentSatisfiedAlt";

import InfoArea from "components/InfoArea/InfoArea.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Grid container justify="center" style={{marginBottom: 25}}>
          <Grid item style={{paddingBottom: 40}}>
            <Typography variant="h2" color="primary">
              Join a world-class staking experience
            </Typography>
          </Grid>
          <Grid item container justify="center">
            <Grid item xs={9}>
              <Typography variant="body1" color="textSecondary">
                Cardano Canada is commited to offering the very best staking experience.
                Our fundamental goal is to promote the adoption of decentralized technology
                by supporting and raising awareness of the Cardano ecosystem. We believe
                blockchain will ultimately reinvent the architecture of society, creating
                a more equitable, sustainable and beautiful world.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={4}>
            <InfoArea
              title="Lowest Fees"
              description="We pledge to always provide the lowest fees in the market. Maximizing profits for our delegators will always be our top priority."
              icon={MoneyOff}
              iconColor="success"
              vertical
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoArea
              title="Reliable"
              description="Security and reliability are always foremost on our minds. Protected and maintained by IT professionals, our pool features a highly resilient architecture for 100% uptime."
              icon={VerifiedUser}
              iconColor="info"
              vertical
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoArea
              title="Commited"
              description="We are here to serve the Cardano community. We aim promote the adoption of blockchain technology through education and resource development."
              icon={SentimentSatisfiedAlt}
              iconColor="warning"
              vertical
            />
          </Grid>
        </Grid>
        <Grid container justify="center" style={{marginTop: 50}}>
          <Grid item align="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {navigate("/about")}}
            >
              Learn More About Us
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}


const style = {
  section: {
    paddingTop: 40,
    paddingBottom: 100,
    textAlign: "center",
  },
};

export default withStyles(style)(ProductSection);
