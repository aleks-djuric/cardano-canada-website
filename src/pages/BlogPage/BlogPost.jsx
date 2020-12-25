import React from "react";
import Img from "gatsby-image"
import { graphql } from 'gatsby';
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import withStyles from "@material-ui/core/styles/withStyles";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";

const dashboardRoutes = [];

class BlogPost extends React.Component {
  render() {
    const { data, classes, ...rest } = this.props;
    const post = data.mdx

    return (
      <div className={classes.background}>
        <Header
          color="whiteLined"
          routes={dashboardRoutes}
          brand="Cardano Canada"
          brandLogo={require("assets/img/cardano-canada-logo.png")}
          rightLinks={<HeaderLinks/>}
          changeColorOnScroll={{
            height: -1,
            color: "whiteLined"
          }}
          {...rest}
        />
        <Container style={{maxWidth: 760}}>
          <Paper elevation={0}>
            <div className={classes.articleHeader}>
              <Typography variant="h1" gutterBottom>
                {post.frontmatter.title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom color="textSecondary" style={{marginBottom: 20}}>
                {post.frontmatter.description}
              </Typography>
              <Grid container style={{paddingBottom: "40px"}}>
                <Grid item style={{marginRight: "10px"}}>
                  <Img
                    fluid={post.frontmatter.authorImage.childImageSharp.fluid}
                    style={{ height: "50px", width: "50px", borderRadius: "50%"}}
                    imgStyle={{ objectFit: 'cover'}}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body2" gutterBottom color="textPrimary">
                    Aleksandar Djuric
                  </Typography>
                  <Typography variant="body2" gutterBottom color="textSecondary">
                    {post.frontmatter.date}
                    {" \u00B7 "}
                    {post.fields.readingTime.text}
                  </Typography>
                </Grid>
              </Grid>
              <Img
                fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                imgStyle={{ objectFit: 'cover' }}
              />
            </div>
            <MDXProvider
              components={{
                h1: (props) => <Typography {...props} variant="h1" color="textPrimary" gutterBottom/>,
                h2: (props) => <Typography {...props} variant="h2" color="textPrimary" gutterBottom/>,
                h3: (props) => <Typography {...props} variant="h3" color="textPrimary" gutterBottom/>,
                h4: (props) => <Typography {...props} variant="h4" color="textPrimary" gutterBottom/>,
                h5: (props) => <Typography {...props} variant="h5" color="textPrimary" gutterBottom/>,
                h6: (props) => <Typography {...props} variant="h6" color="textPrimary" gutterBottom/>,
                p: (props) => <Typography {...props} variant="body1" color="textPrimary" gutterBottom/>,
              }}
            >
              <MDXRenderer>
                {post.body}
              </MDXRenderer>
            </MDXProvider>
          </Paper>
        </Container>
        <Footer/>
      </div>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        author
        authorImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

const style = {
  background: {
    background: "#FFFFFF",
  },
  articleHeader: {
    marginTop: 50,
    marginBottom: 50
  },
  h2: {
    fontSize: "1rem"
  },
  paragraph: {
    color: "#FFFFFF"
  }
}

export default withStyles(style)(BlogPost);
