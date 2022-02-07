import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: 'Bibeka' 
    };
    console.log('LifecycleA constructor');
  }
  static getDerivedStateFromProps(props, state){
      console.log('LifecycleA getDerivedStateFromProps');
      return null
  }
  componentDidMount(){
      console.log('LifecycleA componentDidMount');
  }
  shouldComponentUpdate(){
    console.log('LifecycleA shouldComponentUpdate');
    return(true)
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleA getSnapshotBeforeUpdate ');
    return null;
  }
  componentDidUpdate(){
    console.log('LifecycelA componentDidUpdate');
  }
changeState= () =>{
  this.setState({
    name: 'codevolution'
  })
}
  render() {
      console.log('Render');
    return (
      <>
        <h1>hellooooo</h1>
        <LifecycleB />  
        <button onClick={this.changeState}>Change State</button>
      </>
    );
  }
}

export default LifecycleA;
