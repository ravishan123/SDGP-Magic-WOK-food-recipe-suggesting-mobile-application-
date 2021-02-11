import React from 'react'
import { Button, Text } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const Home = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Home screen</Text>
            <Button title="React Native by Example" onPress={() => navigation.push("Details", {name: "React Native By Example"})} />
            <Button title="React Native School" onPress={() => navigation.push("Details", {name: "React Native School"})} />
            <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
        </ScreenContainer>
    )
}

export const Details = ({route}) => {
    return(
        <ScreenContainer>
            <Text>Details screen</Text>
            {route.params.name && <Text>{route.params.name}</Text>}
        </ScreenContainer>
    )
}

export const Profile = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Profile screen</Text>
            <Button title="Drawer" onPress={() => navigation.toggleDrawer()} />
        </ScreenContainer>
    )
}

export const Search = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Search screen</Text>
            <Button title="Search 2" onPress={() => navigation.push("Search2")} />
            <Button title="React Native Schools" onPress={() => {navigation.navigate('Home', {
                screen: 'Details', 
                params: {
                    name: 'React Native School'
                }
            })}} />
        </ScreenContainer>
    )
}

export const Search2 = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Search 2 screen</Text>
        </ScreenContainer>
    )
}

export const TextSearch = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Text Search screen</Text>
        </ScreenContainer>
    )
}

export const TextAndImageSearch = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Text and Image Search screen</Text>
            <Button title="Text Search" onPress={() => navigation.push("TextSearch", {name: "Search a dish"})} />
            <Button title="Image Search" onPress={() => navigation.push("ImageSearch", {name: "Recognize a dish"})} />
        </ScreenContainer>
    )
}


export const RecognizeDish = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Dish Recognize screen</Text>
        </ScreenContainer>
    )
}

export const RecognizeDishByName = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Dish Recognize screen</Text>
        </ScreenContainer>
    )
}

export const Favourite = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Favourites screen</Text>
        </ScreenContainer>
    )
}


export const SignIn = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Sign in screen</Text>
            <Button title="sign in" onPress={() => alert("TODO!")} />
            <Button title="create account" onPress={() => navigation.push("CreateAccount")} />
        </ScreenContainer>
    )
}


export const CreateAccount = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Create account screen</Text>
            <Button title="sign up" onPress={() => alert("TODO!")} />
        </ScreenContainer>
    )
}


export const Splash = ({navigation}) => {
    return(
        <ScreenContainer>
            <Text>Loading.....</Text>
        </ScreenContainer>
    )
}

