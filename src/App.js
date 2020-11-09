import React, { Component } from 'react';
import Total from './Total';
import Features from './Features'
import Summary from './Summary'
import Header from './Header'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
 import slugify from 'slugify';

import './App.css';

// This object will allow us to
// easily convert numbers into US dollar values
// should be a function componnent in a seperate file
// const USCurrencyFormat = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD'
// });
// cards information
class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
 
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {
      const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <Header />
        <main>
          <form className="main__form">
            <h2>Customize your laptop</h2>
          <Features features={this.props.features} 
          selected={this.state.selected} 
          updateFeature={this.updateFeature} 
          />
          </form>
            <section className="main__summary">
            <h2>Your cart</h2>
          <Summary selected={this.state.selected}/>
          <Total selected={this.state.selected} />
            
          </section>
        </main>
      </div>
    );
  }
}

export default App;
