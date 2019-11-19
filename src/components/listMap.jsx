import React, { Component } from 'react';

class ListMap extends Component {
  state = {
    count: 0,
    imageUrl: 'http://picsum.photos/200',
    tags: ['tag1', 'tag2', 'tag3']
  };
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    if (this.state.tags === 0) return <p>'There are no tags!'</p>;
    return (
      <React.Fragment>
        {this.state.tags === 0 && '<p>Please add some tags</P>'}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <img className="m-2" src={this.state.imageUrl} alt="" />
        <button
          onClick={this.handleIncrement}
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

  formatCount() {
    //return this.state.count === 0 ? 'Zero' : this.state.count;
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default ListMap;
