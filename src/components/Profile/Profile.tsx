import React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  username: string
}

export const Profile = (props: Props) => {
  return (
    <>
    <Helmet> 
      <title>Carventory - Profile</title>
    </Helmet>
    <h1 className='text-center'>{props.username}</h1>
    </>
  )
}
