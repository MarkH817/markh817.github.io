const path = require('path')

module.exports = {
  siteMetadata: {
    author: 'Mark Hernandez',
    description: 'A blog for NodeJS, web development, and stuff',
    siteUrl: 'https://www.lion-byte.com',
    title: 'Mark Hernandez (lion-byte)',
    keywords: 'portfolio, web development, JavaScript, NodeJS'
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-less',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-json',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        injectHTML: true,
        icons: {
          android: false,
          appleIcon: false,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: false,
          windows: false
        },
        logo: path.resolve(__dirname, './src/icons/profile.png')
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(({ node: { excerpt, html, frontmatter } }) => {
                return Object.assign({}, frontmatter, {
                  description: excerpt,
                  url: path.join(site.siteMetadata.siteUrl, frontmatter.path),
                  guid: path.join(site.siteMetadata.siteUrl, frontmatter.path),
                  custom_elements: [{ 'content:encoded': html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  limit: 1000,
                  sort: { order: DESC, fields: [ frontmatter___date ] }
                  filter: { frontmatter: {type: {eq: "post"}}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      frontmatter {
                        date
                        path
                        title
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, './posts'),
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: path.resolve(__dirname, './src'),
        name: 'site'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-responsive-iframe',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 624
            }
          },
          'gatsby-remark-copy-linked-files'
        ]
      }
    },
    'gatsby-plugin-netlify' // Must be last in list
  ]
}
