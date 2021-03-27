// import * as React from 'react';
// import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../components/EditScreenInfo';
// import { Text, View } from '../components/Themed';

// export default function TabThreeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab Three</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="/screens/TabThreeScreen.tsx" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });


import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Card } from 'react-native-elements';
// import FavCard from './favorite/FavCard';

export default function TabThreeScreen() {
  const FavCard = () => {
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Card containerStyle={styles.card}>

            <Image source={require('./components/Images/burger.png')} style={{ width: 142, height: 82 }} />
            <Text style={styles.paragraph}>
              Chicken Burger
            </Text>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.btnText}> Remove <Icon
                style={styles.icon}
                name="trash-outline"
                color="#31C283"
                size={10}
              /></Text>
            </TouchableOpacity>

          </Card>
        </View>
      </SafeAreaView>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{flexDirection: 'column'}}>

        <View style={{flexDirection: 'row'}}>
          <FavCard/>
          <FavCard/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <FavCard/>
          <FavCard/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <FavCard/>
          <FavCard/>
        </View>

        <View style={{flexDirection: 'row'}}>
          <FavCard/>
          <FavCard/>
        </View>
        
      </View>
    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'row',
    //flexWrap: 'wrap',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: 5,
    //backgroundColor: '#333333',
    
  },
  paragraph: {
    margin: 14,
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },

  btn:{
    fontSize: 9,
    fontWeight:'bold'
  },

  btnText:{
    fontSize: 8,
    color: '#ffffff',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    borderWidth: 2,
    paddingBottom: 2,
    paddingTop: 2,
  },

  card:{
    // backgroundColor: '#d3816f',
    backgroundColor: '#ee9c8a',
    borderRadius: 5,
  },

  icon:{
    paddingLeft: 10,
  },

  rating:{
    paddingLeft: 10
  }
});
