import {createElement} from 'react'

const withHooks = (useHooks, displayName = 'withHooks') => (Component) => {
  const NewComponent = (props) => {
    const hooksProps = useHooks(props)

    return createElement(Component, {...hooksProps, ...props})
  }

  NewComponent.displayName = displayName

  return NewComponent
}

export default withHooks