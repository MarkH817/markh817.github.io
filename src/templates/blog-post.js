import React from 'react'
import Helmet from 'react-helmet'

import './blog-post.less'

const Template = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <section className='blog-post-container'>
      <Helmet title={`${post.frontmatter.title} | Mark Hernandez`} />

      <article className='blog-post'>
        <h1>{post.frontmatter.title}</h1>

        <h2>
          <time>{post.frontmatter.date}</time>
        </h2>

        <section
          className='content'
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
    </section>
  )
}

export default Template

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        title
      }
    }
  }
`