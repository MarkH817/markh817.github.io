import * as React from 'react'
import Link from 'gatsby-link'
import Image from 'gatsby-image'

export class Navigation extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = { checked: false }

    this.hideNav = this.hideNav.bind(this)
    this.toggleNav = this.toggleNav.bind(this)
  }

  hideNav () {
    this.setState({ checked: false })
  }

  toggleNav () {
    this.setState(prevState => ({ checked: !prevState.checked }))
  }

  render () {
    const {
      profile: { resolutions, sizes },
      metadata: { title }
    } = this.props

    return (
      <nav>
        <Link to='/' className='brand'>
          <Image
            alt='Profile'
            outerWrapperClassName='profile-wrapper'
            className='profile'
            fadeIn
            resolutions={resolutions}
            sizes={sizes}
          />
        </Link>

        <Link to='/' className='brand'>
          <span>{title}</span>
        </Link>

        <input
          id='menu-toggle'
          type='checkbox'
          className='show'
          checked={this.state.checked}
          onChange={this.toggleNav}
        />
        <label htmlFor='menu-toggle' className='burger pseudo button'>
          &#9776;
        </label>

        <div className='menu'>
          <Link className='pseudo button' to='/' onClick={this.hideNav}>
            Home
          </Link>

          <Link className='pseudo button' to='/about' onClick={this.hideNav}>
            About
          </Link>

          <a
            className='pseudo button'
            href='https://github.com/MarkH817/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GitHub
          </a>

          <a
            className='pseudo button'
            href='https://www.twitter.com/lion_byte'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>

          <a
            className='pseudo button'
            href='https://www.linkedin.com/in/markhernandez1'
            target='_blank'
            rel='noopener noreferrer'
          >
            Linkedin
          </a>
        </div>
      </nav>
    )
  }
}
