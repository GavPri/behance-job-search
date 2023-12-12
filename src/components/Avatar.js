import React from 'react'
import axios from 'axios'

const fetchProfileInfo = async () => {
    try {
        const { data } = axios("http://randomuser.me/api/?results=1");
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

const Avatar = () => {
  return (
    <div>Avatar</div>
  )
}

export default Avatar