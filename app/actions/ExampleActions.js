import alt from '../libs/alt';

export default alt.generateActions('action1', 'action2', 'action3');

/**
 * Or you can be more verbose
 * 
 * Class ExampleActions {
 *  action1({param1, param2}){
 *    this.dispatch({param1, params2}); 
 *  }
 *
 *  action2({param1, param2}){
 *    this.dispatch({param1, params2}); 
 *  }
 *
 *  action1(param1){
 *    this.dispatch(param1); 
 *  }
 *
 * }
 */
