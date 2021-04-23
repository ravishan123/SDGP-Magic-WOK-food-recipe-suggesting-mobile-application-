// import React from 'react';
// import { Button, Image, TouchableOpacity, Alert } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import ActionButton from 'react-native-action-button';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { SafeAreaView, StyleSheet, View, Text, ScrollView } from 'react-native';
// // import { Rating } from 'react-native-ratings';
// import { Card } from 'react-native-elements';

// export default function FavCard() {

//   const onPress = () => Alert.alert("Removed");
//   const rating  = 4 ;

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.container}>
//         <Card containerStyle = {styles.card}>

//           <Image source={require('../../components/Images/burger.png')} style={{ width: 142, height: 82 }} /> 
//           <Text style={styles.paragraph}>
//             Chicken Burger       
//             </Text>
//           <TouchableOpacity onPress={onPress}>
//             <Text style = {styles.btnText}> Remove <Icon
//               style={styles.icon}
//               name="trash-outline"
//               color="#31C283"
//               size={10}
//            /></Text>
//           </TouchableOpacity>

//         </Card>
//       </View>
//     </SafeAreaView>

//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     //paddingTop: 5,
//     //backgroundColor: '#333333',
    
//   },
//   paragraph: {
//     margin: 14,
//     fontSize: 10,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#34495e',
//   },

//   btn:{
//     fontSize: 9,
//     fontWeight:'bold'
//   },

//   btnText:{
//     fontSize: 8,
//     color: '#ffffff',
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000',
//     borderRadius: 10,
//     borderWidth: 2,
//     paddingBottom: 2,
//     paddingTop: 2,
//   },

//   card:{
//     // backgroundColor: '#d3816f',
//     backgroundColor: '#ee9c8a',
//     borderRadius: 5,
//   },

//   icon:{
//     paddingLeft: 10,
//   },

//   rating:{
//     paddingLeft: 10
//   }

// });

import React,{PureComponent} from 'react';
import { SafeAreaView, StyleSheet,TouchableOpacity,Image,LayoutAnimation} from 'react-native';
import { Text, View } from '../../components/Themed';
// import navigation from '../../navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default class FavCard extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
      recipe_name: '',
        image: '',
        favorite: false
    };
}

componentWillMount() {
  const { recipe_name, image } = this.props.item;
  this.setState({ recipe_name, image });
}

componentWillUpdate() {
  LayoutAnimation.easeInEaseOut();
}

selectDish = (item) => {
  console.log('item ', item)
  this.props.navigation.navigate('DishInfo', item)
}

render() {
  const { recipe_name, image, favorite } = this.state;

  function favBtn(){
  
  }

  return (
    <SafeAreaView>
      <View>
      <TouchableOpacity onPress={() => this.selectDish(this.props.item)}>
        <Card style={styles.card}>
        {/* <Card.Cover source={require('../../components/Images/burger.png')} style={styles.cardImg}/> */}
        <Card.Cover source={{uri: image}} style={styles.cardImg}/>
        <Card.Content>
            <Title>{recipe_name}</Title>
        </Card.Content>
        <Card.Actions>
          {/* <Button>{favorite ? 'Remove from fav' : 'Add to fav'}</Button> */}
          <TouchableOpacity style={{marginLeft:100}}>
            <Icon
              name={favorite ? 'heart' : 'heart-o'}
              size={25}
              color={favorite ? '#F44336' : 'rgb(50, 50, 50)'}
              onPress={() => this.setState({ favorite: !favorite })}
            />
          </TouchableOpacity>
        </Card.Actions>       
        </Card>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: 5,
    //backgroundColor: '#333333',
    
  },
  
  card:{
    marginBottom:20,
    height:280,
    borderRadius:15,
    marginRight:30,
  },

  cardImg:{
    padding:15,
  },

});

