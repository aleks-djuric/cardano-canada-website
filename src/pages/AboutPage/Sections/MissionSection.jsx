import React from "react"

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class MissionSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Grid container justify="center">
          <Grid item xs={12} style={{paddingBottom: 40}}>
            <Typography variant="h2" color="primary">
              Our Mission
            </Typography>
          </Grid>
          <Grid item xs={9} style={{paddingBottom: 30}}>
            <Typography variant="body1" color="textSecondary">
              We firmly believe blockchain has the power to revolutionize the
              world. It will transform everything from banking, finance and
              commerce to government and identity. In the forthcoming era of
              decentralization, power will shift from corporations
              and governments back to individuals. Inflexible and monolithic
              systems will be replaced by robust and adaptable digital
              microservices, enabling us to cope with an increasingly complex
              and rapidly evolving world.
            </Typography>
          </Grid>
          <Grid item xs={9} style={{paddingBottom: 50}}>
            <Typography variant="body1" color="textSecondary">
              Cardano Canada ultimately aims to facilitate this transition
              to a blockchain-based society. Our goal is to promote the adoption
              of decentralized technologies by supporting and raising awareness
              of the Cardano ecosystem. Initial efforts towards this end
              include running a Cardano stake pool and developing resources for
              educating the public about blockchain.
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

export default withStyles(style)(MissionSection);
