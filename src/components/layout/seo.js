import * as React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

const htmlAttributes = { lang: 'en' }

export class SEO extends React.PureComponent {
  render () {
    return (
      <StaticQuery
        query={graphql`
          query {
            site {
              siteMetadata {
                author
                description
                siteUrl
                title
                keywords
              }
            }

            profile: imageSharp(original: { src: { regex: "/profile/" } }) {
              resize(height: 265, width: 265) {
                src
              }
            }
          }
        `}
        render={data => (
          <Helmet
            htmlAttributes={htmlAttributes}
            defaultTitle={data.site.siteMetadata.title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          >
            <meta
              name='description'
              content={data.site.siteMetadata.description}
            />
            <meta name='keywords' content={data.site.siteMetadata.keywords} />

            <meta name='theme-color' content='#104f5a' />
            <meta http-equiv='x-ua-compatible' content='ie=edge' />

            <meta
              name='google-site-verification'
              content='T2CmkDTMt0s2SVUBOfhDO7yuBOD-lJ2ZnJOO1YO5_LY'
            />
            <meta name='robots' content='index,follow' />
            <meta name='googlebot' content='index,follow' />
            <meta name='pinterest' content='nopin' />

            <meta name='og:site_name' content={data.site.siteMetadata.title} />
            <meta name='og:title' content={data.site.siteMetadata.title} />
            <meta name='og:type' content='website' />
            <meta
              name='og:description'
              content={data.site.siteMetadata.description}
            />
            <meta name='og:locale' content='en_US' />
            <meta name='og:image' content={data.profile.resize.src} />

            <meta name='twitter:card' content='summary' />
            <meta name='twitter:title' content={data.site.siteMetadata.title} />
            <meta
              name='twitter:description'
              content={data.site.siteMetadata.description}
            />
            <meta name='twitter:image' content={data.profile.resize.src} />
            <meta name='twitter:creator' content='@lion_byte' />
          </Helmet>
        )}
      />
    )
  }
}