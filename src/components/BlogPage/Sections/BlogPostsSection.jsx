import React from "react"

import withStyles from "@material-ui/core/styles/withStyles";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import ArticleCardHorizontal from "components/ArticleCardHorizontal"

class BlogPostsSection extends React.Component {
  render () {
    const { data, classes } = this.props;
    const posts = data.allMdx.nodes
    return (
      <div className={classes.container}>
        <Grid container justify="space-between">
          <Grid container alignContent="flex-start" spacing={4} item xs={12} md={8}>
            {
              posts.map(post => {
                return (
                  <Grid item xs={12}>
                    <ArticleCardHorizontal
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
          <Grid item xs={12} md={4}>
            <Paper>
              <a class="twitter-timeline" href="https://twitter.com/CardanoCanada?ref_src=twsrc%5Etfw">
                Tweets by CardanoCanada
              </a>
              <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

const style = {
  container: {
    background: "#FFFFFF",
    width: "100%",
    paddingLeft: "60px",
    paddingRight: "60px",
    paddingTop: "60px",
    paddingBottom: "60px",
  },
}

export default withStyles(style)(BlogPostsSection);
