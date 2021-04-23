import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import PredResultsScreen from '../screens/components/SubScreens/PredResultsScreen';
import SearchResultsScreen from '../screens/components/SubScreens/SearchResultsScreen';
import SearchByIngredientsResultsScreen from '../screens/components/SubScreens/SearchByIngredientsResultsScreen';
import help from '../screens/help';
import accountSetting from '../screens/accountSetting';
import about from '../screens/about';
import register from '../screens/register';
import login from '../screens/login';
import DishInfo from '../screens/DishInfo'
import searchbar from '../screens/searchbar';
import searchbar2 from '../screens/searchbar2';
import IngredientsListSearch from '../screens/IngredientsListSearch';
import SettingsScreen from '../screens/SettingScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import TabOneScreen from '../screens/TabOneScreen';
import First_page from '../screens/First_page';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Open" component={First_page} options={{title:'Open'}}/>
      <Stack.Screen name="DishInfo" component={DishInfo} options={{title:'Dish information'}}/>
      <Stack.Screen name="register" component={register} options={{title:'register'}}/>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="IngredientsListSearch" component={IngredientsListSearch} options={{ title: 'Ingredients List search' }} />
      <Stack.Screen name="SearchByIngredientsResultsScreen" component={SearchByIngredientsResultsScreen} options={{ title: 'Search by ingredients results' }} />
      <Stack.Screen name="PredResults" component={PredResultsScreen} options={{ title: 'Predicted Results' }} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} options={{ title: 'Search Results' }} />
      <Stack.Screen name="Setting" component={SettingsScreen} options={{title:'setting'}}/>
      <Stack.Screen name="help" component={help} options={{title:'help'}}/>
      <Stack.Screen name="about" component={about} options={{title:'about'}}/>
      <Stack.Screen name="searchbar" component={searchbar} options={{title:'searchbar'}}/>
      <Stack.Screen name="searchbar2" component={searchbar2} options={{title:'searchbar2'}}/>
      <Stack.Screen name="accountSetting" component={accountSetting} options={{title:'accountSetting'}}/>
      <Stack.Screen name="login" component={login} options={{title:'login'}}/>
      <Stack.Screen name="one" component={TabOneScreen} options={{title:'one'}}/>
    </Stack.Navigator>
  );
}
