import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage.toLowerCase() === 'home') {
      return <Home></Home>;
    } else if (this.state.currentPage.toLowerCase() === 'blog') {
      return <Blog></Blog>;
    } else if (this.state.currentPage.toLowerCase() === 'about') {
      return <About></About>;
    } else {
      return <Contact></Contact>; }
    }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default PortfolioContainer;
