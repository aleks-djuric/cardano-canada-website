import React from "react";
import { graphql } from "gatsby"
import BlogPage from "../components/BlogPage/BlogPage";

export default (props) => {
  const { data, location } = props;
  return (
    <BlogPage data={data} location={location}/>
  );
};

export const query = graphql`
  query BlogPageQuery {
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
`;
