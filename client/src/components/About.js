import React, { Component } from 'react'
import { Jumbotron } from 'reactstrap'

export default class About extends Component {

    render() {

        return(
          <div>
          <Jumbotron>

            <h1>
              <p>WE FIX JUST ABOUT EVERYTHING</p> <p>MACS, PCS, TABLETS, CONSOLES, & SMART PHONES</p>
            </h1>
            <div>
              Aside from being gurus in the Mac department, we are experienced in repairing all sorts of issues in a wide range of electronic devices. For a list of prices click <a href='/products'>here</a>.
            </div>
          </Jumbotron>
  
          <p>Contact us here: repairs@drb.email</p>
          </div>
        )
    }
}
