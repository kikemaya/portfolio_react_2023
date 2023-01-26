import React from 'react'

function Error418() {
  return (
    <div
      className='
      flex h-screen w-full justify-center
      items-center text-white text-4xl
      '>
      <p className='text-center'>
        Error 418: I'm a teapot client error<br />response code indicates that the server<br /><strong>refuses to brew coffe because it is a teapot...</strong>
      </p>
    </div>
  )
}

export default Error418