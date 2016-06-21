const ReactNative = require('react-native')
const React = require('react')
const {Component, View, Text, StyleSheet, TouchableOpacity} = ReactNative
const _ = require('lodash')

import Icon from 'react-native-vector-icons/Foundation';

const SIZES = require('../styles/sizes.js')
const COLORS = require('../styles/colors.js')

const NavigationBar = React.createClass({
  propTypes: {
    content: React.PropTypes.object,
    active: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired
  },

  render () {
    const active = '' + this.props.active
    const {content, onChange} = this.props

    return (
      <View style={styles.container}>
        {_.map(content, (child, childKey) => {
          const currentChildContentStyles = ('' + active === '' + childKey) ? _.assign({}, styles.childContent, styles.childContentActive) : styles.childContent
          return <TouchableOpacity key={childKey} style={styles.child} onPress={onChange.bind(null, childKey)}>
            <Icon
              name={child.icon || 'x'}
              size={25}
              color="#000"
              style={_.assign({}, currentChildContentStyles, styles.iconStyles)}/>
            <Text style={currentChildContentStyles}>
              {child.title}
            </Text>
          </TouchableOpacity>
        })}
      </View>
    )
  }
})

const styles = {
  container: {
    backgroundColor: '#fff',
    height: 64,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    flexDirection: 'row'
  },
  child: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  childContent: {
    color: '#000'
  },
  childContentActive: {
    color: '#2980B9',
    fontWeight: '700'
  },
  iconStyles: {
    marginTop: 2,
    marginBottom: 0
  }
}

module.exports = NavigationBar
