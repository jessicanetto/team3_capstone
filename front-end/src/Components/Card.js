import React from "react";
import { render } from "react-dom";
import "../index.css";
import Form from "react-bootstrap/Form";
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Name:",
      phoneNumber: "Phone Number:",
      email: "E-mail:",
      linkedin: "LinkedIn URL:",
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangelinkedin = this.handleChangelinkedin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleChangePhoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value,
    });
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleChangelinkedin(event) {
    this.setState({
      linkedin: event.target.value,
    });
  }
  handleSubmit(event) {
    alert("Your information was saved");
    event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="box">
            <h1>Business Card</h1>

            <input
              className="name"
              placeHolder={this.state.name}
              type="text"
              onChange={this.handleChangeName}
            />

            <input
              className="phone"
              placeHolder={this.state.phoneNumber}
              type="text"
              onChange={this.handleChangePhoneNumber}
            />

            <input
              className="eMail"
              placeHolder={this.state.email}
              type="text"
              onChange={this.handleChangeEmail}
            />

            <input
              className="webSite"
              placeHolder={this.state.linkedin}
              type="text"
              onChange={this.handleChangelinkedin}
            />
          </div>
          <>
            <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#563d7c"
              title="Choose your color"
            />
          </>
        </form>

        <div className="cardDiv">
          <div className="card">
            <h1 className="cardName">
              <label>Name:</label> {this.state.name}
            </h1>
            <hr />
            <p className="cardPhoneNumber">
              <label>PhoneNumber:</label>
              {this.state.phoneNumber}
            </p>
            <hr />
            <p className="cardEmail">
              <label>Email:</label>
              {this.state.email}
            </p>
            <hr />
            <p className="cardWebsite">
              <label>LinkedIn URL:</label>
              {this.state.linkedin}
            </p>
            <hr />
            <button>Edit</button>
            <button>Flip</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
render(<Card />, document.getElementById("root"));
