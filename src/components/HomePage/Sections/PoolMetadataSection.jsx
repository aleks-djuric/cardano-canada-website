import React from "react"
import { navigate } from 'gatsby';

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from '@material-ui/icons/Info';

import CopyBox from "components/CopyBox.jsx";

class PoolMetadataSection extends React.Component {
  render () {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Typography variant="h2" color="primary" align="center" style={{ margin: "50px" }}>
          Stake pool info
        </Typography>
        <Grid container justify="center">
          <Grid item xs={9}>
            <Paper variant="outlined" className={classes.outerPaper}>
              <Paper variant="outlined" className={classes.innerPaper}>
                <Grid container>
                  <Grid container alignItems="center" item xs={12} style={{paddingBottom: 50}}>
                    <Grid item xs={12} md={3} style={{borderRight: '1px solid #837890'}}>
                      <Typography variant="h4" color="textPrimary" align="center" gutterBottom>
                        Active Stake
                        <Tooltip title="Ada staked by our delegators this epoch" placement="top">
                          <InfoIcon className={classes.icons} />
                        </Tooltip>
                      </Typography>
                      <Typography color="primary" align="center" gutterBottom>
                        {" \u20B3 5,767,031" }
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} style={{borderRight: '1px solid #837890'}}>
                      <Typography variant="h4" color="textPrimary" align="center" gutterBottom>
                        Pledge
                        <Tooltip title="Ada pledged by Cardano Canada" placement="top">
                          <InfoIcon className={classes.icons} />
                        </Tooltip>
                      </Typography>
                      <Typography color="primary" align="center" gutterBottom>
                        {" \u20B3 250,000" }
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3} style={{borderRight: '1px solid #837890'}}>
                      <Typography variant="h4" color="textPrimary" align="center" gutterBottom>
                        Margin
                        <Tooltip title="Variable fee charged by Cardano Canada" placement="top">
                          <InfoIcon className={classes.icons} />
                        </Tooltip>
                      </Typography>
                      <Typography color="primary" align="center" gutterBottom>
                        1 %
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <Typography variant="h4" color="textPrimary" align="center" gutterBottom>
                        Fixed Fee
                        <Tooltip title="Fixed fee charged by Cardano Canada" placement="top">
                          <InfoIcon className={classes.icons} />
                        </Tooltip>
                      </Typography>
                      <Typography color="primary" align="center" gutterBottom>
                        {" \u20B3 340" }
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} style={{paddingLeft: 20, paddingRight: 20}}>
                    <CopyBox
                      label="TICKER"
                      textToCopy="POLAR"
                      popUpText="Ticker copied to clipboard"
                    />
                    <CopyBox
                      label="POOL ID"
                      textToCopy="0d8fb11358f653adc406c1508d27f9c1741c4eb06b75bef6d676489a"
                      popUpText="Pool ID copied to clipboard"
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center" style={{marginTop: 70}}>
          <Grid item align="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {navigate("/dashboard")}}
            >
              Go To Stake Pool Dashboard
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const style = theme => ({
  section: {
    paddingTop: 65,
    paddingBottom: 100,
  },
  outerPaper: {
    borderColor: theme.palette.primary.main,
    borderWidth: "2px",
    paddingTop: 7,
    paddingBottom: 7,
    paddingLeft: 7,
    paddingRight: 7,
  },
  innerPaper: {
    background: "white",
    borderColor: theme.palette.text.primary,
    borderWidth: "1px",
    paddingTop: 50,
    paddingBottom: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icons: {
    width: "15px",
    height: "15px",
    marginLeft: "5px"
  },
});

export default withStyles(style)(PoolMetadataSection);
