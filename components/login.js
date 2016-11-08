import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions
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
       <TextInput style={styles.input}
        onChangeText={(email) => this.setState({email})}
        value={this.state.email}
      />
      <TextInput style={styles.input}
        onChangeText={(password) => this.setState({password})}
        secureTextEntry={true}
        value={this.state.password}
      />
      <Text style={{color: 'red'}}>{this.state.error ? this.state.error.message : ''}</Text>
        <TouchableHighlight
            onPress={this.login.bind(this)}>
          <Text style={styles.login}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.signup.bind(this)}>
          <Text style={styles.signup}>Sign up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
var windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  login:{
    backgroundColor:'#81c04d',
    padding:10,
    color:'#fff',
    alignSelf: 'stretch',
    width:windowWidth - 20,
    textAlign:'center'
  },
  signup:{
    color:'#81c04d',
    padding:10,
    backgroundColor:'#fff',
    borderWidth:1,
    borderColor:'#81c04d',
    width:windowWidth - 20,
    textAlign:'center'
  },
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
  input:{
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1
  }
});

function mapStateToProps(state){
  return {user:state.user}
}

module.exports = connect(mapStateToProps,{login})(Login);
