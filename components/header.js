import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

module.exports = function(){
    return(
        <View style={styles.toolbar}>
            <Text style={styles.toolbarButton}>Add</Text>
            <Text style={styles.toolbarTitle}>Calendar</Text>
            <Text style={styles.toolbarButton}>Like</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  toolbar:{
        backgroundColor:'#81c04d',
        paddingTop:30,
        paddingBottom:10,
        flexDirection:'row'    //Step 1
    },
    toolbarButton:{
        width: 50,            //Step 2
        color:'#fff',
        textAlign:'center'
    },
    toolbarTitle:{
        color:'#fff',
        textAlign:'center',
        fontWeight:'bold',
        flex:1                //Step 3
    }
});