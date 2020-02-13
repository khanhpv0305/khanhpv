import {flowRight} from 'lodash-es'

// Components
import NotFoundComponent from './NotFound.component'

// HOCs
import {withLayout, withHooks} from '../../hocs'

const useHooks = () => ({})

export default flowRight(
  withLayout({displayName: 'NotFoundPage'}),
  withHooks(useHooks),
)(NotFoundComponent)
