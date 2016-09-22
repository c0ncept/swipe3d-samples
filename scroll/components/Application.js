import React from 'react'

import {Screen, Scroll, DIR} from '../../swipe3d'

import MobileNav from 'components/MobileNav'

class Application extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.Screen = new Scroll(this.screenElement, {
        direction : DIR.VERTICAL
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
          <div className="screen-wrapper" ref={(c) => this.screenElement = c}>
            <div className="screen"><span>File <strong>1</strong></span></div>
            <div className="screen"><span>File <strong>2</strong></span></div>
            <div className="screen"><span>File <strong>3</strong></span></div>
            <div className="screen"><span>File <strong>4</strong></span></div>
            <div className="screen"><span>File <strong>5</strong></span></div>
          </div>
      </div>
    )
  }
}


export default Application
