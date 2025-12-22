import React from 'react'

const UserDashboard = ({userRole}) => {
    const user = userRole.trim().toLowerCase()
  return (
    <div className='bg-white p-lg-10 p-5 rounded-lg shadow-md text-center'>
        {user === 'admin' ? 'Welcome Boss' :   user === 'user' ? 'Welcome to dashboard' : 'Access Denied' }
    </div>
  )
}

export default UserDashboard