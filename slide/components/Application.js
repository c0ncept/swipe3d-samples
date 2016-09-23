import React from 'react'

import {Screen, Scroll, Slide, DIR} from '../../swipe3d'

import MobileNav from 'components/MobileNav'

class Application extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.Screen = new Slide(this.screenElement, {
        direction : DIR.BOTTOM
      })
    }, 10)
  }
  componentWillUnmount() {
    this.Screen.destroy()
  }

  render() {
    return (
      <div className="mobile-wrapper">
        <MobileNav />
        <div className="screen">
          <span className="w">Screen</span>
        </div>
          <div className="screen-wrapper" ref={(c) => this.screenElement = c}>

            <div className="screen"><span>INFO</span></div>
          </div>
      </div>
    )
  }
}


export default Application
