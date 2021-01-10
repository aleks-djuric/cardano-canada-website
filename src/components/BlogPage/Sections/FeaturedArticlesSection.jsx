import React from "react"

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ArticleCardVertical from "components/ArticleCardVertical"

class FeaturedArticlesSection extends React.Component {
  render () {
    const { data, classes } = this.props;
    const posts = data.allMdx.nodes
    return (
      <div className={classes.container}>
        <Typography variant="h2" color="primary" align="center" style={{ margin: "35px" }}>
          Featured posts
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
      </div>
    )
  }
}

const style = {
  container: {
    background: "#FFFFFF",
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "20px",
    paddingBottom: "40px",
  },
};

export default withStyles(style)(FeaturedArticlesSection);
