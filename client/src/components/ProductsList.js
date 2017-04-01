import React, { PropTypes } from 'react'
import {  Route, Link } from 'react-router-dom'



const ProductsList = ({ title, children }) => (
  <div>
    <h3>{title}</h3>
    <div>
      {children}
    </div>
    <Main>
    </Main>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}




const Root = (props) => (
  <div style={{
    display: 'flex'
  }} {...props}/>
)

const Sidebar = (props) => (
  <div style={{
    width: '33vw',
    height: '100vh',
    overflow: 'auto',
    background: '#eee'
  }} {...props}/>
)

const SidebarItem = (props) => (
  <div style={{
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    padding: '5px 10px'
  }} {...props}/>
)

const Main = (props) => (
  <div style={{
    flex: 1,
    height: '100vh',
    overflow: 'auto'
  }}>
    <div style={{ padding: '20px'}} {...props}/>
  </div>
)

export default ProductsList
