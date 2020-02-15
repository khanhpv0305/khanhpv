import {createElement} from 'react'

const renderHtml = (rawHTML, tag = 'div') => createElement(
  tag,
  {
    dangerouslySetInnerHTML: {__html: rawHTML},
  }
)

export default renderHtml
