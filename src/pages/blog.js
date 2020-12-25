import React from "react";
import { graphql } from "gatsby"
import BlogPage from "./BlogPage/BlogPage";

export default ({ data, location }) => (
  <BlogPage data={data} location={location}/>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
          readingTime {
            text
          }
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          featuredImagePath
        }
      }
    }
  }
`
