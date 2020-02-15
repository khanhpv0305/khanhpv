const path = require('path')

exports.createPages = async ({graphql, actions}) => {
  const result = await graphql(`
    query {
      allWordpressWpArticle {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const {createPage} = actions

  result.data.allWordpressWpArticle.edges.forEach(
    ({node}) => {
      createPage({
        path: `/${node.slug}/`,
        component: path.resolve('./src/templates/PostDetails/PostDetails.template.js'),
        context: {
          slug: node.slug,
        },
      })
    },
  )
}
