import React, { Component } from 'react';
import {
  Navigator
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import Main from './components/main';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <Navigator
            initialRoute={{id: 'Login'}}
            renderScene={this.renderScene.bind(this)}
            configureScene={(route) => {
                if (route.sceneConfig) {
                return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
            }} />
        </Provider>
        )
  }
  renderScene(route,navigator){
    var routeId = route.id;
    if(routeId === 'Login'){
      return (
        <Login navigator={navigator}/>
      )
    }
    if(routeId === 'Home'){
      return (
        <Home navigator={navigator}/>
      )
    }
    if(routeId === 'Signup'){
      return (
        <Signup navigator={navigator}/>
      )
    }
    if(routeId === 'Main'){
      return (
        <Main navigator={navigator}/>
      )
    }
  }
}

module.exports = App;