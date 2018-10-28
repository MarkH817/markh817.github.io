import * as React from 'react'
import { graphql } from 'gatsby'

import { Page } from '../../templates/page'

export default class AboutPage extends React.PureComponent {
  render () {
    const {
      data: { bio }
    } = this.props

    return (
      <Page title='About'>
        <h1>About</h1>

        <section
          className='bio'
          dangerouslySetInnerHTML={{ __html: bio.html }}
        />
      </Page>
    )
  }
}

export const query = graphql`
  query AboutPageQuery {
    bio: markdownRemark(
      frontmatter: { type: { eq: "partial" }, page: { eq: "about" } }
    ) {
      html
    }
  }
`
