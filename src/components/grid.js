import React, { Component } from 'react'
// import GridSpace from './gridspace'

class Grid extends Component {
  constructor (props) {
    super(props)
    this.state = {
      highlighted: ['A2', 'A3', 'B4', 'B5', 'H1', 'E3']
    }
  }

  componentDidMount () {
    this.highlightAll()
  }

  componentDidUpdate () {
    this.resetGrid()
    this.highlightAll()
  }

  highlightAll () {
    let elements = this.state.highlighted
    for (var i = 0; i < elements.length; i++) {
      this.highlight(elements[i])
    }
  }

  resetGrid () {
    let elements = document.getElementsByClassName('gridspace')
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.background = 'white'
    }
  }

  highlight (id) {
    document.getElementById(id).style.background = 'black'
  }

  render () {
    return (
      <table>
        <tbody>
          <tr><td className='gridspace' id='A1' /><td className='gridspace' id='A2' />
            <td className='gridspace' id='A3' /><td className='gridspace' id='A4' />
            <td className='gridspace' id='A5' /><td className='gridspace' id='A6' />
            <td className='gridspace' id='A7' /><td className='gridspace' id='A8' />
          </tr>
          <tr>
            <td className='gridspace' id='B1' /><td className='gridspace' id='B2' />
            <td className='gridspace' id='B3' /><td className='gridspace' id='B4' />
            <td className='gridspace' id='B5' /><td className='gridspace' id='B6' />
            <td className='gridspace' id='B7' /><td className='gridspace' id='B8' />
          </tr>
          <tr>
            <td className='gridspace' id='C1' /><td className='gridspace' id='C2' />
            <td className='gridspace' id='C3' /><td className='gridspace' id='C4' />
            <td className='gridspace' id='C5' /><td className='gridspace' id='C6' />
            <td className='gridspace' id='C7' /><td className='gridspace' id='C8' />
          </tr>
          <tr>
            <td className='gridspace' id='D1' /><td className='gridspace' id='D2' />
            <td className='gridspace' id='D3' /><td className='gridspace' id='D4' />
            <td className='gridspace' id='D5' /><td className='gridspace' id='D6' />
            <td className='gridspace' id='D7' /><td className='gridspace' id='D8' />
          </tr>
          <tr>
            <td className='gridspace' id='E1' /><td className='gridspace' id='E2' />
            <td className='gridspace' id='E3' /><td className='gridspace' id='E4' />
            <td className='gridspace' id='E5' /><td className='gridspace' id='E6' />
            <td className='gridspace' id='E7' /><td className='gridspace' id='E8' />
          </tr>
          <tr>
            <td className='gridspace' id='F1' /><td className='gridspace' id='F2' />
            <td className='gridspace' id='F3' /><td className='gridspace' id='F4' />
            <td className='gridspace' id='F5' /><td className='gridspace' id='F6' />
            <td className='gridspace' id='F7' /><td className='gridspace' id='F8' />
          </tr>
          <tr>
            <td className='gridspace' id='H1' /><td className='gridspace' id='H2' />
            <td className='gridspace' id='H3' /><td className='gridspace' id='H4' />
            <td className='gridspace' id='H5' /><td className='gridspace' id='H6' />
            <td className='gridspace' id='H7' /><td className='gridspace' id='H8' />
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Grid
