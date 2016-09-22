import React from 'react'

import {Screen, DIR} from '../../swipe3d'

import MobileNav from 'components/MobileNav'

class Application extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.Screen = new Screen(this.screenElement, {
        direction : DIR.HORIZONTAL,
        threshold : 90,
        restraint : 110
      })
    }, 10)
  }
  componentWillUnmount() {
    //this.Screen.destroy()
  }

  render() {
    return (
      <div className="mobile-wrapper">
        <MobileNav />
          <div className="screen-wrapper" ref={(c) => this.screenElement = c}>
            <div className="screen"><span>screen <strong>1</strong></span></div>
            <div className="screen"><span>screen <strong>2</strong></span></div>
            <div className="screen"><span>screen <strong>3</strong></span></div>
            <div className="screen"><span>screen <strong>4</strong></span></div>
            <div className="screen"><span>screen <strong>5</strong></span></div>
          </div>
      </div>
    )
  }
}


export default Application
