import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {signup} from './../actions';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:""
    }
  }
  login(){
      this.props.navigator.push({
          id: 'Login'
        });
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.user.user){
      this.props.navigator.push({
          id: 'Main'
        });
    }
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.user.user) return false;
    return true;
  }
  signup(){
      this.props.signup(this.state.email,this.state.password)
      .catch(error => {
        this.setState({
          error
        })
      });
  }
  render() {
    return (
      <View style={styles.container}>
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.username}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        secureTextEntry={true}
        value={this.state.password}
      />
        <TouchableHighlight
            onPress={this.signup.bind(this)}>
          <Text style={{color: 'red'}}>Sign up</Text>
        </TouchableHighlight>
        <Text style={{color: 'red'}}>{this.state.error ? this.state.error.message : ''}</Text>
        <TouchableHighlight
            onPress={this.login.bind(this)}>
          <Text style={{color: 'red'}}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

function mapStateToProps(state){
  return {user:state.user}
}

module.exports = connect(mapStateToProps,{signup})(Signup);
