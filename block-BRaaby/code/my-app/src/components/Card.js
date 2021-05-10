import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results[0] }));
    console.log('mount');
  }

  componentDidUpdate(value) {
    console.log('update');
    switch (value) {
      case 'fas fa-user':
        return <p>My username is{this.state.data.login.username}</p>;
        break;
      case 'fas fa-envelope-open':
        return <p>My email is{this.state.data.email}</p>;
        break;
      case 'fas fa-address-card':
        return <p>My username is{this.state.data.location.street}</p>;
        break;
      case 'fas fa-phone-alt':
        return <p>My email is{this.state.data.phone}</p>;
        break;
    }
  }

  handleClick = (event) => {
    console.log(event.target.className);
    let value = event.target.className;
    // switch (value) {
    //   case 'fas fa-user':
    //     return <p>My username is{this.state.data.login.username}</p>;
    //     break;
    //   case 'fas fa-envelope-open':
    //     return <p>My email is{this.state.data.email}</p>;
    //     break;
    //   case 'fas fa-address-card':
    //     return <p>My username is{this.state.data.location.street}</p>;
    //     break;
    //   case 'fas fa-phone-alt':
    //     return <p>My email is{this.state.data.phone}</p>;
    //     break;
    // }
    this.componentDidUpdate(value);
  };
  handleUser = () => {
    this.componentDidMount();
    // return (
    //   <p>
    //     My name is {this.state.data.name.first} {this.state.data.name.last}
    //   </p>
    // );
  };
  render() {
    console.log(this.state.data, 'render');
    // console.log(this.state.data.email, 'emaill');

    let result = this.state.data;

    if (!result) {
      return <h2>Loading...........</h2>;
    }
    return (
      <div className="card">
        <img src={result.picture.medium} />
        {/* {this.componentDidUpdate() || this.handleUser()} */}
        <div className="card-details">
          <i onClick={this.handleClick} className="fas fa-user"></i>
          <i onClick={this.handleClick} className="fas fa-envelope-open"></i>
          <i onClick={this.handleClick} className="fas fa-address-card"></i>
          <i onClick={this.handleClick} className="fas fa-phone-alt"></i>
          <i onClick={this.handleClick} className="fas fa-unlock"></i>
        </div>
        <button onClick={this.handleUser}>Random user</button>
      </div>
    );
  }
}

export default Card;
