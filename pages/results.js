import React, { Component, PropTypes } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import Track from '../components/Track';
import { ThemeProvider } from 'styled-components';
import { pinkTheme } from '../lib/theme.js';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Album from '../components/Album';
import Artist from '../components/Artist';
import Router from 'next/router';
import Hero from '../components/Hero';
import Player from '../components/Player';
import '../lib/global';
import withRedux from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from '../reducers/index';

const makeStore = function(initialState = {}) {
  return store = createStore(reducer, initialState)
}

const Results = styled.section`
  ul {
    list-style: none;
    padding-left: 0;
  }
`

class ResultsPage extends Component {
  state = {
    currentTrack: {
      preview_url: '',
    },
  }
  static async getInitialProps({ query }) {
    const URL = `https://api.spotify.com/v1/search/?q=${query.query}&type=artist,album,track`

    const response = await fetch(URL)

    const data = await response.json()
    console.log(data);
    return data
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
  setTrack = (track) => {
    console.log('set track',track);
    this.setState({
      currentTrack: track
    })
  }
  getChildContext() {
    return {
      currentTrack: this.state.currentTrack,
      setCurrentTrack: this.setTrack,
    }
  }
  render() {
    return (
      <ThemeProvider theme={pinkTheme}>
        <Results>
          <Player />
          <Hero
            onSubmit={this.handleSubmit}
          />
          <Grid>
            <h2>Tracks</h2>
            <ul>
              {
                this.props.tracks.items.map(
                  item => {
                    const lol = item.name + 'lol';
                    let itemProps = item;
                    if (itemProps.name === 'Despacito (Featuring Daddy Yankee)') {
                      itemProps = {...item, name: 'Suavecito'}
                    }
                    return (
                      <Track
                        key={item.id}
                        otherName={lol}
                        {...itemProps}
                      />
                    )
                  }
                )
              }
            </ul>
            <h2>Albums</h2>
            <ul>
              <Row>
              {
                this.props.albums.items.map(
                  item => {
                    return (
                        <Col xs={12} sm={4}>
                          <Album {...item} key={item.id}/>
                        </Col>
                    )
                  }
                )
              }
              </Row>
            </ul>
            { this.props.artists &&
              <div>
                <h2>Artistas</h2>
                <ul>
                  <Row>
                    {
                      this.props.artists.items.map(
                        item => (
                          <Col xs={12} sm={4}>
                            <Artist key={item.id} {...item} />
                          </Col>
                        )
                      )
                    }
                  </Row>
                </ul>
              </div>
            }

          </Grid>
        </Results>
      </ThemeProvider>
    )
  }
}

ResultsPage.childContextTypes = {
  currentTrack: PropTypes.string,
  setCurrentTrack: PropTypes.func,
}

export default withRedux(makeStore)(ResultsPage);
