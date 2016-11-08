import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Dimensions
} from 'react-native';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
        days:[]
    }
    this.generateDays();
  }
  generateDays(){
      var days=[];
      var startDate = new Date();
      startDate.setFullYear(Number(this.props.year));
      startDate.setDate(1);
      startDate.setMonth(Number(this.props.month)-1);
      while(startDate.getDay() != 1){
          startDate.setDate(startDate.getDate() - 1);
      }
      while(startDate.getMonth() < Number(this.props.month)){
          var date = new Date(startDate.getTime());
          days.push(date);
          startDate.setDate(startDate.getDate() + 1);
      }
      while(startDate.getDay() != 0){
          var date = new Date(startDate.getTime());
          days.push(date);
          startDate.setDate(startDate.getDate() + 1);
      }
      this.state.days=days;
  }
  renderDays(){
      return this.state.days.map(day => {
          var key = String(day.getDate()) + String(day.getMonth());
          return (
              <TouchableHighlight key={key} style={styles.day}>
                 <Text>{day.getDate()}</Text>
             </TouchableHighlight>
          )
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'blue'}}>{this.props.name}</Text>
        <View  style={styles.days}>
           {this.renderDays()}
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  days:{
      flex: 1,
      flexDirection: 'row',
      flexWrap:'wrap'
  },
  day:{
      width:50,
      height:50,
      alignSelf:'center',
      borderColor: 'gray', 
      borderWidth: 1
  }
});

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

module.exports = Calendar;
