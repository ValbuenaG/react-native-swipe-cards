import React , {Component} from 'react'
import {View, StyleSheet, Dimensions} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

class CardsContainer extends Component{
  renderCards(){
    return this.props.data.map((item, index) =>(
      <View 
        key={item.id}
        style={styles.cardStyle}
      >
          {this.props.renderCard(item)}
      </View>
    )).reverse()
  }

  render(){
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardStyle: {
     position: 'absolute',
     width: SCREEN_WIDTH
  },
});
export default CardsContainer