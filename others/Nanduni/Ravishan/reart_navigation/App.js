import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {SignIn, CreateAccount, Profile, Home, Search, Search2, Details, Splash, TextAndImageSearch, RecognizeDishByName, RecognizeDish, Favourite} from './Screens'

import { Login } from './src/Login';
const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={Home} />
    <SearchStack.Screen name="Details" component={Details} options={({route}) => ({
      title: route.params.name
    })} />
  </HomeStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="TextAndImageSearch" component={TextAndImageSearch} />
    <SearchStack.Screen name="TextSearch" component={RecognizeDishByName} />
    <SearchStack.Screen name="ImageSearch" component={RecognizeDish} />
  </SearchStack.Navigator>
)

const favouritesStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Favourite" component={Favourite} />
  </SearchStack.Navigator>
)

const accountStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={Search} />
    <SearchStack.Screen name="Search2" component={Search2} />
  </SearchStack.Navigator>
)

const ProfileStack = createStackNavigator()
const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
)

const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeStackScreen} />
    <Tabs.Screen name="Search" component={SearchStackScreen} />
    <Tabs.Screen name="Favourites" component={favouritesStackScreen} />
    <Tabs.Screen name="Account" component={accountStackScreen} />
  </Tabs.Navigator>
)

const Drawer = createDrawerNavigator();


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  React.useEffect(() => {
    setTimeout(() =>{
      setIsLoading(false)
    }, 3000) 
  }, [])

  if(isLoading){
    return <Splash />
  }
  return (
    <NavigationContainer>
      {userToken ?
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TabsScreen} />
          <Drawer.Screen name="Search" component={SearchStackScreen} />
        </Drawer.Navigator>
      :
        <AuthStack.Navigator>
          <AuthStack.Screen name="SignIn" component={SignIn} options={{ title: "Sign In" }} />
          <AuthStack.Screen name="CreateAccount" component={CreateAccount} options={{ title: "Create Account" }} />
        </AuthStack.Navigator>
      }
    </NavigationContainer>
  );
}

