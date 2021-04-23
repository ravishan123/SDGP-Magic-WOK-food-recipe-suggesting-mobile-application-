import * as React from 'react';
import { StyleSheet, ScrollView, SafeAreaView,FlatList, AsyncStorage } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../types';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import FavCard from './favorite/FavCard';
import SyncStorage from 'sync-storage';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function TabThreeScreen({navigation,}: StackScreenProps<RootStackParamList, 'searchbar'>) {
  const [favouritesList, setFavouritesList] = React.useState([])

  React.useEffect(() => {
    loadData()
  }, []);

  const loadData = async () => {
    var favourites = await AsyncStorage.getItem('favourites')
    setFavouritesList(JSON.parse(favourites))
    console.log(`favourites`, favourites)
    console.log(`favourites`, favouritesList)
  }
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <View style={{flexDirection: 'column'}}>

        <View style={{flexDirection: 'column'}}>
          {!!favouritesList && favouritesList.map((item, key) => {
            return(
              <FavCard navigation={navigation} item={item}/>
            )
          })}

        </View>        
      </View>
    </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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