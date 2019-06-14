import React,{ Component } from "react";

export class extern extends Component {
  constructor(props) {
    super(props);
    console.log('External Constructor');

    this.val = 15;
  }

  render() {
    return (
      <div>
        External Element.
      </div>
    );
  }


}