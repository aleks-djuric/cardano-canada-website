import React from "react"
import { navigate } from 'gatsby';
import Img from "gatsby-image"

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

class ArticleCardHorizontal extends React.Component {
  render () {
    const {
      classes,
      slug,
      title,
      fluidImage,
      description,
      date,
      readingTime
    } = this.props;

    return (
      <Paper elevation={0}>
        <CardActionArea onClick={() => {navigate(slug)}}>
          <Grid container>
            <Grid item xs={4}>
              <Img
                fluid={fluidImage}
                style={{ height: '160px'}}
                imgStyle={{ objectFit: 'cover' }}
              />
            </Grid>
            <Grid item xs={8} container direction="column" justify="space-between">
              <Grid item>
                <div className={classes.cardBody}>
                  <Typography gutterBottom variant="h3">
                    <b>{title}</b>
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary" component="p">
                    {description}
                  </Typography>
                </div>
              </Grid>
              <Grid item >
                <div className={classes.cardFooter}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {date}
                    {" \u00B7 "}
                    {readingTime}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </CardActionArea>
      </Paper>
    )
  }
}

const style = {
  cardBody: {
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  cardFooter: {
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "15px",
  }
}

export default withStyles(style)(ArticleCardHorizontal);
