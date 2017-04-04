import React, { Component } from 'react';
import Hero from '../components/Hero';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import { pinkTheme } from '../lib/theme.js';
import Loading from '../components/Loading';
import { Grid } from 'react-styled-flexboxgrid';
import '../lib/global';
import Logo from '../components/Logo';
import Title from '../components/Title';
import Footer from '../components/Footer'

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
          >
            <Logo />
            <Title />
          </Hero>
          <Grid>
            {
              this.state.loading &&
              <Loading />
            }
            <Footer />
          </Grid>
        </div>
      </ThemeProvider>
    );
  }
}

export default HomePage;
