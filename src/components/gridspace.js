import React, { Component } from 'react'

class GridSpace extends Component {
  constructor (props) {
    super(props)
    this.state = {
      background: 'white',
      highlighted: false
    }
  }

  handleClick () {
    if (this.props.highlighted) {
      document.getElementById(this.props.id).style.background = 'black'
    }
  }

  render () {
    return (
      <td id={this.props.id} onClick={this.handleClick.bind(this)} />
    )
  }
}

export default GridSpace
