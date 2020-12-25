import React from "react"
import { navigate } from 'gatsby';

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ArticleCardVertical from "components/ArticleCardVertical"

class FeaturedArticlesSection extends React.Component {
  render () {
    const { data, classes } = this.props;
    const posts = data.allMdx.nodes
    return (
      <div className={classes.section}>
        <Typography variant="h2" color="primary" align="center" style={{ margin: "50px" }}>
          Featured blog posts
        </Typography>
        <Grid container spacing={4}>
          {
            posts.map(post => {
              return (
                <Grid item xs={12} sm={4}>
                  <ArticleCardVertical
                    slug={post.fields.slug}
                    title={post.frontmatter.title}
                    fluidImage={post.frontmatter.featuredImage.childImageSharp.fluid}
                    description={post.frontmatter.description}
                    date={post.frontmatter.date}
                    readingTime={post.fields.readingTime.text}
                  />
                </Grid>
              )
            })
          }
        </Grid>
        <Grid container justify="center" style={{marginTop: 60}}>
          <Grid item xs={12} sm={12} md={4} align="center">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {navigate("/blog")}}
            >
              Go To Blog
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const style = {
  section: {
    background: "#FFFFFF",
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "60px",
    paddingBottom: "100px",
  },
};

export default withStyles(style)(FeaturedArticlesSection);
