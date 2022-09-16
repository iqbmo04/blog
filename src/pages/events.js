import * as React from 'react'
import Layout from '../components/layout/layout'
import Event from '../components/event/event'

const EventsPage = () => {
  return (
    <Layout pageTitle="Events">    
        <Event/>
    </Layout>
  )
}

export default EventsPage