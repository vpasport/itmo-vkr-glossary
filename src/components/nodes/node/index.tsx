import type { FC } from 'react'
import type { NodeProps } from 'reactflow'

import React from 'react'
import { Handle, Position } from 'reactflow'

export const Node: FC<NodeProps> = React.memo(function Node({
  data,
  isConnectable,
}) {
  return (
    <>
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
    </>
  )
})
