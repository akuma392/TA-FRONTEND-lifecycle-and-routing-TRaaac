import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }
  render() {
    console.log(this.state.data);
    return (
      <div className="card">
        {/* <img src={this.state.data.picture.large} alt="" /> */}
        <p>{this.state.data.cell}</p>
        <h3>{this.state.data.name}</h3>
      </div>
    );
  }
}

export default Card;
