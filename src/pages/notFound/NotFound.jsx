import React from 'react'
import {Link} from 'react-router-dom'
import './NotFound.css'
function NotFound() {
  return (
    <section>
      <div className="not__found">
        <div className="backdrop"></div>
        <div className="content">
          <h1>404 Error</h1>
          <p>The page your requested does not exist</p>

          <Link to="/" className="not__found-btn">
            Home Page
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFound