import React from "react";
import Modal from '../Modal';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <div className="header-left">
          <img src="images/sankofab.png" className="goimg" alt="logo" />
        </div>
  
        <div className="header-center">
          <ul>
            <li>
        
              <a href="https://facebook.com/Sankofa.kofi">
                <i className="fa fa-facebook fa-2x" aria-hidden="true" />
              </a>
            </li>
            <li>
              
              <a href="https://twitter.com/Sankofa21613802">
                <i className="fa fa-twitter fa-2x" aria-hidden="true" />
              </a>
            </li>
            <li>
            
              <a href="https://instagram.com/Sankofaconnections/">
                <i className="fa fa-instagram fa-2x" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <button
            style={{
              
              color: "#fff"
            }}
            onClick={this.toggleModal}
          >
            About Us
          </button>
        </div>

            <Modal show={this.state.isOpen}
              onClose={this.toggleModal}>
              Sankofa Connections is a virtual Community Center that will function as a platform for the poeple of Ghanaian origin i the diaspora to exchange Ideas, forge lasting friendships and develop networking opportunities for personal and professional advancement.
            </Modal>
         
      </header>
    );
  }
}

export default Header;
