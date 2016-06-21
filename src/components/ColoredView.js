const React = require('react')
const ReactNative = require('react-native')
const _ = require('lodash')
const tinycolor = require('tinycolor2')

const SIZES = require('../styles/sizes.js')

var {
  Text,
  View,
  StatusBar,
  ScrollView
} = ReactNative

const ColoredView = React.createClass({

  propTypes: {
    title: React.PropTypes.any,
    color: React.PropTypes.string,
    children: React.PropTypes.any,

    customStyles: React.PropTypes.object,
    leftComponent: React.PropTypes.element,

    statusBarStyle: React.PropTypes.string
  },

  componentWillMount () {
    var statusBarStyle = this.props.statusBarStyle || 'light-content'
    StatusBar.setBarStyle(statusBarStyle)
  },

  render () {
    const {title, color, children, leftComponent, customStyles} = this.props

    const stylesContainer = _.merge({}, styles.container, {
      backgroundColor: '#f1f2f3'
    }, _.get(customStyles, 'container'))

    const stylesTitleContainer = _.merge({}, styles.titleContainer, {
      backgroundColor: tinycolor(color).lighten(3).toString(),
      padding: 15
    })

    return (
      <View style={stylesContainer}>
        <View style={stylesTitleContainer}>
          {typeof title === 'string' ? <Text style={_.merge({}, styles.title, _.get(customStyles, 'title'))}>{title}</Text> : <View>{title}</View>}

          <View style={styles.leftButton}>
            {leftComponent}
          </View>
        </View>

        <View contentContainerStyle={styles.container} style={styles.content}>
          {children}
        </View>
      </View>
    )
  }
})

var styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#fff'
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
