import React from 'react'
import { Flex } from '@cwfe/react-components'
import './index.css'

const Home: () => JSX.Element = () => {
  return (
    <Flex className='home' align='center' justify='center' direction='column'>
      <p style={{ fontSize: '20px' }}>hellow world</p>
      <p style={{}}>have fun!</p>
    </Flex>
  )
}

export const testDemo: (a: number, b: number) => number = (a, b) => {
  return a + b
}

export default Home
