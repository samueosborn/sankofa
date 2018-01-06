import React from "react";
import Form from "./form";

class Main extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }




  render() {
    return (
      <div>
        <div className="section categories">
          <div className="cont">
            <div className="row">
            <form onSubmit={this.handleSubmit}>
              <div className="nine columns">
               <label htmlFor="exampleEmailInput">
                   Enter your email we wil put you on our invite list
               </label>
               <input
                      className="u-full-width"
                      type="email"
                      placeholder="user@sankofaconnections.com"
                      id="exampleEmailInput"
                      value={this.state.value} onChange={this.handleChange}
                    />
                   
              </div>
              <div className="three columns cot">
                <Form />
              </div>
              </form>
            </div>
           
          </div>
        </div>
        <div className="container">
          <h3 className="section-heading"> Getting Ready …</h3>
          <p className="section-description" />
          <h5 className="section-description">
            At last our very own safe site for our loved ones to connect wtih
            one another is coming soon<p />
          </h5>
          <h5>
            {}
            <div className="center">
              <ul>
                <li>
                
                  <a href="fb.coom">
                    <i className="fa fa-facebook " aria-hidden="true" />
                  </a>
                </li>
                <li>
                
                  <a href="fb.coom">
                    <i className="fa fa-twitter " aria-hidden="true" />
                  </a>
                </li>
                <li>
                
                  <a href="fb.coom">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </h5>
        </div>
      </div>
    );
  }
}

export default Main;
