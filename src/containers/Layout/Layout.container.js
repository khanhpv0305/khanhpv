import {graphql, useStaticQuery} from 'gatsby'

import LayoutComponent from './Layout.component'
import withHooks from '../../hocs/withHooks.hoc'

const useHooks = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return {
    title: data.site.siteMetadata.title,
  }
}

export default withHooks(useHooks, 'LayoutContainer')(LayoutComponent)
