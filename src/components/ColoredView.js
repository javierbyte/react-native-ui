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
    children: React.PropTypes.element,

    leftComponent: React.PropTypes.element
  },

  componentWillMount () {
    StatusBarIOS.setStyle('light-content')
  },

  render () {
    const {title, color, children, leftComponent} = this.props

    const stylesContainer = _.merge({}, styles.container, {
      backgroundColor: '#f1f2f3'
    })

    const stylesTitleContainer = _.merge({}, styles.titleContainer, {
      backgroundColor: tinycolor(color).lighten(3).toString(),
      padding: 15
    })

    return (
      <View style={stylesContainer}>
        <View style={stylesTitleContainer}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.leftButton}>
            {leftComponent}
          </View>
        </View>

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
  titleContainer: {
    padding: SIZES.BASE_PADDING,
    paddingTop: SIZES.BASE_PADDING * 2
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: 'transparent'
  },
  leftButton: {
    padding: SIZES.BASE_PADDING,
    position: 'absolute',
    top: SIZES.BASE_PADDING + 4,
    left: 0
  },
  content: {
    flex: 1
  }
}

module.exports = ColoredView
