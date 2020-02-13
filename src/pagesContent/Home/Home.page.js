import {flowRight} from 'lodash-es'

// Components
import HomeComponent from './Home.component'

// HOCs
import {withLayout, withHooks} from '../../hocs'

const useHooks = () => ({})

export default flowRight(
  withLayout({displayName: 'HomePage'}),
  withHooks(useHooks),
)(HomeComponent)
