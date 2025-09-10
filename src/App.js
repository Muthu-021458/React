import React, { Component } from 'react';
import { DayOne } from './pages/DayOne';
import { ProductCard } from './pages/productCard';

class App extends Component {
  render() {
    return (
      <div >
        <DayOne/>
        <ProductCard/>
      </div>
    );
  }
}

export default App;
