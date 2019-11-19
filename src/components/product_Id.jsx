import React, { Component } from 'react';

class ProductId extends Component {
  state = {
    count: 0,
    tags: ['tag1', 'tag2', 'tag3']
  };
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.state.count}</span>
        <button
          // instead of hardcoding id:1 we will pass a reference of product currently rendering.
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    classes += this.state.count === 0 ? 'warning' : 'primary';
    return classes;
  }
}

export default ProductId;
