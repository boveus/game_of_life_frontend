import React, { Component } from 'react'

class Main extends Component {
  render () {
    function highlight (gridIndex) {
      document.getElementById(gridIndex).style.background = 'black'
    }

    return (
      <table>
        <tbody>
          <tr><td id='A1' /><td id='A2' /><td id='A3' /><td id='A4' />
            <td id='A5' /><td id='A6' /><td id='A7' /><td id='A8' /></tr>
          <tr><td id='B1' /><td id='B2' /><td id='B3' /><td id='B4' />
            <td id='B5' /><td id='B6' /><td id='B7' /><td id='B8' /></tr>
          <tr><td id='C1' /><td id='C2' /><td id='C3' /><td id='C4' />
            <td id='C5' /><td id='C6' /><td id='C7' /><td id='C8' /></tr>
          <tr><td id='D1' /><td id='D2' /><td id='D3' /><td id='D4' />
            <td id='D5' /><td id='D6' /><td id='D7' /><td id='D8' /></tr>
          <tr><td id='E1' /><td id='E2' /><td id='E3' /><td id='E4' />
            <td id='E5' /><td id='E6' /><td id='E7' /><td id='E8' /></tr>
          <tr><td id='F1' /><td id='F2' /><td id='F3' /><td id='F4' />
            <td id='F5' /><td id='F6' /><td id='F7' /><td id='F8' /></tr>
          <tr><td id='H1' /><td id='H2' /><td id='H3' /><td id='H4' />
            <td id='H5' /><td id='H6' /><td id='H7' /><td id='H8' /></tr>
          <tr><td id='I1' /><td id='I2' /><td id='I3' /><td id='I4' />
            <td id='I5' /><td id='I6' /><td id='I7' /><td id='I8' /></tr>
        </tbody>
      </table>
    )
  }
}

export default Main
