import React,{PureComponent} from 'react';
import { SafeAreaView, StyleSheet,TouchableOpacity,Image,LayoutAnimation} from 'react-native';
import { Text, View } from '../../components/Themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


export default class FavCard extends PureComponent{

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        image: '',
        favorite: false
    };
}

componentWillMount() {
  const { title, image, favorite } = this.props;
  this.setState({ title, image, favorite });
}

componentWillUpdate() {
  LayoutAnimation.easeInEaseOut();
}

render() {
  const { title, image, favorite } = this.state;

  function favBtn(){
  
  }

  return (
    <SafeAreaView>
      <View>
        <Card style={styles.card}>
        <Card.Cover source={require('../../components/Images/burger.png')} style={styles.cardImg}/>
        <Card.Content>
            <Title>Chicken Burger</Title>
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

