import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Project from './Project'

const ProjectListStyles = styled.section``

export const PROJECTS_QUERY = graphql`
  query PROJECTS_QUERY {
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            demoUrl
            githubUrl
            languages
            libraries
          }
          html
        }
      }
    }
  }
`

export const ProjectList = props => (
  <StaticQuery query={PROJECTS_QUERY}>
    {data => {
      const {
        projects: { edges }
      } = data

      return (
        <ProjectListStyles>
          <h2>Projects</h2>

          {edges.map(({ node }) => (
            <Project key={node.frontmatter.title} {...node} />
          ))}
        </ProjectListStyles>
      )
    }}
  </StaticQuery>
)

export default ProjectList