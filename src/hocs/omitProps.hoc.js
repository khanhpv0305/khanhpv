import {createElement} from 'react'
import {omit} from 'lodash-es'

const omitProps = (propsToBeOmitted, displayName = 'withOmitProps') => (Component) => {
  const NextComponent = (props) => {
    const nextProps = omit(props, propsToBeOmitted)

    return createElement(Component, nextProps)
  }

  NextComponent.displayName = displayName

  return NextComponent
}

export default omitProps
