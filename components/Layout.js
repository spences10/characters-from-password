import React from 'react'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  height: '90vh'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    {props.children}
  </div>
)

export default Layout
