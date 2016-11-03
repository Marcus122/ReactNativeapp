import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {login} from './../actions';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"marcus.atty@gmail.com",
      password:"Mission2048",
      error:null
    }
    this.login();
  }
  login(){
      this.props.login(this.state.email,this.state.password)
      .then(()=>{
        this.props.navigator.push({
          id: 'Main'
        });
      })
      .catch(error => {
        this.setState({
          error
        })
      });
  }
  componentWillReceiveProps(nextProps){
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.user.user) return false;
    return true;
  }
  signup(){
    this.props.navigator.push({
          id: 'Signup'
        });
  }
  render() {
    return (
      <View style={styles.container}>
       <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
      />
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(password) => this.setState({password})}
        secureTextEntry={true}
        value={this.state.password}
      />
        <TouchableHighlight
            onPress={this.login.bind(this)}>
          <Text style={{color: 'red'}}>Login</Text>
        </TouchableHighlight>
        <Text style={{color: 'red'}}>{this.state.error ? this.state.error.message : ''}</Text>
        <TouchableHighlight
            onPress={this.signup.bind(this)}>
          <Text style={{color: 'red'}}>Sign up</Text>
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
    padding:10
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

module.exports = connect(mapStateToProps,{login})(Login);
