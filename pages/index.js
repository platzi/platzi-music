import React, { Component } from 'react';
import Hero from '../components/Hero';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import { pinkTheme } from '../lib/theme.js';


class HomePage extends Component {
  state = {
    loading: false,
  }
  handleSubmit = (event) => {
    this.setState({
      loading: true,
    })
    event.preventDefault();
    const form = event.target;
    const value = form.elements.buscar.value;
    Router.push(`/results?query=${value}`);
  }

  render() {
    return (
      <ThemeProvider theme={pinkTheme}>
        <div>
          <Hero
            onSubmit={this.handleSubmit}
          />
          {
            this.state.loading ?
              <div>cargando...</div>
            :
              <div>no estamos cargando nada...</div>
          }
        </div>
      </ThemeProvider>
    );
  }
}

export default HomePage;
