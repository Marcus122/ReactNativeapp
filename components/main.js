import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Calendar from './calendar';
import Header from './header';
import {connect} from 'react-redux';
import {updateUser} from './../actions';

class Main extends Component {
  constructor(props){
    super(props);
    console.log("user",props.user);
    var date = new Date();
    this.state={
      name:props.user.user.displayName,
      month:date.getMonth() + 1,
      year:date.getFullYear()
    }
  }
  save(){
    if(!this.state.name) return;
    this.props.updateUser({displayName:this.state.name});
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header/>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            This is the main screen 
          </Text>
          <Text style={styles.welcome}>
            What is your name?
          </Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
          <TouchableHighlight
              onPress={this.save.bind(this)}>
            <Text style={{color: 'blue'}}>Next</Text>
          </TouchableHighlight>
          <Calendar month={this.state.month} year={this.state.year} name="Nov"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer:{
      flex:1                  //Step 1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding:10
  }
});

function mapStateToProps(state){
  return {user:state.user};
}

module.exports = connect(mapStateToProps,{updateUser})(Main);
