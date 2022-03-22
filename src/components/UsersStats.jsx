import React from 'react'

function UsersStats({users}) {
  let averageYears = users.reduce((acc, cur, _, arr) => cur.age / arr.length + acc, 0)
  averageYears = averageYears.toFixed(1).replace('.0', '')

  return (
    <div className='user-stats'>
      <p>{users.length} User{users.length > 1 && 's'}</p>
      <p>Average years: {averageYears}</p>
    </div>
  )
}

export default UsersStats