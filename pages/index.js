import React, { Component } from 'react';
import Hero from '../components/Hero';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import { pinkTheme } from '../lib/theme.js';


class HomePage extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const value = form.elements.buscar.value;
    Router.push(`/results?query=${value}`);
  }

  render() {
    return (
      <ThemeProvider theme={pinkTheme}>
        <Hero
          onSubmit={this.handleSubmit}
        />
      </ThemeProvider>
    );
  }
}

export default HomePage;
