import React, { Component } from 'react';
import Hero from '../components/Hero';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';

const pinkTheme = {
  font: 'Quicksand',
  color: {
    primary: 'rgba(81, 121, 255, 0.5)',
    secondary: 'rgba(233, 131, 238, 0.5)',
    tertiary: '#bfafd9',
    button: '#ea83ee'
  }
};

const crazyTheme = {
  font: 'Quicksand',
  color: {
    primary: 'orange',
    secondary: 'yellow',
    tertiary: 'green',
    button: 'blue'
  }
};

class HomePage extends Component {
  state = {
    inputValue: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const value = this.state.inputValue;
    Router.push(`/results?query=${value}`);
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  }

  render() {
    return (
      <ThemeProvider theme={pinkTheme}>
        <Hero
          onSubmit={this.handleSubmit}
          onInputChange={this.handleChange}
        />
      </ThemeProvider>
    );
  }
}

export default HomePage;
