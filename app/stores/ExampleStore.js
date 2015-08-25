import alt from '../libs/alt';
import ExampleActions from '../actions/ExampleActions';

class ExampleStore {
  constructor(){
    this.bindActions(ExampleActions);

    // initiate State
    this.widgets = [];
  }

  action1(paramObject){
    const widges = this.widgets;

    this.setState({
      widgets: widgets.concat(paramsObject)
    });
  }

  // ... add other action implementations
}

export default alt.createStore(ExampleStore, 'ExampleStore');
