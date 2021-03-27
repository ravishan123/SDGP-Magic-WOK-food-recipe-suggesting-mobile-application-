import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView,FlatList } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import FavCard from './favorite/FavCard';

export default function FavoriteScreen() {
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
});
