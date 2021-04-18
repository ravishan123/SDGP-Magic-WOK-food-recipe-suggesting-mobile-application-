
import React, { Component } from 'react'
import { Animated, View, StyleSheet, Image, Dimensions, ScrollView , Text,SafeAreaView} from 'react-native'
import { Card,Button, Icon } from 'react-native-elements';
import HomeCard from '../screens/favorite/HomeCard';

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://st2.depositphotos.com/2576363/6461/i/600/depositphotos_64612467-stock-photo-ingredients-for-baking-on-black.jpg',
  'https://hintwallaper.com/wp-content/uploads/2020/11/Food-Background-HD-1024x654.jpg',
  
]

export default class extends Component {

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  render() {
    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          style={{ width: deviceWidth , height: '100%' }}
        />
        
      )
      
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

    return (
      <SafeAreaView>
          <View style={styles.container} >
             

          
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEventThrottle={10}
              pagingEnabled
              onScroll={
                Animated.event(
                  [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
                )
              }
            >

              {imageArray}
              
              <View style={styles.skip}>
                    <Text style={{color:"yellow",textAlign:"center",fontSize:16}}>Search{"\n"} recipes by{"\n"}ingredients</Text>
              </View>

            </ScrollView>

            <View
              style={styles.skip1}>
                    <Text style={{color:"yellow",textAlign:"center",fontSize:16}}>Search{"\n"} recipes by{"\n"}dish</Text>
              </View>

            <View
              style={styles.barContainer}
            >
              {barArray}
            </View>
          </View>


          <View style ={styles.container1}>
            <ScrollView>
                
                <Text style={styles.innerText}>  Italian</Text>


                {/* -------------------------------------------------------------------------------------------------------------------------------- */}
                <ScrollView horizontal={true}>


                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />

                </ScrollView>

                {/* ------------------------------------------------------------ */}

                <Text style={styles.innerText}>  Italian</Text>


                <ScrollView horizontal={true}>
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                </ScrollView>

                {/* ---------------------------------------------------------------------------------------------------------------------------------------- */}

                <Text style={styles.innerText}>  Italian</Text>


                <ScrollView horizontal={true}>
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                </ScrollView>

                {/* -------------------------------------------------------------------------------------------------------         */}

                <Text style={styles.innerText}>  Italian</Text>


                <ScrollView horizontal={true}>
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                </ScrollView>

                {/* ------------------------------------------------------------ */}
                <Text style={styles.innerText}>  Italian</Text>

                <ScrollView horizontal={true}>
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                  <HomeCard />
                </ScrollView>

              </ScrollView>
            
          </View>
         

      </SafeAreaView>
         
    )
  }
}



const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50%',
    // marginTop: '30%',
    marginBottom: '-65%',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: '25%',
    flexDirection: 'row',
  },



    skip: {
    position: 'absolute',
    //zIndex: 1,
    bottom: '60%',
    flexDirection: 'row',

  },

  skip1: {
    // position: 'absolute',
    //zIndex:0,
    bottom: '60%',
    flexDirection: 'row',

  },



  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    //backgroundColor: '#00FFFF',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },








  innerText: {
    color: '#C70039',
    fontWeight: 'bold',
    fontSize: 20,

  },

  container1: {
    // flex: 1,
    // alignItems:'flex-start',
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'column',  
    marginTop: '40%',
    marginBottom: '30%',
  },


  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',  
  },


  backgroundImage: {
    flex: 1,
    width: '100%',
    height: 200,
},

bgtext:{
  fontSize:20,
  color: 'white',
  
},

btnText:{
  fontSize: 15,
  color: 'black',
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: 'white',

  paddingBottom: 2,
  paddingTop: 2,
}
  
})