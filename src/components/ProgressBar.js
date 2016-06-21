const React = require('react')

var {
  View
} = React

const ProgressBar = React.createClass({

  propTypes: {
    progress: React.PropTypes.number,
    style: React.PropTypes.object
  },

  render () {
    const {progress, style} = this.props

    const progressStyles = {
      backgroundColor: '#E66000',
      flex: progress,
      borderRadius: 5
    }

    const remainingStyles = {
      backgroundColor: 'transparent',
      flex: 1 - progress
    }

    return (
      <View style={{...styles.bar, ...style}}>
        <View style={progressStyles} />
        <View style={remainingStyles} />
      </View>
    )
  }
})

var styles = {
  bar: {
    backgroundColor: '#d1d2d3',
    flexAlign: 'stretch',
    flexDirection: 'row',
    height: 10,
    borderRadius: 5
  }
}

module.exports = ProgressBar
