import * as React from 'react';
import { ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { RootStackParamList } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { AntDesign } from '@expo/vector-icons';
import { StackScreenProps } from '@react-navigation/stack';

export default function TabTwoScreen({navigation,}: StackScreenProps<RootStackParamList, 'searchbar', 'searchbar2'>) {

  const image = { uri: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?size=626&ext=jpg" };
  const image2 = { uri: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514.jpg" };

  return (
    <View style={styles.container2}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.container4}>
          <TouchableOpacity style={styles.button1}  onPress={()=> navigation.navigate('searchbar')}>
            <AntDesign name="rightcircleo" size={60} color="white" />
          </TouchableOpacity>
          <View style={styles.container}>
            <Text style={styles.text1}>search{'\n'} by {'\n'}dish{'\n'}</Text>
          </View>

        </View>
      </ImageBackground>

      <View style={styles.separator} />

      <ImageBackground source={image2} style={styles.image2}>
        <View style={styles.container3}>
          <Text style={styles.text2}>search {'\n'}by {'\n'}ingrdients</Text>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('searchbar2')} >
            <AntDesign name="rightcircleo" size={40} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>

  );
}

const styles = StyleSheet.create({
  container3: {
    alignSelf: 'flex-end',
    width: '50%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0)',
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(0,0,0,1)',
  },
  container2: {
    flex: 1,
    flexDirection: "column"
  },
  container4: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
  },
  image2: {
    flex: 1,
    resizeMode: 'cover',
  },
  text1: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 60,
    marginBottom: '40%',
    marginRight: '5%',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: 'white',
    borderWidth: 2
  },
  text2: {
    paddingTop: 50,
    flex: 1,
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 70,
  },
  button: {
    zIndex: 0,
    alignItems: "center",
    backgroundColor: "transparent",
    bottom: 20,
    marginLeft: "30%",
    width: 40
  },
  button1: {
    alignItems: "center",
    justifyContent: 'flex-start',
    backgroundColor: "transparent",
    marginLeft: "15%",
    marginTop: '40%',
    width: 60,
    height: 60
  },
  container: {
    justifyContent: 'flex-end',
    marginLeft: '33%',
    width: '35%',
    backgroundColor: 'transparent',
  },
});
