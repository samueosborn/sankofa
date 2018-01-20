import React from "react";

class Form extends React.Component {
  render() {
    return (
      <button
        className="button button-primary get-help bt"
        placeholder="Add Me"
        //disabled={!this.state.email}
        type="submit"
      > </button>
    );
  }
}

export default Form;
