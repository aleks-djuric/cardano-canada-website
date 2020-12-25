import React from "react";

import withStyles from "@material-ui/core/styles/withStyles";

import Divider from '@material-ui/core/Divider';

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";

import BlogBannerSection from "./Sections/BlogBannerSection";
import FeaturedArticlesSection from "./Sections/FeaturedArticlesSection";
import BlogPostsSection from "./Sections/BlogPostsSection";

const dashboardRoutes = [];

class BlogPage extends React.Component {
  render() {
    const { data, classes, ...rest } = this.props;

    return (
      <div>
        <Header
          color="white"
          routes={dashboardRoutes}
          brand="Cardano Canada"
          brandLogo={require("assets/img/cardano-canada-logo.png")}
          rightLinks={<HeaderLinks/>}
          fixed
          changeColorOnScroll={{
            height: -1,
            color: "white"
          }}
          {...rest}
        />
        <BlogBannerSection/>
        <FeaturedArticlesSection data={data}/>
        <Divider light/>
        <BlogPostsSection data={data}/>
        <Footer/>
      </div>
    )
  }
}

const style = {}

export default withStyles(style)(BlogPage);
