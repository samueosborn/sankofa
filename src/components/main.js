import React from "react";

//import Form from "./form";

class Main extends React.Component {





    constructor(props) {
    
      super(props);    
      this.state = {email: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
      this.setState({email: event.target.value});
      
    }
    componentDidMount(){
      this.handleSubmit(event);

    

    }
    handleSubmit(event) {
     
      event.preventDefault();


        var mail=this.state.email;
      
          
       var myData=JSON.stringify({'email':mail});

  const myRequest = new Request('http://e-talk.co/exclusive/sankofaApi?add=email', { method: 'POST', body:myData,
      
      });
 
       //const myURL = myRequest.url; // http://localhost/api
      // const myMethod = myRequest.method; // POST
        //const myCred = myRequest.credentials; // omit
       

        fetch(myRequest)
        .then(response => {
          if (response.type === 'opaque') {
            console.log('Received a response, but it\'s opaque so can\'t examine it', response.json());
            return;
          }
          else if (response.status === 200) {
            return response;
          } else {
            throw new Error('Something went wrong on api server!' + response.status);
          }
          // Examine the text in the response
            response.text().then(function(responseText) {
              console.log(responseText);
            });
        })
        .then(response => {
          console.debug(response);
          // ...
        }).catch(error => {
          console.error(error);
        });

        var notes = this.refs.email;
      alert('You have been successfully added to Our invite list');
      notes.value = "";
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
               <label htmlFor="exampleEmailInput" id="heading">
                   Enter your email we wil put you on our invite list
               </label>
               <input
                      className="u-full-width"
                      ref="email"
                      type="email"
                      placeholder="user@sankofaconnections.com"
                      id="exampleEmailInput"
                      value={this.state.email} onChange={this.handleChange}
                    />

                    
                   
              </div>
              <div className="three columns cot">
                      <button
                className="button button-primary get-help bt"
                
                disabled={!this.state.email}
                type="submit"
              > Add Me</button>
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
           
            <div className="center">
              <ul>
                <li>
                
                  <a href="https://facebook.com/Sankofa.kofi">
                    <i className="fa fa-facebook " aria-hidden="true" />
                  </a>
                </li>
                <li>
                
                  <a target="_blank"  href="https://twitter.com/Sankofa21613802">
                    <i className="fa fa-twitter " aria-hidden="true" />
                  </a>
                </li>
                <li>
                
                  <a href="https://instagram.com/Sankofaconnections/">
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
