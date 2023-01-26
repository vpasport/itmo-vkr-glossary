import type { FC } from 'react'

import React from 'react'

import { Nodes, Header } from '@components'

export const Graph: FC = () => {
  return (
    <div>
      <Header />
      <Nodes />
    </div>
  )
}
