import React from "react"
import { navigate } from 'gatsby';
import Img from "gatsby-image"

import withStyles from "@material-ui/core/styles/withStyles";

import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

class ArticleCardVertical extends React.Component {
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
      <Paper style={{ height: "100%" }} elevation={0}>
        <CardActionArea className={ classes.cardAction } onClick={ () => {navigate(slug)} }>
          <div style={{ width: '100%' }}>
            <Img
              fluid={fluidImage}
              style={{height: '200px'}}
              imgStyle={{objectFit: 'cover'}}
            />
            <div className={classes.cardBody}>
              <Typography gutterBottom variant="h3">
                <b>{title}</b>
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">
                {description}
              </Typography>
            </div>
          </div>
          <div className={classes.cardFooter}>
            <Typography variant="body2" color="textSecondary" component="p">
              {date}
              {" \u00B7 "}
              {readingTime}
            </Typography>
          </div>
        </CardActionArea>
      </Paper>
    )
  }
}

const style = {
  cardAction: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  cardBody: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  cardFooter: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingBottom: "15px",
  },
};

export default withStyles(style)(ArticleCardVertical);
