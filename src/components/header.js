import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-left">
          <img src="images/sankofab.png" className="goimg" alt="logo" />
        </div>
  
        <div className="header-center">
          <ul>
            <li>
        
              <a href="fb.coom">
                <i className="fa fa-facebook fa-2x" aria-hidden="true" />
              </a>
            </li>
            <li>
              
              <a href="fb.coom">
                <i className="fa fa-twitter fa-2x" aria-hidden="true" />
              </a>
            </li>
            <li>
              
              <a href="fb.coom">
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
          >
            About Us
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
