import * as React from 'react'
import '../sass/App.scss'
import Header from '../components/header'
import Message from '../components/message'

const IndexPage = () => {
  return (
   <div className="App">
     <Header />
     <Message/>
   </div>

  )
}

export default IndexPage;