import React, { Component } from 'react';
import Link from 'next/link';
import Title from '../components/Title';

class HomePage extends Component {
  static async getInitialProps() {
    return {
      name: 'Platzi',
    };
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Title name={this.props.name} />
        <br />
        <Link href="/results">
          <a>Ir a los resultados</a>
        </Link>
      </div>
    );
  }
}

export default HomePage;
