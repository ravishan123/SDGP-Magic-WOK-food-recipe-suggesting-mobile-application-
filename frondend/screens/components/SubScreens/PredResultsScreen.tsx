import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import axios from 'axios'
import { StyleSheet, Text, TouchableOpacity, View, ScrollView, TouchableHighlight, Image, ActivityIndicator } from 'react-native';

import { RootStackParamList } from '../../../types';

export default function PredResultsScreen({
  navigation, route
}: StackScreenProps<RootStackParamList, 'PredResults'>) {

  const [predictedValues, setPredictedValues] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Pred Results", route.params)
    setIsLoading(true)
    axios.post('http://10.0.2.2:8000/api/image_recognition', route.params, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }).then(res => {
      console.log('res -- ', res)
      setPredictedValues(res.data[0])
      setIsLoading(false)
    }).catch(err => {
      console.log(err)
      setIsLoading(false)
     })
  }, []);

  const Loading = () => (
      <View style={styles.centeredView}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
  )

  const Values = () => (
    <View style={styles.container}>
      <ScrollView>
        {/* {this.state.predictedValues.map(item) => } */}
        <View style={styles.centeredView}>
          <Image source={{uri: predictedValues.image}} style={styles.image} />
        </View>
        <Text style={styles.modalText}>
          {predictedValues.recipe_name}
        </Text>
        <Text style={styles.paragraph}>
          {predictedValues.cooking_method}
        </Text>
        <TouchableHighlight
          style={{ ...styles.openButton, backgroundColor: '#000000' }}
          onPress={() => navigation.navigate('Search')} >
          <Text style={styles.textStyle}>Go back</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  )

  return isLoading ?  <Loading /> : <Values /> 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  image:{
    width: 200,
    height: 200,
  },
});
