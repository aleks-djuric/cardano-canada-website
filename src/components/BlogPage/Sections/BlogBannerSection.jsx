import React from "react"

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class BlogBannerSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <Grid container alignItems="center">
          <Grid container item xs={8}>
            <Grid item xs={12}>
              <div className={classes.text}>
                <Typography gutterBottom variant="h1" color="secondary">
                  Blockchain is complicated
                </Typography>
                <Typography gutterBottom variant="h3" color="secondary">
                  Let's break it down, one blog at a time.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <img
              className={classes.image}
              src={require("assets/img/leaf3.png")}
              alt="Maple Leaf Network"
            />
          </Grid>
        </Grid>
      </div>
    )
  }
}

const style = {
  section: {
    backgroundImage: `url(${require("assets/img/blog-banner-background.png")})`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: "60px",
  },
  text: {
    paddingTop: "140px",
    paddingBottom: "140px",
    paddingLeft: "60px"
  },
  image: {
    maxHeight: "350px",
  },
};

export default withStyles(style)(BlogBannerSection);
