import React, { Component } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-fetch';
import Track from '../components/Track';
import { ThemeProvider } from 'styled-components';
import { pinkTheme } from '../lib/theme.js';
import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

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
            <ul>
              {
                this.props.albums.items.map(
                  item => (
                    <li key={item.id}> {item.name} </li>
                  )
                )
              }
            </ul>
            <ul>
              {
                this.props.artists.items.map(
                  item => (
                    <li key={item.id}> {item.name} </li>
                  )
                )
              }
            </ul>
          </Grid>
        </Results>
      </ThemeProvider>
    )
  }
}

export default ResultsPage;
