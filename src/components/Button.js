const ReactNative = require('react-native')
const React = require('react')
const {Component, View, Text, StyleSheet, TouchableOpacity} = ReactNative

const SIZES = require('../styles/sizes.js')
const COLORS = require('../styles/colors.js')

const Button = React.createClass({
  propTypes: {
    onPress: React.PropTypes.func,
    color: React.PropTypes.string,
    children: React.PropTypes.any
  },

  render () {
    const {color} = this.props

    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.container}>
        <View style={[styles.button, color && {backgroundColor: color}]}>
          <Text style={styles.buttonText}>
            {this.props.children}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
})

const styles = StyleSheet.create({
  container: {
  },
  button: {
    paddingLeft: SIZES.BASE_PADDING * 2,
    paddingRight: SIZES.BASE_PADDING * 2,
    height: SIZES.INPUT_HEIGHT,
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.BORDER_RADIUS
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

module.exports = Button
