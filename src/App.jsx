import React from 'react'
import Header from './components/Header'
import Site from './components/Site'
import {sites} from './data'

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='block'>
        {sites.map((site) => <Site className='site' key={site.place} {...site} />)}
      </div>
    </React.Fragment>
  )
}

export default App
