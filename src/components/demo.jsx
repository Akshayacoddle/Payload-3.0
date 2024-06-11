import React from 'react'
import '../app/(app)/globals.css'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
// for demo to show in 3.0 it became server component
// import { useState } from 'react'

export default async function demo() {
  const payload = await getPayloadHMR({ config })
  const users = await payload.find({
    collection: 'users',
  })
  console.log(users)
  //   const [userData, setUserData] = useState()
  return (
    <div className="bg-green-500 p-4 text-green-100">
      test components
      {users?.docs.map((user) => {
        return <p>{user.email}</p>
      })}
    </div>
  )
}
