import React from 'react';
import ExampleActions from '../actions/ExampleActions';
import ExampleStore from '../stores/ExampleStore';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.storeChanged = this.storeChanged.bind(this);
    this.state = ExampleStore.getState();
  }

  componentDidMount(){
    ExampleStore.listen(this.storeChanged);
  }

  componentWillUnmount(){
    ExampleStore.unlisten(this.storeChanged);
  }

  storeChanged(state){
    this.setState(state);
  }

  render(){
    return(
      <div>
        Yeah!
      </div>
    );
  }
}
