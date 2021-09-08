import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends React.Component{

  constructor(){

    super();
    this.state = {

      text : "",
      displayText : ''

    }

  }

  render(){

    return(

      <View style = {styles.container}>

        <Header 
        
          backgroundColor = {"#02C5F6"}
          centerComponent = {{text : "Monkey Chunkey", style : {color : "black", fontSize : 20}}}
        
        />

        <TextInput style = {styles.inputBox}

          onChangeText = {(text)=>{

            this.setState({text : text})

          }}

          value = {this.state.text}

        />

        

        <TouchableOpacity 
        style = {styles.goButton}
        onPress = {()=>{

          this.setState({displayText : this.state.text})

        }}
        >

        <Text style = {styles.button}> Go </Text>

        </TouchableOpacity>

        <Text style = {styles.displayText}> {this.state.displayText} </Text>

      </View>

    );

  }

}

const styles = StyleSheet.create({

  container : {

    flex : 1,
    backgroundColor : "pink"

  },

  inputBox : {

    marginTop : 200,
    width : 80,
    alignSelf : 'center',
    height  :40,
    textAlign : 'center',
    borderWidth : 5,
    outline : 'none'

  },
  goButton : {

    width : 100,
    height : 50,
    margin : 50,
    alignSelf : 'center',
    backgroundColor : "yellow",
    padding : 10,
    borderRadius : 50

  },
  button : {

    fontSize : 20,
    fontWeight : 'bold',
    textAlign : 'center'

  },
  displayText : {

    alignSelf : 'center',
    fontSize : 15,
    fontWeight : 'bold'

  }

});