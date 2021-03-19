import {Container,Header,Icon,Input,Item,Text,View} from 'native-base';
import React,{ constructor } from 'react';
import { StyleSheet, Image, TouchableHighlight ,Modal,Alert, ScrollView} from 'react-native';

export default class PredResult extends React.Component{
    state = {
        predictedValues: '',
        modalVisible: false,
    }

    componentWillReceiveProps(props){
        console.log("props ", props)
        this.setState({ modalVisible: props.visible, predictedValues:props.predictedValues});
    }

    componentDidMount(props){
        console.log("props 2 ", props)
    }

    render(){
    return (
      <View style={styles.centeredView}>
        <Modal
          presentationStyle="fullScreen"
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          {/* <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
  
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#2196F3' }}
                onPress={() => {
                  this.setState({modalVisible:!this.state.modalVisible});
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View> */}
          <View style={styles.container}>
            <ScrollView>
              {/* {this.state.predictedValues.map(item) => } */}
              <View style={styles.centeredView}>
                <Image source={{uri: this.state.predictedValues.image}} style={styles.image} />
              </View>
              <Text style={styles.modalText}>
                {this.state.predictedValues.recipe_name}
              </Text>
              <Text style={styles.paragraph}>
                {this.state.predictedValues.cooking_method}
              </Text>
              {/* <Text style={styles.paragraph}>
                AYYO
              </Text> */}
              {console.log("kkkkkkkkkkk", this.state.predictedValues)}
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: '#000000' }}
                onPress={() => {
                  this.setState({modalVisible:!this.state.modalVisible});
                }}>
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </ScrollView>
          </View>
        </Modal>
  
        {/* <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setState({modalVisible:true});
          }}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </TouchableHighlight> */}
      </View>
    );
    }
  }

  const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    headerContainer:{
      flexDirection:'column',
      backgroundColor:'rgb(255, 204, 0)',
      flex:0.2
    },
    header:{
      backgroundColor:'rgb(255, 204, 0)',
      borderColor:'black',
      borderWidth:3,
      width:'99%',
  
    },
    image:{
      width: 200,
      height: 200,
    },
    cameraIcon:{
      alignSelf:'center',
    },
    button:{
      height:60,
      backgroundColor:'red',
      justifyContent:'center',
      alignItems:'center',
      marginTop:10,
      width:'98%',
      marginLeft:'1%'
    },
  
    //modal styles
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    openButton: {
      backgroundColor: '#F194FF',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginBottom: 30,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize: 30,
      fontWeight: "500",
    },
  });