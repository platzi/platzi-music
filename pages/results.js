import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import Track from '../components/Track';
import { ThemeProvider } from 'styled-components';
import { pinkTheme } from '../lib/theme.js';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Album from '../components/Album';
import Artist from '../components/Artist';

const Results = styled.section`
  ul {
    list-style: none;
    padding-left: 0;
  }
`

class ResultsPage extends Component {
  static async getInitialProps({ query }) {
    const URL = `https://api.spotify.com/v1/search/?q=${query.query}&type=artist,album,track`

    const response = await fetch(URL)

    const data = await response.json()
    console.log(data);
    return data
  }

  render() {
    console.log(this.props)
    return (
      <ThemeProvider theme={pinkTheme}>
        <Results>
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
          </Grid>
        </Results>
      </ThemeProvider>
    )
  }
}

export default ResultsPage;
