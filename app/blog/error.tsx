'use client';

const error = ({error}: {error: Error}) => {
  return (
    <h1>Error {error.message}</h1>
  )
}

export default error