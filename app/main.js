import './assets/css/styles.scss';
import React from 'react';
import App from './components/App';
import alt from './libs/alt'

main();

function main(){
  const app = document.createElement('div');
  document.body.appendChild(app);

  React.render(<App />, app);
}
