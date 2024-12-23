import React from 'react'
import RepositoryDashboard from './RepositoryDashboard'

function Dashboard() {
  return (
    <div className='min-h-screen p-4'>
      <div className=' rounded-xl bg-white w-full h-screen'>
        <RepositoryDashboard/>
      </div>
    </div>
  )
}

export default Dashboard