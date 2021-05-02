import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  }
  render() {
    console.log(this.state.data[0]);
    console.log(this.state.data[0].email, 'emaill');
    return (
      <div className="card">
        {/* <img src={} /> */}
        <p>
          My name is
          {/* {this.state.data && this.state.data.email} */}
        </p>
        <div className="card-details">
          <i className="fas fa-user"></i>
          <i className="fas fa-envelope-open"></i>
          <i className="fas fa-address-card"></i>
          <i className="fas fa-phone-alt"></i>
          <i className="fas fa-unlock"></i>
        </div>
        <button>Random user</button>
      </div>
    );
  }
}

export default Card;
