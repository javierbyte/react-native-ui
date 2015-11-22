import React from 'react-native'
import _ from 'lodash'
import tinycolor from 'tinycolor2'

import SIZES from '../styles/sizes.js'

var {
  Text,
  View,
  StatusBarIOS,
  ScrollView
} = React

const ColoredView = React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    color: React.PropTypes.string,
    children: React.PropTypes.element
  },

  componentWillMount () {
    StatusBarIOS.setStyle('light-content')
  },

  render () {
    const {title, color, children} = this.props

    const isLight = tinycolor(color).getBrightness() > 128

    const stylesContainer = _.merge({}, styles.container, {
      backgroundColor: color
    })

    const stylesTitle = _.merge({}, styles.title, {
      backgroundColor: isLight ? tinycolor(color).darken(5).toString() : tinycolor(color).lighten(5).toString(),
      color: isLight ? '#000' : '#fff'
    })

    return (
      <View style={stylesContainer}>
        <Text style={stylesTitle}>
          {title}
        </Text>

        <ScrollView style={styles.content}>
          {children}
        </ScrollView>
      </View>
    )
  }
})

var styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#2980B9'
  },
  title: {
    padding: SIZES.BASE_PADDING,
    paddingTop: SIZES.BASE_PADDING * 2,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    backgroundColor: '#4599d0'
  },
  content: {
    flex: 1,
    padding: SIZES.BASE_PADDING
  }
}

module.exports = ColoredView
