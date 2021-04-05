import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import PredResultsScreen from '../screens/components/SubScreens/PredResultsScreen';
import SearchResultsScreen from '../screens/components/SubScreens/SearchResultsScreen';
import help from '../screens/help';
import accountSetting from '../screens/accountSetting';
import about from '../screens/about';
import searchbar from '../screens/searchbar';
import SettingsScreen from '../screens/SettingScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Screen name="PredResults" component={PredResultsScreen} options={{ title: 'Predicted Results' }} />
      <Stack.Screen name="SearchResults" component={SearchResultsScreen} options={{ title: 'Search Results' }} />
      <Stack.Screen name="Setting" component={SettingsScreen} options={{title:'setting'}}/>
      <Stack.Screen name="help" component={help} options={{title:'help'}}/>
      <Stack.Screen name="about" component={about} options={{title:'about'}}/>
      <Stack.Screen name="searchbar" component={searchbar} options={{title:'searchbar'}}/>
      <Stack.Screen name="accountSetting" component={accountSetting} options={{title:'accountSetting'}}/>
    </Stack.Navigator>
  );
}
