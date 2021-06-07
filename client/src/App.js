import React from 'react';
import Home from './components/layout/Home'
import { Provider } from 'react-redux'
import store from  './stores'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider store={ store.createStore() }>
          <Home></Home>
        </Provider>
      </div>
    );
  }
}

export default App;
