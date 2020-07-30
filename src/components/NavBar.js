import React from 'react'
import { Link, NavLink, withRouter} from 'react-router-dom'

const Navbar = (props) => {
    // setTimeout(() =>{
    //     props.history.push('/about')
    // }, 5000)

    return(
      <nav className="nav-wrapper red darken-3">
          <div className='container'>
              <a className="brand-logo">PokeTimes</a>
              <ul className='right'>
                  <li><Link to='/home'>Home</Link></li>
                  <li><NavLink to='/about'>About</NavLink></li>
                  <li><NavLink to='/contacts'>Contact</NavLink></li>
              </ul>
          </div>
      </nav>
    )
}

export default withRouter(Navbar)