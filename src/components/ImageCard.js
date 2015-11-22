import React from 'react-native'

import SIZES from '../styles/sizes.js'

const {Image, Text, View, TouchableOpacity} = React

const ImageCard = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    imageUrl: React.PropTypes.string.isRequired,
    onPress: React.PropTypes.func
  },

  render () {
    const {title, subtitle, imageUrl} = this.props

    return (
    <TouchableOpacity onPress={this.props.onPress}>
      <Image source={{
        uri: imageUrl
      }} style={styles.container}>
        <View style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#000',
          opacity: 0.5
        }}><Text>sadasdfasdf</Text></View>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
        <Text style={{...styles.subtitle, ...styles.title}}>
          {title}
        </Text>
      </Image>
    </TouchableOpacity>
    )
  }
})

const styles = {
  container: {
    height: 200,
    padding: SIZES.BASE_PADDING
  },
  subtitle: {
    backgroundColor: 'transparent',
    color: '#fff'
  },
  title: {
    marginTop: 2,
    fontSize: 20,
    fontWeight: '600'
  }
}

module.exports = ImageCard
