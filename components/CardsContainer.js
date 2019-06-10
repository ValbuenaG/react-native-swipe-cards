import React , {Component} from 'react'
import {
  View, 
  StyleSheet, 
  Dimensions,
  Animated,
  PanResponder
} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width

class CardsContainer extends Component{
  constructor(props){
    super(props)
    const position = new Animated.ValueXY()
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {}
    })

    this.state = {
      panResponder,
      position,
      index: 0
    }
  }
  renderCards(){
    return this.props.data.map((item, index) =>{
      if(index === this.state.index){
        return (
          <Animated.View 
            key={item.id}
            style={[styles.cardStyle, this.state.position.getLayout()]}
            {...this.state.panResponder.panHandlers}
          >
              {this.props.renderCard(item)}
          </Animated.View>
        )
      }
      return(
        <Animated.View
          style={styles.cardStyle}
          key={item.id}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      )
    }).reverse()
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