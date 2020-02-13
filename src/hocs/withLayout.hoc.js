import React from 'react'

import {Layout} from '../containers'

const withLayout = (options = {}) => (Component) => {
  const {displayName = 'withLayout'} = options

  const NextComponent = (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  )

  NextComponent.displayName = displayName

  return NextComponent
}

export default withLayout
