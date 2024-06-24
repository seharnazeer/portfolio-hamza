import React from 'react'

type Props = {
    title:string
}

const Title = (props: Props) => {
  return (
    <div className='italic  font-mono text-3xl font-bold text-white underline underline-offset-4 w-auto '>{props.title}</div>
  )
}

export default Title