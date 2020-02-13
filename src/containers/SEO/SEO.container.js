import {useStaticQuery, graphql} from 'gatsby'

// Components
import SEOComponent from './SEO.component'

// HOCs
import {withHooks} from '../../hocs'

const useHooks = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return {
    siteMetadata: data.site.siteMetadata,
  }
}

export default withHooks(useHooks, 'SEOContainer')(SEOComponent)
