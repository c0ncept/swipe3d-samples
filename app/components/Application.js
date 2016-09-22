import React from 'react'

import MobileNav from 'components/MobileNav'

class Application extends React.Component {
  render() {
    return (
      <div className="mobile-wrapper">
        <div className="mobile-container">
          <div className="mobile-content">
            <MobileNav />
          </div>
        </div>
      </div>
    )
  }
}


export default Application
