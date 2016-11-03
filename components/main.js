import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import {connect} from 'react-redux';
import {updateUser} from './../actions';

class Main extends Component {
  constructor(props){
    super(props);
    console.log("user",props.user);
    this.state={
      name:props.user.user.displayName
    }
  }
  save(){
    if(!this.state.name) return;
    this.props.updateUser({displayName:this.state.name});
  }
  render() {
    return (
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
  }
});

function mapStateToProps(state){
  return {user:state.user};
}

module.exports = connect(mapStateToProps,{updateUser})(Main);
