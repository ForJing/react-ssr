import React from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'

const Home = () => {
  return (
    <div>
      <Header />
      <div>this is dannel lee</div>
      <button onClick={() => alert('click')}>click</button>
    </div>
  )
}

const mapStateToProps = state => ({
  name: state.name,
})

export default connect(mapStateToProps)(Home)
