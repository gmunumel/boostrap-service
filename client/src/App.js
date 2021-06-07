import React from 'react';
import Home from './components/layout/Home'
import { Provider } from 'react-redux'
import store from  './stores'

class App extends React.Component {
  render() {
    return (
      <Provider store={ store.createStore() }>
        <div className="App">
            <Home></Home>
        </div>
      </Provider>
    );
  }
}

export default App;
