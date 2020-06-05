import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

import './ProjectList.less'

const PROJECTS_QUERY = graphql`
  query PROJECTS_QUERY {
    projects: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
      edges {
        node {
          id
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

function ProjectList () {
  const data = useStaticQuery(PROJECTS_QUERY)
  /** @type {Array<ProjectData>} */
  const projects = data.projects.edges.map(edge => edge.node)

  return (
    <section>
      <h2>Projects</h2>

      <section className='project-list'>
        {projects.map(project => (
          <article key={project.id} className='project-list__item'>
            <h3>{project.frontmatter.title}</h3>

            <section
              className='project-list__item-description'
              dangerouslySetInnerHTML={{ __html: project.html }}
            />

            <footer className='project-list__item-footer'>
              <ul className='project-list__item-footer-info'>
                {project.frontmatter.demoUrl ? (
                  <li>
                    <a
                      href={project.frontmatter.demoUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.frontmatter.demoUrl}
                    </a>
                  </li>
                ) : null}

                {project.frontmatter.githubUrl ? (
                  <li>
                    <a
                      href={project.frontmatter.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.frontmatter.githubUrl}
                    </a>
                  </li>
                ) : null}

                <li>Written in: {project.frontmatter.languages.join(', ')}</li>
                <li>Libraries: {project.frontmatter.libraries.join(', ')}</li>
              </ul>
            </footer>
          </article>
        ))}
      </section>
    </section>
  )
}

/**
 * @typedef {object} ProjectData
 * @property {string} id
 * @property {object} frontmatter
 * @property {string} frontmatter.title
 * @property {Array<string>} frontmatter.languages
 * @property {Array<string>} frontmatter.libraries
 * @property {string} [frontmatter.githubUrl]
 * @property {string} [frontmatter.demoUrl]
 * @property {string} html
 */

export default ProjectList