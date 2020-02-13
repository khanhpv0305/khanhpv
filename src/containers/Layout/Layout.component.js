import React from 'react'

// Components
import Layout from './Layout.styled'

const LayoutComponent = (props) => {
  const {
    children,
    title,
  } = props

  return (
    <Layout>
      <Layout.Header>{title}</Layout.Header>

      <Layout.Main>{children}</Layout.Main>

      <Layout.Footer>this is footer</Layout.Footer>
    </Layout>
  )
}

export default LayoutComponent
