import * as React from 'react'
import { graphql } from 'gatsby'

import { TextType } from '../../components/animated/textType'
import { Page } from '../../templates/page'
import { ProjectList } from './projects'

export default class AboutPage extends React.PureComponent {
  render () {
    const {
      data: { bio }
    } = this.props

    return (
      <Page title='About'>
        <h1>
          <TextType text='About' />
        </h1>

        <section
          className='bio'
          dangerouslySetInnerHTML={{ __html: bio.html }}
        />

        <h2>
          <TextType text='Projects' />
        </h2>

        <ProjectList className='project-area' />
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
